import { useNavigate } from 'react-router-dom'
import TextIcon from '../assets/text.svg?react'
import VoiceIcon from '../assets/voice.svg?react'
import YellowFuzzy from '../assets/yellow-fuzzy.svg?react'

export function Iris() {
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-center pb-[88px] text-center">
        <div className="flex flex-col items-center">
          <YellowFuzzy aria-hidden="true" className="mt-8 h-24 w-24" />

          <p className="mt-[34px] w-full px-8 text-center align-middle font-inter font-normal text-[var(--color-text-secondary)] text-base leading-none tracking-normal">
            Chat with Iris. The more you engage, the more you'll build
            self‑awareness—and move through life with clarity and confidence.
          </p>
        </div>
      </div>

      <div className="-translate-x-1/2 fixed bottom-[128px] left-1/2 z-10">
        <div className="flex w-[361px] flex-row items-center justify-center gap-4">
          <button
            aria-label="Start voice conversation with Iris"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-elevated)] px-5 py-3 font-medium text-base shadow-sm backdrop-blur transition hover:bg-[var(--color-surface-elevated)] hover:opacity-80 active:scale-[0.98]"
            onClick={() => navigate('/talk')}
            type="button"
          >
            <VoiceIcon
              aria-hidden="true"
              className="h-6 w-6 text-[var(--color-text-primary)]/80"
            />

            <span
              className="text-center align-middle font-inter font-medium text-[var(--color-text-accent)] text-base tracking-normal"
              style={{ lineHeight: '14px' }}
            >
              Talk
            </span>
          </button>

          <button
            aria-label="Start text conversation with Iris"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-elevated)] px-5 py-3 font-medium text-base shadow-sm backdrop-blur transition hover:bg-[var(--color-surface-elevated)] hover:opacity-80 active:scale-[0.98]"
            onClick={() => navigate('/text')}
            type="button"
          >
            <TextIcon
              aria-hidden="true"
              className="h-6 w-6 text-[var(--color-text-primary)]/80"
            />

            {/* TODO: Create the Text Conversation page */}
            <span
              className="text-center align-middle font-inter font-medium text-[var(--color-text-accent)] text-base tracking-normal"
              style={{ lineHeight: '14px' }}
            >
              Text
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
