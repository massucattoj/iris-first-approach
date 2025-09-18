import { motion } from 'framer-motion'

type LoadingIndicatorProps = {
  onAnimationComplete?: () => void
}

export function LoadingIndicator({
  onAnimationComplete,
}: LoadingIndicatorProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 flex justify-start"
      initial={{ opacity: 0, y: 10 }}
      onAnimationComplete={onAnimationComplete}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[280px] rounded-2xl bg-[var(--color-surface-elevated)] px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-text-muted)] [animation-delay:-0.3s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-text-muted)] [animation-delay:-0.15s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-text-muted)]" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
