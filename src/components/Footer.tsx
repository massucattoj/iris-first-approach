import { useLocation, useNavigate } from 'react-router-dom'
import ChatIcon from '../assets/chat.svg?react'
import DiscoverIcon from '../assets/discover.svg?react'
import IrisIcon from '../assets/iris.svg?react'
import LightbulbIcon from '../assets/lightbulb.svg?react'
import Tab from './Tab'

export function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  // Map routes to tab names
  const getActiveTab = () => {
    switch (location.pathname) {
      case '/insights':
        return 'Insights'
      case '/settings':
        return 'Settings'
      case '/':
        return 'Iris'
      case '/explore':
        return 'Explore'
      default:
        return 'Iris'
    }
  }

  const handleTabClick = (route: string) => {
    navigate(route)
  }

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 h-[88px] border-teal-600 border-t bg-[var(--color-nav-background)] backdrop-blur-md"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 12px)' }}
    >
      <div className="mx-auto w-full max-w-[393px]">
        <div className="relative" />
        <div
          className="mx-auto flex max-w-md items-end justify-between px-4 pt-3 sm:px-8"
          role="tablist"
        >
          <Tab
            active={getActiveTab() === 'Insights'}
            icon={<LightbulbIcon aria-hidden="true" className="h-6 w-6" />}
            label="Insights"
            onClick={() => handleTabClick('/insights')}
          />
          <Tab
            active={getActiveTab() === 'Settings'}
            icon={<ChatIcon aria-hidden="true" className="h-6 w-6" />}
            label="Settings"
            onClick={() => handleTabClick('/settings')}
          />
          <Tab
            active={getActiveTab() === 'Iris'}
            icon={<IrisIcon aria-hidden="true" className="h-6 w-6" />}
            label="Iris"
            onClick={() => handleTabClick('/')}
          />
          <Tab
            active={getActiveTab() === 'Explore'}
            icon={<DiscoverIcon aria-hidden="true" className="h-6 w-6" />}
            label="Explore"
            onClick={() => handleTabClick('/explore')}
          />
        </div>
      </div>
    </nav>
  )
}
