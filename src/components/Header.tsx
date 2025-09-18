import { useLocation, useNavigate } from 'react-router-dom'
import DotsIcon from '../assets/dots.svg?react'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Iris'
      case '/insights':
        return 'Insights'
      case '/explore':
        return 'Explore'
      case '/settings':
        return 'Settings'
      case '/chat':
        return 'Chat'
      default:
        return 'Iris'
    }
  }

  return (
    <header className="mt-[62px] flex h-14 items-center justify-between gap-8 p-4">
      <button
        aria-label={`Go to home page - Current page: ${getPageTitle()}`}
        className="m-0 cursor-pointer border-none bg-transparent p-0 align-middle font-bold font-inter text-2xl text-[var(--color-text-primary)] leading-none tracking-normal transition-all hover:opacity-80 active:scale-95"
        onClick={() => navigate('/')}
        type="button"
      >
        {getPageTitle()}
      </button>

      {/* TODO: Add the options and a menu behavior for the dots icon */}
      <button
        aria-expanded="false"
        aria-haspopup="true"
        aria-label="More options"
        className="rounded-full p-2 transition-all hover:bg-[var(--color-surface-elevated)] active:scale-95"
        type="button"
      >
        <DotsIcon
          aria-hidden="true"
          className="h-6 w-6 text-[var(--color-text-primary)]/80"
        />
      </button>
    </header>
  )
}
