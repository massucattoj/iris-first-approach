import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import SendIcon from '../assets/send.svg?react'
import { ConversationHeader } from '../components/ConversationHeader'
import { MessagesContainer } from '../components/TextConversation/MessagesContainer'
import { DEFAULT_PERSONA, PERSONAS, type Persona } from '../config/personas'
import type { Message } from '../types/message'
import { sendMessage } from '../utils/openai'

const TEXTAREA_MIN_HEIGHT = 28
const TEXTAREA_MAX_HEIGHT = 84 // 3 lines: ~28px per line = 84px (mobile-optimized)
const INPUT_AREA_HEIGHT = 88 // Reduced from 120px to 88px

export function TextConversation() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPersona, setSelectedPersona] =
    useState<Persona>(DEFAULT_PERSONA)

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) {
      return
    }

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    }

    // Add user message to state
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Prepare messages for OpenAI (convert our format to OpenAI format)
      const openAIMessages = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      // Get AI response with selected persona
      const aiResponse = await sendMessage(
        openAIMessages,
        selectedPersona.systemMessage
      )

      // Create AI message
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
      }

      // Add AI message to state
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      // TODO: Add error message to UI
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(input)
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[var(--color-background)]">
      <ConversationHeader />

      <motion.main
        animate={{ opacity: 1, x: 0 }}
        aria-label="Text conversation with Iris"
        className="relative flex min-h-0 flex-1 flex-col"
        exit={{ opacity: 0, x: -20 }}
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Persona Selection - Only show if no messages yet */}
        {messages.length === 0 && (
          <div className="border-[var(--color-surface-border)] border-b bg-[var(--color-surface)] px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-[var(--color-text-secondary)] text-sm">
                Mode:
              </span>
              <div className="flex gap-2">
                {PERSONAS.map((persona) => (
                  <button
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      selectedPersona.id === persona.id
                        ? 'bg-[var(--color-text-accent)] text-white'
                        : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-button-secondary-hover)]'
                    }`}
                    key={persona.id}
                    onClick={() => setSelectedPersona(persona)}
                    type="button"
                  >
                    {persona.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages Area - Flexible height */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-4">
          <MessagesContainer isLoading={isLoading} messages={messages} />
        </div>

        {/* Text Area - Fixed at bottom with proper margin */}
        <div
          className="flex-shrink-0 border-[var(--color-surface-border)] border-t bg-[var(--color-background)] px-4 pt-4 pb-8"
          style={{ minHeight: `${INPUT_AREA_HEIGHT}px` }}
        >
          <div className="mx-auto w-full max-w-[361px]">
            <form
              aria-label="Send message to Iris"
              className="flex min-h-[56px] items-center rounded-2xl border border-teal-700 bg-[var(--color-nav-background)] p-2 backdrop-blur-md transition-all focus-within:ring-1 focus-within:ring-teal-500/50 focus-within:ring-offset-0"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="message-input">
                Type your message to Iris
              </label>
              <Textarea
                aria-describedby="message-help"
                aria-label="Message input"
                className="flex-1 resize-none border-none bg-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] shadow-none outline-none ring-0 focus:ring-0 focus-visible:ring-0"
                disabled={isLoading}
                id="message-input"
                onChange={(e) => setInput(e.target.value)}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement
                  target.style.height = `${TEXTAREA_MIN_HEIGHT}px`
                  target.style.height = `${Math.min(target.scrollHeight, TEXTAREA_MAX_HEIGHT)}px`
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
                placeholder="Type your message to Iris..."
                rows={1}
                style={{
                  minHeight: `${TEXTAREA_MIN_HEIGHT}px`,
                  maxHeight: `${TEXTAREA_MAX_HEIGHT}px`,
                  fontFamily: 'Inter',
                  fontSize: '16px', // 16px prevents zoom on iOS
                  lineHeight: '20px',
                  marginLeft: '4px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  WebkitAppearance: 'none', // Remove iOS styling
                }}
                value={input}
              />
              <span className="sr-only" id="message-help">
                Press Enter to send your message, or click the send button
              </span>
              <Button
                aria-label="Send message"
                className="h-8 w-8 rounded-full bg-teal-600 hover:bg-teal-700 active:scale-95"
                disabled={isLoading || !input.trim()}
                size="icon"
                type="submit"
              >
                <SendIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-[var(--color-text-accent)]"
                />
              </Button>
            </form>
          </div>
        </div>
      </motion.main>
    </div>
  )
}
