// // // 'use client'

// // // import {
// // //   Box,
// // //   Container,
// // //   Heading,
// // //   Text,
// // //   VStack,
// // //   HStack,
// // //   Input,
// // //   Button,
// // //   Link,
// // //   Stack,
// // //   Separator,
// // //   Field,
// // // } from '@chakra-ui/react'
// // // import { Checkbox } from '@chakra-ui/react'
// // // import { MotionBox } from '@/components/shared/Motion'
// // // import { useState, ChangeEvent } from 'react'
// // // import { useRouter } from 'next/navigation'

// // // export default function SignupPage() {
// // //   const router = useRouter()
// // //   const [formData, setFormData] = useState({
// // //     email: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //     name: '',
// // //   })
// // //   const [acceptTerms, setAcceptTerms] = useState(false)
// // //   const [isLoading, setIsLoading] = useState(false)
// // //   const [errors, setErrors] = useState<Record<string, string>>({})

// // //   const validateForm = () => {
// // //     const newErrors: Record<string, string> = {}

// // //     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
// // //       newErrors.email = 'Please enter a valid email address'
// // //     }

// // //     if (formData.password.length < 8) {
// // //       newErrors.password = 'Password must be at least 8 characters'
// // //     }

// // //     if (formData.password !== formData.confirmPassword) {
// // //       newErrors.confirmPassword = 'Passwords do not match'
// // //     }

// // //     if (!formData.name.trim()) {
// // //       newErrors.name = 'Name is required'
// // //     }

// // //     if (!acceptTerms) {
// // //       newErrors.terms = 'You must accept the terms and conditions'
// // //     }

// // //     setErrors(newErrors)
// // //     return Object.keys(newErrors).length === 0
// // //   }

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
    
// // //     if (!validateForm()) {
// // //       return
// // //     }

// // //     setIsLoading(true)

// // //     try {
// // //       // TODO: Replace with actual API call
// // //       await new Promise(resolve => setTimeout(resolve, 1000))
      
// // //       // On successful signup
// // //       router.push('/home')
// // //     } catch (error) {
// // //       console.error('Signup failed:', error)
// // //       setErrors({ submit: 'Signup failed. Please try again.' })
// // //     } finally {
// // //       setIsLoading(false)
// // //     }
// // //   }

// // //   const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
// // //     setFormData(prev => ({ ...prev, [field]: e.target.value }))
// // //     // Clear error for this field when user starts typing
// // //     if (errors[field]) {
// // //       setErrors(prev => ({ ...prev, [field]: '' }))
// // //     }
// // //   }

// // //   return (
// // //     <Container maxW="container.sm" py={16} px={4}>
// // //       <MotionBox
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //       >
// // //         {/* Header */}
// // //         <Stack gap={2} align="center" mb={8}>
// // //           <Heading size="2xl" fontWeight="light" letterSpacing="tight">
// // //             Create Account
// // //           </Heading>
// // //           <Text color="gray.400">
// // //             Start your cinematic journey
// // //           </Text>
// // //         </Stack>

// // //         <form onSubmit={handleSubmit}>
// // //           <Stack gap={6} align="stretch">
// // //             {/* Name */}
// // //             <Field.Root invalid={!!errors.name}>
// // //               <Field.Label fontSize="sm" color="gray.300">
// // //                 Full Name
// // //               </Field.Label>
// // //               <Input
// // //                 type="text"
// // //                 value={formData.name}
// // //                 onChange={handleChange('name')}
// // //                 placeholder="Alex Johnson"
// // //                 borderRadius="none"
// // //                 borderColor={errors.name ? 'red.500' : 'gray.700'}
// // //                 _focus={{ borderColor: errors.name ? 'red.500' : 'gray.500' }}
// // //               />
// // //               {errors.name && (
// // //                 <Field.ErrorText color="red.400" fontSize="sm">
// // //                   {errors.name}
// // //                 </Field.ErrorText>
// // //               )}
// // //             </Field.Root>

// // //             {/* Email */}
// // //             <Field.Root invalid={!!errors.email}>
// // //               <Field.Label fontSize="sm" color="gray.300">
// // //                 Email Address
// // //               </Field.Label>
// // //               <Input
// // //                 type="email"
// // //                 value={formData.email}
// // //                 onChange={handleChange('email')}
// // //                 placeholder="alex@example.com"
// // //                 borderRadius="none"
// // //                 borderColor={errors.email ? 'red.500' : 'gray.700'}
// // //                 _focus={{ borderColor: errors.email ? 'red.500' : 'gray.500' }}
// // //               />
// // //               {errors.email && (
// // //                 <Field.ErrorText color="red.400" fontSize="sm">
// // //                   {errors.email}
// // //                 </Field.ErrorText>
// // //               )}
// // //             </Field.Root>

