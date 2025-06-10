'use client'

import { useFarcaster } from '../Hooks/useFarcaster'
import { useEffect } from 'react'

export default function HomePage() {
  const { isLoaded, context } = useFarcaster()

  useEffect(() => {
    if (isLoaded) {
      console.log('Farcaster context:', context)
    }
  }, [isLoaded, context])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-purple-600">
        <div className="text-white text-xl">Loading Orbique...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      {/* Your existing app content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">🎮 Orbique</h1>
        <p className="text-center text-lg mb-8">Web3 riddle game powered by MONAD — only one can win.</p>
        
        {context && (
          <div className="bg-white/10 rounded-lg p-4 mb-8">
            <h2 className="text-xl font-semibold mb-2">Frame Context:</h2>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(context, null, 2)}
            </pre>
          </div>
        )}
        
        {/* Your game content here */}
        <div className="text-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors">
            Start Game
          </button>
        </div>
      </div>
    </div>
  )
}



















