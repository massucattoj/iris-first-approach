import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import type { Message } from '../../types/message'
import { LoadingIndicator } from './LoadingIndicator'
import { MessageBubble } from './MessageBubbleComponent'

type MessagesContainerProps = {
  messages: Message[]
  isLoading: boolean
}

export function MessagesContainer({
  messages,
  isLoading,
}: MessagesContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change with smooth animation
  const scrollToBottom = useCallback(() => {
    if (!messagesEndRef.current) {
      return
    }

    messagesEndRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }, [])

  useEffect(() => {
    // Immediate scroll for first render, then rely on animation callbacks
    if (messages.length === 1) {
      const timeoutId = setTimeout(() => {
        scrollToBottom()
      }, 100)
      return () => clearTimeout(timeoutId)
    }
  }, [messages, scrollToBottom])

  // Callback to scroll after animation completes
  const handleAnimationComplete = () => {
    scrollToBottom()
  }

  if (messages.length === 0) {
    return (
      // Empty state
      <div className="flex h-full items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 font-bold text-2xl text-[var(--color-text-primary)]">
            Text with Iris
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Start your conversation below...
          </p>
        </div>
      </div>
    )
  }

  return (
    // Messages list
    <motion.div
      animate={{ opacity: 1 }}
      className="space-y-0 pb-4"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {messages.map((message, index) => (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          key={message.id}
          onAnimationComplete={
            index === messages.length - 1 ? handleAnimationComplete : undefined
          }
          transition={{
            duration: 0.4,
            delay: index === messages.length - 1 ? 0.1 : 0,
            ease: 'easeOut',
          }}
        >
          <MessageBubble message={message} />
        </motion.div>
      ))}
      {isLoading && (
        <LoadingIndicator onAnimationComplete={handleAnimationComplete} />
      )}
      {/* Scroll anchor with bottom margin */}
      <div className="pb-2" ref={messagesEndRef} />
    </motion.div>
  )
}