// // //             {/* Password */}
// // //             <Field.Root invalid={!!errors.password}>
// // //               <Field.Label fontSize="sm" color="gray.300">
// // //                 Password
// // //               </Field.Label>
// // //               <Input
// // //                 type="password"
// // //                 value={formData.password}
// // //                 onChange={handleChange('password')}
// // //                 placeholder="At least 8 characters"
// // //                 borderRadius="none"
// // //                 borderColor={errors.password ? 'red.500' : 'gray.700'}
// // //                 _focus={{ borderColor: errors.password ? 'red.500' : 'gray.500' }}
// // //               />
// // //               {errors.password && (
// // //                 <Field.ErrorText color="red.400" fontSize="sm">
// // //                   {errors.password}
// // //                 </Field.ErrorText>
// // //               )}
// // //             </Field.Root>

// // //             {/* Confirm Password */}
// // //             <Field.Root invalid={!!errors.confirmPassword}>
// // //               <Field.Label fontSize="sm" color="gray.300">
// // //                 Confirm Password
// // //               </Field.Label>
// // //               <Input
// // //                 type="password"
// // //                 value={formData.confirmPassword}
// // //                 onChange={handleChange('confirmPassword')}
// // //                 placeholder="Confirm your password"
// // //                 borderRadius="none"
// // //                 borderColor={errors.confirmPassword ? 'red.500' : 'gray.700'}
// // //                 _focus={{ borderColor: errors.confirmPassword ? 'red.500' : 'gray.500' }}
// // //               />
// // //               {errors.confirmPassword && (
// // //                 <Field.ErrorText color="red.400" fontSize="sm">
// // //                   {errors.confirmPassword}
// // //                 </Field.ErrorText>
// // //               )}
// // //             </Field.Root>

// // //             {/* Terms */}
// // //             <Box>
// // //               <Checkbox.Root
// // //                 checked={acceptTerms}
// // //                 onCheckedChange={(details) => {
// // //                   setAcceptTerms(details.checked === true)
// // //                   if (errors.terms) {
// // //                     setErrors(prev => ({ ...prev, terms: '' }))
// // //                   }
// // //                 }}
// // //                 colorPalette="green"
// // //               >
// // //                 <Checkbox.HiddenInput />
// // //                 <Checkbox.Control>
// // //                   <Checkbox.Indicator />
// // //                 </Checkbox.Control>
// // //                 <Checkbox.Label>
// // //                   <Text fontSize="sm" color="gray.300">
// // //                     I agree to the{' '}
// // //                     <Link href="/terms" color="white" textDecoration="underline">
// // //                       Terms of Service
// // //                     </Link>{' '}
// // //                     and{' '}
// // //                     <Link href="/privacy" color="white" textDecoration="underline">
// // //                       Privacy Policy
// // //                     </Link>
// // //                   </Text>
// // //                 </Checkbox.Label>
// // //               </Checkbox.Root>
// // //               {errors.terms && (
// // //                 <Text color="red.400" fontSize="sm" mt={1}>
// // //                   {errors.terms}
// // //                 </Text>
// // //               )}
// // //             </Box>

// // //             {/* Submit Error */}
// // //             {errors.submit && (
// // //               <Text color="red.400" fontSize="sm" textAlign="center">
// // //                 {errors.submit}
// // //               </Text>
// // //             )}

// // //             {/* Submit Button */}
// // //             <Button
// // //               type="submit"
// // //               loading={isLoading}
// // //               loadingText="Creating Account..."
// // //               className="w-full py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
// // //               borderRadius="none"
// // //             >
// // //               Create Account
// // //             </Button>
// // //           </Stack>
// // //         </form>

// // //         {/* Divider */}
// // //         <HStack my={8}>
// // //           <Separator borderColor="gray.800" />
// // //           <Text color="gray.500" fontSize="sm" px={4}>
// // //             OR
// // //           </Text>
// // //           <Separator borderColor="gray.800" />
// // //         </HStack>

// // //         {/* Social Signup */}
// // //         <Stack gap={4}>
// // //           <Button
// // //             variant="outline"
// // //             borderRadius="none"
// // //             borderColor="gray.700"
// // //             className="w-full hover:border-gray-500"
// // //           >
// // //             Continue with Google
// // //           </Button>
// // //           <Button
// // //             variant="outline"
// // //             borderRadius="none"
// // //             borderColor="gray.700"
// // //             className="w-full hover:border-gray-500"
// // //           >
// // //             Continue with Apple
// // //           </Button>
// // //         </Stack>

