import { motion } from 'framer-motion'
import SendIcon from '../assets/send.svg?react'
import { ConversationHeader } from '../components/ConversationHeader'

const TEXTAREA_MIN_HEIGHT = 28
const TEXTAREA_MAX_HEIGHT = 120

export function TextConversation() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ConversationHeader />

      <motion.main
        animate={{ opacity: 1, x: 0 }}
        aria-label="Text conversation with Iris"
        className="relative flex flex-1 flex-col"
        exit={{ opacity: 0, x: -20 }}
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-1 items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <h1 className="mb-4 font-bold text-2xl text-white">
              Text with Iris
            </h1>
            <p className="text-secondary">Start your conversation below...</p>
          </div>
        </div>

        {/* TODO: Make the conversation works dynamically with AI answers */}
        <div
          className="-translate-x-1/2 absolute bottom-8 left-1/2 w-full max-w-[361px] px-4"
          style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
        >
          <form
            aria-label="Send message to Iris"
            className="flex min-h-[56px] items-center rounded-2xl border border-teal-700 bg-zinc-900/80 p-2 backdrop-blur-md"
          >
            <label className="sr-only" htmlFor="message-input">
              Type your message to Iris
            </label>
            <textarea
              aria-describedby="message-help"
              aria-label="Message input"
              className="flex-1 resize-none border-none bg-transparent text-white placeholder-secondary outline-none"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement
                target.style.height = `${TEXTAREA_MIN_HEIGHT}px`
                target.style.height = `${Math.min(target.scrollHeight, TEXTAREA_MAX_HEIGHT)}px`
              }}
              placeholder="Type your message to Iris..."
              rows={1}
              style={{
                minHeight: `${TEXTAREA_MIN_HEIGHT}px`,
                maxHeight: `${TEXTAREA_MAX_HEIGHT}px`,
                fontFamily: 'Inter',
                fontSize: '14px',
                lineHeight: '20px',
                marginLeft: '4px',
                paddingTop: '4px',
                paddingBottom: '4px',
              }}
            />
            <span className="sr-only" id="message-help">
              Press Enter to send your message, or click the send button
            </span>
            <button
              aria-label="Send message"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-all hover:bg-teal-700 active:scale-95"
              type="submit"
            >
              <SendIcon aria-hidden="true" className="h-6 w-6 text-teal-300" />
            </button>
          </form>
        </div>
      </motion.main>
    </div>
  )
}
