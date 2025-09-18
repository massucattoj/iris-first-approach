import { motion } from 'framer-motion'
import type { Message } from '../../types/message'

export function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <motion.div
        className={[
          'max-w-[280px] rounded-2xl px-4 py-3',
          isUser
            ? 'bg-[var(--color-text-accent)] text-white'
            : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)]',
        ].join(' ')}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        whileHover={{ scale: 1.02 }}
      >
        <p className="whitespace-pre-wrap text-sm leading-relaxed">
          {message.content}
        </p>
      </motion.div>
    </div>
  )
}