// // //         {/* Login Link */}
// // //         <Box mt={8} textAlign="center">
// // //           <Text color="gray.400" fontSize="sm">
// // //             Already have an account?{' '}
// // //             <Link
// // //               href="/auth/login"
// // //               color="white"
// // //               fontWeight="medium"
// // //               _hover={{ textDecoration: 'underline' }}
// // //             >
// // //               Sign In
// // //             </Link>
// // //           </Text>
// // //         </Box>

// // //         {/* Benefits */}
// // //         <Stack gap={4} mt={12} align="stretch">
// // //           <HStack>
// // //             <Box className="w-2 h-2 bg-green-400" />
// // //             <Text fontSize="sm" color="gray.400">
// // //               7-day free trial of Premium
// // //             </Text>
// // //           </HStack>
// // //           <HStack>
// // //             <Box className="w-2 h-2 bg-green-400" />
// // //             <Text fontSize="sm" color="gray.400">
// // //               Cancel anytime
// // //             </Text>
// // //           </HStack>
// // //           <HStack>
// // //             <Box className="w-2 h-2 bg-green-400" />
// // //             <Text fontSize="sm" color="gray.400">
// // //               No commitments
// // //             </Text>
// // //           </HStack>
// // //         </Stack>
// // //       </MotionBox>
// // //     </Container>
// // //   )
// // // }


// // // 'use client'

// // // import { useState, ChangeEvent } from 'react'
// // // import { useRouter } from 'next/navigation'
// // // import Link from 'next/link'
// // // import { motion } from 'framer-motion'
// // // import { Check, AlertCircle, Loader2, ArrowRight } from 'lucide-react'

// // // // Reusing your MotionDiv or a simple motion wrapper
// // // const MotionDiv = motion.div

// // // export default function SignupPage() {
// // //   const router = useRouter()
// // //   const [formData, setFormData] = useState({
// // //     email: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //     name: '',
// // //   })
// // //   const [acceptTerms, setAcceptTerms] = useState(false)
// // //   const [isLoading, setIsLoading] = useState(false)
// // //   const [errors, setErrors] = useState<Record<string, string>>({})

// // //   // --- LOGIC PRESERVED FROM YOUR CHAKRA COMPONENT ---
// // //   const validateForm = () => {
// // //     const newErrors: Record<string, string> = {}

// // //     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
// // //       newErrors.email = 'Please enter a valid email address'
// // //     }

// // //     if (formData.password.length < 8) {
// // //       newErrors.password = 'Password must be at least 8 characters'
// // //     }

// // //     if (formData.password !== formData.confirmPassword) {
// // //       newErrors.confirmPassword = 'Passwords do not match'
// // //     }

// // //     if (!formData.name.trim()) {
// // //       newErrors.name = 'Name is required'
// // //     }

// // //     if (!acceptTerms) {
// // //       newErrors.terms = 'You must accept the terms'
// // //     }

// // //     setErrors(newErrors)
// // //     return Object.keys(newErrors).length === 0
// // //   }

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
    
// // //     if (!validateForm()) {
// // //       return
// // //     }

// // //     setIsLoading(true)

// // //     try {
// // //       // Simulation
// // //       await new Promise(resolve => setTimeout(resolve, 1000))
// // //       router.push('/home')
// // //     } catch (error) {
// // //       console.error('Signup failed:', error)
// // //       setErrors({ submit: 'Signup failed. Please try again.' })
// // //     } finally {
// // //       setIsLoading(false)
// // //     }
// // //   }

// // //   const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
// // //     setFormData(prev => ({ ...prev, [field]: e.target.value }))
// // //     if (errors[field]) {
// // //       setErrors(prev => ({ ...prev, [field]: '' }))
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-white selection:text-black">
      
// // //       {/* Background Ambient Glow */}
// // //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// // //          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
// // //          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
// // //       </div>

// // //       <MotionDiv
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="w-full max-w-lg relative z-10"
// // //       >
// // //         {/* Header */}
// // //         <div className="text-center mb-10 space-y-2">
// // //           <h1 className="text-4xl md:text-5xl font-medium tracking-tighter">
// // //             Create Account
// // //           </h1>
// // //           <p className="text-zinc-500 font-light">
// // //             Start your cinematic journey.
// // //           </p>
// // //         </div>

