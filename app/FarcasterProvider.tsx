'use client'

import { useEffect } from 'react'

export default function FarcasterProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if we're running in a Farcaster frame context
    const isInFarcasterFrame = window.parent !== window

    if (isInFarcasterFrame) {
      // Load Farcaster SDK
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@farcaster/frame-sdk@0.1.0/dist/index.js'
      script.onload = () => {
        // Initialize Farcaster SDK and hide splash screen
        if (window.parent && window.parent.postMessage) {
          // Signal that the app is ready
          window.parent.postMessage({
            type: 'frame_ready'
          }, '*')
          
          // Try to use Farcaster SDK if available
          if (typeof window !== 'undefined' && (window as any).farcaster) {
            const farcaster = (window as any).farcaster
            // Hide splash screen
            if (farcaster.actions && farcaster.actions.ready) {
              farcaster.actions.ready()
            }
          }
        }
      }
      document.head.appendChild(script)
    }
  }, [])

  return <>{children}</>
}