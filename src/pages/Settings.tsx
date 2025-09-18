import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTheme } from '../components/theme-provider'

const TOGGLE_TRANSLATE_X = 20

export function Settings() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative flex flex-1 flex-col"
      exit={{ opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex flex-1 flex-col px-4 pt-4">
        {/* Settings Section */}
        <div className="space-y-6">
          {/* Theme Toggle Setting */}
          <div className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-elevated)] p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-inter font-medium text-[var(--color-text-primary)] text-base">
                  Appearance
                </h3>
                <p className="mt-1 font-inter text-[var(--color-text-secondary)] text-sm">
                  Choose between light and dark theme
                </p>
              </div>

              <button
                aria-checked={theme === 'light'}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[var(--color-surface)]"
                onClick={toggleTheme}
                role="switch"
                style={{
                  backgroundColor: theme === 'light' ? '#0891b2' : '#5eead4',
                }}
                type="button"
              >
                <span className="sr-only">
                  {theme === 'light'
                    ? 'Switch to dark theme'
                    : 'Switch to light theme'}
                </span>
                <motion.span
                  animate={{
                    x: theme === 'light' ? TOGGLE_TRANSLATE_X : 2,
                  }}
                  className="inline-block h-4 w-4 rounded-full bg-white shadow-lg"
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              </button>
            </div>

            {/* Theme Options */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                aria-label="Switch to light theme"
                className={[
                  'flex h-auto flex-col items-center p-3',
                  theme === 'light'
                    ? 'border-2 border-primary bg-accent'
                    : 'border-2',
                ].join(' ')}
                onClick={() => setTheme('light')}
                variant="outline"
              >
                <div className="mb-2 h-8 w-12 rounded border border-gray-300 bg-white" />
                <span className="font-inter text-[var(--color-text-primary)] text-sm">
                  Light
                </span>
                {theme === 'light' && (
                  <motion.div
                    animate={{ scale: 1 }}
                    className="mt-1 h-2 w-2 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Button>

              <Button
                aria-label="Switch to dark theme"
                className={[
                  'flex h-auto flex-col items-center p-3',
                  theme === 'dark'
                    ? 'border-2 border-primary bg-accent'
                    : 'border-2',
                ].join(' ')}
                onClick={() => setTheme('dark')}
                variant="outline"
              >
                <div className="mb-2 h-8 w-12 rounded border border-gray-600 bg-gray-900" />
                <span className="font-inter text-[var(--color-text-primary)] text-sm">
                  Dark
                </span>
                {theme === 'dark' && (
                  <motion.div
                    animate={{ scale: 1 }}
                    className="mt-1 h-2 w-2 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
