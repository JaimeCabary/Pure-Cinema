'use client'

import { useState, useCallback, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Search as SearchIcon, X } from 'lucide-react'
import { searchMovies } from '@/lib/tmdb'
import { SearchResults } from '@/components/app/SearchResults'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebounce(query, 500) // Increased slightly for "weightier" feel
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([])
      setHasSearched(false)
      return
    }
    
    setIsLoading(true)
    setHasSearched(true)
    
    try {
      const data = await searchMovies(searchQuery)
      setResults(data.results || data || [])
    } catch (error) {
      console.error('Search failed:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery)
    } else if (debouncedQuery.length === 0) {
      setResults([])
      setHasSearched(false)
    }
  }, [debouncedQuery, handleSearch])

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setHasSearched(false)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Search Header / Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-24 max-w-4xl"
        >
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4">
              Database Search
            </label>
            
            <div className="relative group">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Find your story..."
                    className="w-full bg-transparent text-4xl md:text-6xl font-medium tracking-tight text-white placeholder-zinc-800 border-b border-zinc-800 py-6 focus:border-white focus:outline-none transition-colors duration-500"
                    autoFocus
                />
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 flex items-center gap-4">
                    {isLoading && <Loader2 className="animate-spin" size={24} />}
                    {query && !isLoading && (
                        <button 
                            onClick={clearSearch}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>

        {/* Results Container */}
        <div className="min-h-[400px]">
             {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64 text-zinc-600 gap-4">
                   <div className="w-1 h-16 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-full animate-pulse" />
                   <span className="text-xs tracking-widest uppercase">Searching frequency...</span>
                </div>
             ) : results.length > 0 ? (
                <SearchResults results={results} />
             ) : hasSearched && query.length >= 2 ? (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-center py-20 border-t border-white/5"
                >
                    <p className="text-2xl text-zinc-600 font-light">
                        No matches found for <span className="text-white">"{query}"</span>.
                    </p>
                    <p className="text-zinc-700 mt-2 text-sm">Try searching for a director, title, or franchise.</p>
                </motion.div>
             ) : (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-start gap-4 text-zinc-800 select-none"
                >
                    {/* Decorative placeholder content */}
                    <SearchIcon size={64} strokeWidth={1} className="opacity-20" />
                    <p className="text-4xl font-semibold tracking-tighter opacity-20">
                        Waiting for input.
                    </p>
                </motion.div>
             )}
        </div>
      </div>
    </div>
  )
}