import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ThemeProvider } from './contexts/ThemeContext'
import { Explore } from './pages/Explore'
import { Insights } from './pages/Insights'
import { Iris } from './pages/Iris'
import { Settings } from './pages/Settings'
import { TextConversation } from './pages/TextConversation'
import { VoiceConversation } from './pages/VoiceConversation'

function App() {
  return (
    <ThemeProvider>
      <div
        aria-label="Iris AI Conversation App"
        className="flex min-h-dvh flex-col bg-[var(--color-background)]"
        role="application"
      >
        <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col">
          <Routes>
            {/* Conversation routes without Header/Footer */}
            <Route element={<VoiceConversation />} path="/talk" />
            <Route element={<TextConversation />} path="/text" />

            {/* Main app routes with Header/Footer */}
            <Route element={<Layout />}>
              <Route element={<Iris />} path="/" />
              <Route element={<Insights />} path="/insights" />
              <Route element={<Settings />} path="/settings" />
              <Route element={<Explore />} path="/explore" />
            </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
