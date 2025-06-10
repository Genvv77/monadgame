// hooks/useFarcaster.ts
'use client'

import { useEffect, useState } from 'react'

export function useFarcaster() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [context, setContext] = useState<any>(null)
  const [farcaster, setFarcaster] = useState<any>(null)

  useEffect(() => {
    const initFarcaster = async () => {
      try {
        // Try to import Farcaster SDK
        if (typeof window !== 'undefined') {
          const { default: FrameSDK } = await import('@farcaster/frame-sdk')
          setFarcaster(FrameSDK)
          
          // Get context - it's a property, not a function
          const frameContext = FrameSDK.context
          setContext(frameContext)
          
          // Signal that the app is ready and hide splash screen
          await FrameSDK.actions.ready()
          setIsLoaded(true)
        }
      } catch (error) {
        console.log('Farcaster SDK not available, running in regular browser mode')
        setIsLoaded(true)
      }
    }

    initFarcaster()
  }, [])

  return {
    isLoaded,
    context,
    farcaster
  }
}
export default useFarcaster;