// // //         <form onSubmit={handleSubmit} className="space-y-6">
          
// // //           {/* Name Field */}
// // //           <div className="space-y-2">
// // //             <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
// // //             <input
// // //               type="text"
// // //               value={formData.name}
// // //               onChange={handleChange('name')}
// // //               placeholder="Alex Johnson"
// // //               className={`w-full bg-zinc-900/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// // //             />
// // //             {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
// // //           </div>

// // //           {/* Email Field */}
// // //           <div className="space-y-2">
// // //             <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
// // //             <input
// // //               type="email"
// // //               value={formData.email}
// // //               onChange={handleChange('email')}
// // //               placeholder="alex@example.com"
// // //               className={`w-full bg-zinc-900/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// // //             />
// // //              {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
// // //           </div>

// // //           {/* Password Row */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             <div className="space-y-2">
// // //                 <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
// // //                 <input
// // //                 type="password"
// // //                 value={formData.password}
// // //                 onChange={handleChange('password')}
// // //                 placeholder="••••••••"
// // //                 className={`w-full bg-zinc-900/50 border ${errors.password ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// // //                 />
// // //                 {errors.password && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.password}</p>}
// // //             </div>

// // //             <div className="space-y-2">
// // //                 <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Confirm</label>
// // //                 <input
// // //                 type="password"
// // //                 value={formData.confirmPassword}
// // //                 onChange={handleChange('confirmPassword')}
// // //                 placeholder="••••••••"
// // //                 className={`w-full bg-zinc-900/50 border ${errors.confirmPassword ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// // //                 />
// // //                 {errors.confirmPassword && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.confirmPassword}</p>}
// // //             </div>
// // //           </div>

// // //           {/* Terms Checkbox */}
// // //           <div className="pt-2">
// // //             <label className="flex items-start gap-3 cursor-pointer group">
// // //               <div className={`w-5 h-5 border ${acceptTerms ? 'bg-white border-white' : 'border-zinc-700 group-hover:border-zinc-500'} flex items-center justify-center transition-all mt-0.5`}>
// // //                  <input 
// // //                     type="checkbox" 
// // //                     className="hidden" 
// // //                     checked={acceptTerms} 
// // //                     onChange={(e) => {
// // //                         setAcceptTerms(e.target.checked)
// // //                         if (errors.terms) setErrors(prev => ({ ...prev, terms: '' }))
// // //                     }}
// // //                  />
// // //                  {acceptTerms && <Check size={14} className="text-black" strokeWidth={3} />}
// // //               </div>
// // //               <span className="text-sm text-zinc-500 leading-relaxed select-none">
// // //                 I agree to the <Link href="/terms" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Terms of Service</Link> and <Link href="/privacy" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Privacy Policy</Link>
// // //               </span>
// // //             </label>
// // //             {errors.terms && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.terms}</p>}
// // //           </div>

// // //           {/* Submit Error Global */}
// // //           {errors.submit && (
// // //             <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
// // //                 {errors.submit}
// // //             </div>
// // //           )}

// // //           {/* Action Button */}
// // //           <button
// // //             type="submit"
// // //             disabled={isLoading}
// // //             className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// // //           >
// // //             {isLoading && <Loader2 className="animate-spin" size={16} />}
// // //             {isLoading ? 'Creating Account...' : 'Create Account'}
// // //           </button>

// // //         </form>

// // //         {/* Divider */}
// // //         <div className="flex items-center gap-4 my-8">
// // //             <div className="h-px bg-zinc-800 flex-1" />
// // //             <span className="text-xs text-zinc-600 font-medium">OR CONTINUE WITH</span>
// // //             <div className="h-px bg-zinc-800 flex-1" />
// // //         </div>

// // //         {/* Socials */}
// // //         <div className="grid grid-cols-2 gap-4">
// // //             <button className="py-3 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 text-sm text-zinc-300 transition-all">
// // //                 Google
// // //             </button>
// // //             <button className="py-3 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 text-sm text-zinc-300 transition-all">
// // //                 Apple
// // //             </button>
// // //         </div>

// // //         {/* Login Link */}
// // //         <div className="mt-8 text-center">
// // //             <p className="text-zinc-500 text-sm">
// // //                 Already have an account?{' '}
// // //                 <Link href="/auth/login" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
// // //                     Sign In
// // //                 </Link>
// // //             </p>
// // //         </div>

