import { motion } from 'framer-motion'

type TabProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}

export default function Tab({
  icon,
  label,
  active,
  disabled,
  onClick,
}: TabProps) {
  const INACTIVE_SCALE = 0.98

  return (
    <button
      className={[
        'relative flex flex-col items-center gap-1 pt-1.5 pb-1',
        disabled ? 'cursor-not-allowed opacity-40' : 'hover:opacity-100',
      ].join(' ')}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {active && (
        <motion.span
          className="-translate-x-1/2 pointer-events-none absolute top-8 left-1/2 h-20 w-56 rounded-full blur-3xl"
          layoutId="active-glow"
          style={{
            background:
              'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(94,234,212,0.9), rgba(94,234,212,0.5) 30%, rgba(94,234,212,0) 70%)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.6,
          }}
        />
      )}

      {/* Icon */}
      <span
        className={[
          'relative grid place-items-center p-1.5',
          active ? 'text-teal-300' : 'text-zinc-600',
        ].join(' ')}
      >
        <motion.span
          animate={{ scale: active ? 1 : INACTIVE_SCALE }}
          className="relative"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          {icon}
        </motion.span>
      </span>

      <span
        className={[
          'text-center align-middle font-inter font-normal text-xs tracking-normal',
          active ? 'text-teal-300' : 'text-zinc-600',
        ].join(' ')}
        style={{ lineHeight: '14px' }}
      >
        {label}
      </span>
    </button>
  )
}
