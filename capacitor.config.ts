import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.iris.ai',
  appName: 'Iris AI',
  webDir: 'dist',
  // Only enable live reload when explicitly requested
  ...(process.env.CAPACITOR_LIVE_RELOAD === 'true' && {
    server: {
      url: 'http://localhost:5173',
      cleartext: true,
    },
  }),
}

export default config