// // //         {/* Benefits Footer */}
// // //         <div className="mt-12 grid grid-cols-3 gap-2 border-t border-zinc-900 pt-6">
// // //             {['7-day free trial', 'Cancel anytime', 'No commitments'].map((item) => (
// // //                 <div key={item} className="flex flex-col items-center gap-2 text-center">
// // //                     <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
// // //                     <span className="text-[10px] uppercase tracking-wider text-zinc-600">{item}</span>
// // //                 </div>
// // //             ))}
// // //         </div>

// // //       </MotionDiv>
// // //     </div>
// // //   )
// // // }


// // 'use client'

// // import { useState, ChangeEvent } from 'react'
// // import { useRouter } from 'next/navigation'
// // import Link from 'next/link'
// // import { motion } from 'framer-motion'
// // import { Check, AlertCircle, Loader2, ArrowLeft, ArrowRight } from 'lucide-react'

// // // Reusing MotionDiv
// // const MotionDiv = motion.div

// // export default function SignupPage() {
// //   const router = useRouter()
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     name: '',
// //   })
// //   const [acceptTerms, setAcceptTerms] = useState(false)
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [errors, setErrors] = useState<Record<string, string>>({})

// //   const validateForm = () => {
// //     const newErrors: Record<string, string> = {}

// //     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
// //       newErrors.email = 'Please enter a valid email address'
// //     }

// //     if (formData.password.length < 8) {
// //       newErrors.password = 'Password must be at least 8 characters'
// //     }

// //     if (formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match'
// //     }

// //     if (!formData.name.trim()) {
// //       newErrors.name = 'Name is required'
// //     }

// //     if (!acceptTerms) {
// //       newErrors.terms = 'You must accept the terms'
// //     }

// //     setErrors(newErrors)
// //     return Object.keys(newErrors).length === 0
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
    
// //     if (!validateForm()) {
// //       return
// //     }

// //     setIsLoading(true)

// //     try {
// //       // Simulation
// //       await new Promise(resolve => setTimeout(resolve, 1000))
// //       router.push('/home')
// //     } catch (error) {
// //       console.error('Signup failed:', error)
// //       setErrors({ submit: 'Signup failed. Please try again.' })
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
// //     setFormData(prev => ({ ...prev, [field]: e.target.value }))
// //     if (errors[field]) {
// //       setErrors(prev => ({ ...prev, [field]: '' }))
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-white selection:text-black relative">
      
// //       {/* Back Button */}
// //       <button 
// //         onClick={() => router.back()}
// //         type="button"
// //         className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group z-20"
// //       >
// //         <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
// //         <span className="text-sm font-medium tracking-wide">Back</span>
// //       </button>

// //       {/* Background Ambient Glow */}
// //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// //          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
// //          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
// //       </div>

// //       <MotionDiv
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="w-full max-w-lg relative z-10"
// //       >
// //         {/* Card Container matches Signin Page */}
// //         <div className="border border-zinc-800 bg-[#050505]/50 backdrop-blur-sm p-8 md:p-10 relative group">
          
// //           {/* Header */}
// //           <div className="mb-8">
// //             <h1 className="text-3xl font-medium tracking-tighter mb-2">
// //               Create Account
// //             </h1>
// //             <p className="text-zinc-500 font-light text-sm">
// //               Start your cinematic journey today.
// //             </p>
// //           </div>

// //           <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            
// //             {/* Name Field */}
// //             <div className="space-y-2">
// //               <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
// //               <input
// //                 type="text"
// //                 value={formData.name}
// //                 onChange={handleChange('name')}
// //                 placeholder="Alex Johnson"
// //                 className={`w-full bg-zinc-900/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// //               />
// //               {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
// //             </div>

// //             {/* Email Field */}
// //             <div className="space-y-2">
// //               <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
// //               <input
// //                 type="email"
// //                 value={formData.email}
// //                 onChange={handleChange('email')}
// //                 placeholder="alex@example.com"
// //                 className={`w-full bg-zinc-900/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// //               />
// //                {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
// //             </div>

// //             {/* Password Row */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //               <div className="space-y-2">
// //                   <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
// //                   <input
// //                   type="password"
// //                   value={formData.password}
// //                   onChange={handleChange('password')}
// //                   placeholder="••••••••"
// //                   className={`w-full bg-zinc-900/50 border ${errors.password ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// //                   />
// //                   {errors.password && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.password}</p>}
// //               </div>

// //               <div className="space-y-2">
// //                   <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Confirm</label>
// //                   <input
// //                   type="password"
// //                   value={formData.confirmPassword}
// //                   onChange={handleChange('confirmPassword')}
// //                   placeholder="••••••••"
// //                   className={`w-full bg-zinc-900/50 border ${errors.confirmPassword ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
// //                   />
// //                   {errors.confirmPassword && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.confirmPassword}</p>}
// //               </div>
// //             </div>

