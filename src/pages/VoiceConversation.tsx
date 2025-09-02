import { motion } from 'framer-motion'
import MicrophoneIcon from '../assets/micprophone.svg?react'
import OrangeFuzzy from '../assets/orange-fuzzy.svg?react'
import YellowFuzzy from '../assets/yellow-fuzzy.svg?react'
import { ConversationHeader } from '../components/ConversationHeader'

export function VoiceConversation() {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--color-background)]">
      <ConversationHeader />

      <motion.main
        animate={{ opacity: 1, x: 0 }}
        aria-label="Voice conversation with Iris"
        className="relative flex flex-1 flex-col items-center justify-center"
        exit={{ opacity: 0, x: 20 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="relative flex flex-col items-center space-y-8">
          <div className="relative">
            <YellowFuzzy aria-hidden="true" className="h-24 w-24" />
          </div>

          <div className="relative">
            <OrangeFuzzy aria-hidden="true" className="h-24 w-24" />
          </div>
        </div>

        <div
          className="absolute bottom-8 left-8"
          style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
        >
          <button
            aria-describedby="mic-help"
            aria-label="Start recording voice message"
            className="flex h-[56px] w-[88px] items-center justify-center rounded-full bg-[var(--color-button-secondary)] transition-all hover:bg-[var(--color-button-secondary-hover)] active:scale-95"
            type="button"
          >
            <MicrophoneIcon
              aria-hidden="true"
              className="h-6 w-6 text-[var(--color-text-accent)] transition-colors"
            />
          </button>
          <span className="sr-only" id="mic-help">
            Press and hold to record your voice message to Iris
          </span>
        </div>
      </motion.main>
    </div>
  )
}
