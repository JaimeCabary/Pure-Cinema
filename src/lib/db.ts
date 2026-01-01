// Import PrismaClient type conditionally
let PrismaClient: any

try {
  // Try to import PrismaClient
  const prismaModule = require('@prisma/client')
  PrismaClient = prismaModule.PrismaClient
} catch (error) {
  // If @prisma/client is not installed, create a mock
  console.warn('Warning: @prisma/client not found. Using mock PrismaClient.')
  PrismaClient = class MockPrismaClient {
    user = {
      findUnique: async () => null,
      findMany: async () => [],
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
    }
    watchlist = {
      findMany: async () => [],
      upsert: async () => ({}),
      delete: async () => ({}),
      count: async () => 0,
    }
    watchHistory = {
      findMany: async () => [],
      upsert: async () => ({}),
      count: async () => 0,
    }
    download = {
      findMany: async () => [],
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
      count: async () => 0,
    }
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClient> | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

// Helper functions for common operations
export async function getWatchlist(userId: string) {
  return db.watchlist.findMany({
    where: { userId },
    orderBy: { addedAt: 'desc' },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  })
}

export async function addToWatchlist(userId: string, movieId: string, movieData: {
  movieTitle: string
  posterPath?: string
}) {
  return db.watchlist.upsert({
    where: {
      userId_movieId: { userId, movieId },
    },
    create: {
      userId,
      movieId,
      movieTitle: movieData.movieTitle,
      posterPath: movieData.posterPath,
    },
    update: {
      addedAt: new Date(),
    },
  })
}

export async function removeFromWatchlist(userId: string, movieId: string) {
  return db.watchlist.delete({
    where: {
      userId_movieId: { userId, movieId },
    },
  })
}

export async function getWatchHistory(userId: string, limit: number = 20) {
  return db.watchHistory.findMany({
    where: { userId },
    orderBy: { lastWatched: 'desc' },
    take: limit,
  })
}

export async function updateWatchHistory(
  userId: string,
  movieId: string,
  data: {
    movieTitle: string
    posterPath?: string
    progress: number
  }
) {
  return db.watchHistory.upsert({
    where: {
      userId_movieId: { userId, movieId },
    },
    create: {
      userId,
      movieId,
      movieTitle: data.movieTitle,
      posterPath: data.posterPath,
      progress: data.progress,
    },
    update: {
      progress: data.progress,
      lastWatched: new Date(),
    },
  })
}

export async function getDownloads(userId: string) {
  return db.download.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })
}

export async function createDownload(
  userId: string,
  movieId: string,
  data: {
    movieTitle: string
    quality: string
    fileSize?: number
  }
) {
  return db.download.create({
    data: {
      userId,
      movieId,
      movieTitle: data.movieTitle,
      quality: data.quality,
      fileSize: data.fileSize,
      status: 'downloading',
      progress: 0,
    },
  })
}

export async function updateDownloadProgress(
  downloadId: string,
  progress: number,
  status?: 'downloading' | 'completed' | 'failed'
) {
  const updateData: any = { progress }
  
  if (status) {
    updateData.status = status
    if (status === 'completed') {
      updateData.downloadedAt = new Date()
    }
  }

  return db.download.update({
    where: { id: downloadId },
    data: updateData,
  })
}

export async function deleteDownload(downloadId: string) {
  return db.download.delete({
    where: { id: downloadId },
  })
}

export async function getUserStats(userId: string) {
  const [watchlistCount, watchHistoryCount, downloadsCount] = await Promise.all([
    db.watchlist.count({ where: { userId } }),
    db.watchHistory.count({ where: { userId } }),
    db.download.count({ where: { userId, status: 'completed' } }),
  ])

  return {
    watchlistCount,
    watchHistoryCount,
    downloadsCount,
  }
}

export async function searchUserContent(userId: string, query: string) {
  const [watchlist, history] = await Promise.all([
    db.watchlist.findMany({
      where: {
        userId,
        movieTitle: {
          contains: query,
          mode: 'insensitive',
        },
      },
      take: 10,
    }),
    db.watchHistory.findMany({
      where: {
        userId,
        movieTitle: {
          contains: query,
          mode: 'insensitive',
        },
      },
      take: 10,
    }),
  ])

  return { watchlist, history }
}