// //             {/* Terms Checkbox */}
// //             <div className="pt-1">
// //               <label className="flex items-start gap-3 cursor-pointer group">
// //                 <div className={`w-5 h-5 border ${acceptTerms ? 'bg-white border-white' : 'border-zinc-700 group-hover:border-zinc-500'} flex items-center justify-center transition-all mt-0.5`}>
// //                    <input 
// //                       type="checkbox" 
// //                       className="hidden" 
// //                       checked={acceptTerms} 
// //                       onChange={(e) => {
// //                           setAcceptTerms(e.target.checked)
// //                           if (errors.terms) setErrors(prev => ({ ...prev, terms: '' }))
// //                       }}
// //                    />
// //                    {acceptTerms && <Check size={14} className="text-black" strokeWidth={3} />}
// //                 </div>
// //                 <span className="text-sm text-zinc-500 leading-relaxed select-none">
// //                   I agree to the <Link href="/terms" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Terms</Link> and <Link href="/privacy" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Privacy</Link>
// //                 </span>
// //               </label>
// //               {errors.terms && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.terms}</p>}
// //             </div>

// //             {/* Submit Error Global */}
// //             {errors.submit && (
// //               <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
// //                   {errors.submit}
// //               </div>
// //             )}

// //             {/* Action Button - Matched Design */}
// //             <button
// //               type="submit"
// //               disabled={isLoading}
// //               className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn"
// //             >
// //               {isLoading ? (
// //                 <Loader2 className="animate-spin" size={16} />
// //               ) : (
// //                 <>
// //                   Create Account <ArrowRight size={16} className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"/>
// //                 </>
// //               )}
// //             </button>

// //           </form>

// //           {/* Divider */}
// //           <div className="flex items-center gap-4 my-8 relative z-10">
// //               <div className="h-px bg-zinc-800 flex-1" />
// //               <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">Or Continue With</span>
// //               <div className="h-px bg-zinc-800 flex-1" />
// //           </div>

// //           {/* Socials */}
// //           <div className="grid grid-cols-2 gap-4 relative z-10">
// //               <button className="py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all">
// //                   Google
// //               </button>
// //               <button className="py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all">
// //                   Apple
// //               </button>
// //           </div>

// //           {/* Login Link */}
// //           <div className="mt-8 text-center relative z-10">
// //               <p className="text-zinc-500 text-sm">
// //                   Already have an account?{' '}
// //                   <Link href="/auth/login" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
// //                       Sign In
// //                   </Link>
// //               </p>
// //           </div>
        
// //         </div>
// //       </MotionDiv>
// //     </div>
// //   )
// // }


// 'use client'

// import { useState, ChangeEvent } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { Check, AlertCircle, Loader2, ArrowLeft, ArrowRight } from 'lucide-react'

// // Reusing MotionDiv
// const MotionDiv = motion.div

// export default function SignupPage() {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     name: '',
//   })
//   const [acceptTerms, setAcceptTerms] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [errors, setErrors] = useState<Record<string, string>>({})

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}

//     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.email = 'Please enter a valid email address'
//     }

//     if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters'
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match'
//     }

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required'
//     }

//     if (!acceptTerms) {
//       newErrors.terms = 'You must accept the terms'
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!validateForm()) {
//       return
//     }

//     setIsLoading(true)

//     try {
//       // Simulation
//       await new Promise(resolve => setTimeout(resolve, 1000))
//       router.push('/home')
//     } catch (error) {
//       console.error('Signup failed:', error)
//       setErrors({ submit: 'Signup failed. Please try again.' })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({ ...prev, [field]: e.target.value }))
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: '' }))
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-white selection:text-black relative">
      
//       {/* Back Button */}
//       <button 
//         onClick={() => router.back()}
//         type="button"
//         className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group z-20"
//       >
//         <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
//         <span className="text-sm font-medium tracking-wide">Back</span>
//       </button>

//       {/* Background Ambient Glow */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
//          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
//       </div>

//       <MotionDiv
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-lg relative z-10"
//       >
//         {/* Card Container */}
//         <div className="border border-zinc-800 bg-[#050505]/50 backdrop-blur-sm p-8 md:p-10 relative group">
          
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-medium tracking-tighter mb-2">
//               Create Account
//             </h1>
//             <p className="text-zinc-500 font-light text-sm">
//               Start your cinematic journey today.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            
//             {/* Name Field */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange('name')}
//                 placeholder="Alex Johnson"
//                 className={`w-full bg-zinc-900/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
//               />
//               {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
//             </div>

