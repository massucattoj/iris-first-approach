import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ChatIcon from '../assets/chat.svg?react'
import VoiceIcon from '../assets/voice.svg?react'
import YellowFuzzy from '../assets/yellow-fuzzy.svg?react'

const TOGGLE_SLIDE_DISTANCE = 56

export function ConversationHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isVoiceActive, setIsVoiceActive] = useState(
    location.pathname === '/talk'
  )

  // Sync toggle state with current route
  useEffect(() => {
    setIsVoiceActive(location.pathname === '/talk')
  }, [location.pathname])

  return (
    <header className="relative mt-[15.5px] flex h-14 w-full items-center p-4">
      <div className="relative flex h-[36px] items-center rounded-full bg-zinc-900 p-1">
        <motion.div
          animate={{
            x: isVoiceActive ? 0 : TOGGLE_SLIDE_DISTANCE,
          }}
          aria-hidden="true"
          className="absolute h-7 w-14 rounded-full bg-black py-0.5"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />

        <button
          aria-label="Switch to voice conversation"
          aria-pressed={isVoiceActive}
          className="relative z-10 flex items-center justify-center rounded-full px-4 py-0.5 transition-all active:scale-95"
          onClick={() => navigate('/talk')}
          type="button"
        >
          <VoiceIcon
            aria-hidden="true"
            className={`h-6 w-6 transition-colors ${isVoiceActive ? 'text-teal-300' : 'text-zinc-500'}`}
          />
        </button>
        <button
          aria-label="Switch to text conversation"
          aria-pressed={!isVoiceActive}
          className="relative z-10 flex items-center justify-center rounded-full px-4 py-0.5 transition-all active:scale-95"
          onClick={() => navigate('/text')}
          type="button"
        >
          <ChatIcon
            aria-hidden="true"
            className={`h-6 w-6 transition-colors ${isVoiceActive ? 'text-zinc-500' : 'text-teal-300'}`}
          />
        </button>
      </div>

      {/* TODO: Add the modal to change Fuzzy Color */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
        <YellowFuzzy aria-hidden="true" className="h-8 w-8" />
      </div>

      <button
        aria-label="End conversation and return to home"
        className="ml-auto flex h-[36px] items-center justify-center rounded-full bg-zinc-900 px-5 transition-all hover:bg-zinc-800 active:scale-95"
        onClick={() => navigate('/')}
        type="button"
      >
        <span
          className="text-center align-middle font-inter font-medium text-base text-teal-300 tracking-normal transition-colors"
          style={{ lineHeight: '14px' }}
        >
          End
        </span>
      </button>
    </header>
  )
}