//             {/* Email Field */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange('email')}
//                 placeholder="alex@example.com"
//                 className={`w-full bg-zinc-900/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
//               />
//                {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
//             </div>

//             {/* Password Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
//                   <input
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange('password')}
//                   placeholder="••••••••"
//                   className={`w-full bg-zinc-900/50 border ${errors.password ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
//                   />
//                   {errors.password && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.password}</p>}
//               </div>

//               <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Confirm</label>
//                   <input
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange('confirmPassword')}
//                   placeholder="••••••••"
//                   className={`w-full bg-zinc-900/50 border ${errors.confirmPassword ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
//                   />
//                   {errors.confirmPassword && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.confirmPassword}</p>}
//               </div>
//             </div>

//             {/* Terms Checkbox */}
//             <div className="pt-1">
//               <label className="flex items-start gap-3 cursor-pointer group">
//                 <div className={`w-5 h-5 border ${acceptTerms ? 'bg-white border-white' : 'border-zinc-700 group-hover:border-zinc-500'} flex items-center justify-center transition-all mt-0.5`}>
//                    <input 
//                       type="checkbox" 
//                       className="hidden" 
//                       checked={acceptTerms} 
//                       onChange={(e) => {
//                           setAcceptTerms(e.target.checked)
//                           if (errors.terms) setErrors(prev => ({ ...prev, terms: '' }))
//                       }}
//                    />
//                    {acceptTerms && <Check size={14} className="text-black" strokeWidth={3} />}
//                 </div>
//                 <span className="text-sm text-zinc-500 leading-relaxed select-none">
//                   I agree to the <Link href="/terms" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Terms</Link> and <Link href="/privacy" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Privacy</Link>
//                 </span>
//               </label>
//               {errors.terms && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.terms}</p>}
//             </div>

//             {/* Submit Error Global */}
//             {errors.submit && (
//               <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
//                   {errors.submit}
//               </div>
//             )}

//             {/* Action Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn"
//             >
//               {isLoading ? (
//                 <Loader2 className="animate-spin" size={16} />
//               ) : (
//                 <>
//                   Create Account <ArrowRight size={16} className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"/>
//                 </>
//               )}
//             </button>

//           </form>

//           {/* Divider */}
//           <div className="flex items-center gap-4 my-8 relative z-10">
//               <div className="h-px bg-zinc-800 flex-1" />
//               <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">Or Continue With</span>
//               <div className="h-px bg-zinc-800 flex-1" />
//           </div>

//           {/* Socials - Added Icons */}
//           <div className="grid grid-cols-2 gap-4 relative z-10">
//   {/* GOOGLE */}
//   <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all group">
//     <span className="w-4 h-4 flex items-center justify-center">
//       <svg
//         className="w-full h-full fill-current transition-colors group-hover:text-white"
//         viewBox="0 0 24 24"
//       >
//         <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//         <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//         <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//         <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//       </svg>
//     </span>
//     Google
//   </button>

//   {/* APPLE */}
//   <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all group">
//     <span className="w-4 h-4 flex items-center justify-center">
//       <svg
//         className="w-full h-full fill-current scale-90 transition-colors group-hover:text-white"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 22.773 22.773"
//       >
//         <path d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0z" />
//         <path d="M20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.166 2.072 1.434 3.348 3.018 4.104z" />
//       </svg>
//     </span>
//     Apple
//   </button>
// </div>

//           {/* Login Link */}
//           <div className="mt-8 text-center relative z-10">
//               <p className="text-zinc-500 text-sm">
//                   Already have an account?{' '}
//                   <Link href="/auth/login" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
//                       Sign In
//                   </Link>
//               </p>
//           </div>
        
//         </div>
//       </MotionDiv>
//     </div>
//   )
// }


'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, AlertCircle, Loader2, ArrowLeft, ArrowRight, MoreHorizontal } from 'lucide-react'

const MotionDiv = motion.div

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSocials, setShowSocials] = useState(false) // Toggle state

  // --- MOCK SOCIAL LOGIC ---
  const handleMockSocial = (provider: string) => {
    // Simulate API delay
    const btn = document.activeElement as HTMLElement
    if(btn) btn.style.opacity = '0.7'
    
    setTimeout(() => {
      if(btn) btn.style.opacity = '1'
      alert(`[DEMO] ${provider} signup simulated.`)
    }, 1000)
  }

  // --- REAL REGISTRATION LOGIC ---
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email'
    if (formData.password.length < 8) newErrors.password = 'Min 8 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Mismatch'
    if (!formData.name.trim()) newErrors.name = 'Required'
    if (!acceptTerms) newErrors.terms = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      // 1. Register User in DB
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      // 2. Auto-Login
      const loginRes = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (loginRes?.error) {
        throw new Error('Account created but login failed. Please sign in manually.')
      }

      // 3. Redirect
      router.push('/account')

    } catch (error: any) {
      console.error('Signup failed:', error)
      setErrors({ submit: error.message || 'Something went wrong.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-white selection:text-black relative">
      
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        type="button"
        className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group z-20"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium tracking-wide">Back</span>
      </button>

      {/* Ambient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="border border-zinc-800 bg-[#050505]/50 backdrop-blur-sm p-8 md:p-10 relative group">
          
          <div className="mb-8">
            <h1 className="text-3xl font-medium tracking-tighter mb-2">Create Account</h1>
            <p className="text-zinc-500 font-light text-sm">Start your cinematic journey today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange('name')}
                placeholder="Alex Johnson"
                className={`w-full bg-zinc-900/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
              />
              {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                placeholder="alex@example.com"
                className={`w-full bg-zinc-900/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
              />
               {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
                  <input
                  type="password"
                  value={formData.password}
                  onChange={handleChange('password')}
                  placeholder="••••••••"
                  className={`w-full bg-zinc-900/50 border ${errors.password ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
                  />
                  {errors.password && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.password}</p>}
              </div>

              <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Confirm</label>
                  <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  placeholder="••••••••"
                  className={`w-full bg-zinc-900/50 border ${errors.confirmPassword ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'} text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700`}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="pt-1">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className={`w-5 h-5 border ${acceptTerms ? 'bg-white border-white' : 'border-zinc-700 group-hover:border-zinc-500'} flex items-center justify-center transition-all mt-0.5`}>
                   <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={acceptTerms} 
                      onChange={(e) => {
                          setAcceptTerms(e.target.checked)
                          if (errors.terms) setErrors(prev => ({ ...prev, terms: '' }))
                      }}
                   />
                   {acceptTerms && <Check size={14} className="text-black" strokeWidth={3} />}
                </div>
                <span className="text-sm text-zinc-500 leading-relaxed select-none">
                  I agree to the <Link href="/terms" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Terms</Link> and <Link href="/privacy" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4">Privacy</Link>
                </span>
              </label>
              {errors.terms && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.terms}</p>}
            </div>

            {errors.submit && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
                  {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn"
            >
              {isLoading ? <Loader2 className="animate-spin" size={16} /> : (
                <>
                  Create Account <ArrowRight size={16} className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"/>
                </>
              )}
            </button>
          </form>

          {/* MOCK SOCIALS SECTION */}
          <div className="mt-8 relative z-10">
            <AnimatePresence mode="wait">
              {!showSocials ? (
                /* The "Reveal" Trigger */
                <motion.div
                  key="trigger"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => setShowSocials(true)}
                    type="button"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors py-2 px-4 hover:bg-zinc-900/50 rounded-full border border-transparent hover:border-zinc-800"
                  >
                    <MoreHorizontal size={14} />
                    Other Options
                  </button>
                </motion.div>
              ) : (
                /* The Mock Buttons */
                <motion.div
                  key="socials"
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px bg-zinc-800 flex-1" />
                    <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">Or Continue With</span>
                    <div className="h-px bg-zinc-800 flex-1" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {/* Google (MOCK) */}
                    <button 
                      type="button"
                      onClick={() => handleMockSocial('Google')} 
                      className="flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all group"
                    >
                      <span className="w-4 h-4 flex items-center justify-center">
                        <svg className="w-full h-full fill-current transition-colors group-hover:text-white" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </span>
                      Google
                    </button>

                    {/* Apple (MOCK) */}
                    <button 
                      type="button"
                      onClick={() => handleMockSocial('Apple')}
                      className="flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all group"
                    >
                      <span className="w-4 h-4 flex items-center justify-center">
                        <svg className="w-full h-full fill-current scale-90 transition-colors group-hover:text-white" viewBox="0 0 22.773 22.773">
                          <path d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0z" />
                          <path d="M20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.166 2.072 1.434 3.348 3.018 4.104z" />
                        </svg>
                      </span>
                      Apple
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center relative z-10">
              <p className="text-zinc-500 text-sm">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
                      Sign In
                  </Link>
              </p>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}