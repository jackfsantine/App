import { useMemo, useState } from 'react'
import {
  dailyCards,
  first30LaunchModules,
  getModulesByTrack,
  prayerSessions,
  type LaunchModule,
  type PrayerSession,
} from './data'

type Tab = 'Home' | 'Pray' | 'Learn' | 'Converse' | 'Profile'

const tabs: { key: Tab; icon: string }[] = [
  { key: 'Home', icon: '•' },
  { key: 'Pray', icon: '•' },
  { key: 'Learn', icon: '•' },
  { key: 'Converse', icon: '•' },
  { key: 'Profile', icon: '•' },
]

function speakText(text: string) {
  if (!('speechSynthesis' in window)) {
    window.alert('Text-to-speech is not supported in this browser.')
    return
  }

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.95
  utterance.pitch = 1
  window.speechSynthesis.speak(utterance)
}

function ModuleCard({ module }: { module: LaunchModule }) {
  return (
    <article className="module-card">
      <div className="module-card-header">
        <p className="module-id">{module.id.toUpperCase()}</p>
        <span className="pill neutral">{module.duration}</span>
      </div>
      <h4>{module.title}</h4>
      <p>{module.summary}</p>
      <ul className="point-list">
        {module.keyPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="source">Sources: {module.sourceStack.join(' • ')}</p>
      <button className="primary-button" onClick={() => speakText(module.audioScript)}>
        Listen Now ▶
      </button>
    </article>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home')
  const [selectedSession, setSelectedSession] = useState<PrayerSession | null>(
    prayerSessions[0],
  )

  const prayModules = useMemo(() => getModulesByTrack('Pray'), [])
  const learnModules = useMemo(() => getModulesByTrack('Learn'), [])
  const converseModules = useMemo(() => getModulesByTrack('Converse'), [])

  const title = useMemo(() => {
    if (activeTab === 'Home') return 'Credo Path'
    return activeTab
  }, [activeTab])

  return (
    <div className="app-shell">
      <header className="top-bar">
        <p className="kicker">Catholic Formation App</p>
        <h1>{title}</h1>
      </header>

      <main className="content">
        {activeTab === 'Home' && (
          <section className="stack">
            <article className="glass-card">
              <h2>Good Morning, Sarah</h2>
              <div className="separator" />
              <p className="eyebrow">Continue Listening</p>
              <div className="row between">
                <div>
                  <h3>Why Believe in God?</h3>
                  <p className="small">3 mins left</p>
                </div>
                <button className="primary-button">Resume</button>
              </div>
            </article>

            <article className="glass-card">
              <p className="section-icon">✝ Today&apos;s Prayer</p>
              <div className="row between prayer-row">
                <div>
                  <h3>{selectedSession?.title ?? 'Morning Offering'}</h3>
                </div>
                <button
                  className="secondary-button"
                  onClick={() => selectedSession && speakText(selectedSession.text)}
                >
                  Listen Now
                </button>
              </div>
            </article>

            <div className="row chips-wrap">
              <button className="pill active">❤ Apologetics</button>
              <button className="pill">💬 Conversations</button>
            </div>

            <article className="glass-card">
              <p className="section-icon">💬 Practice Conversations</p>
              <div className="row chips-wrap">
                <button className="mini-chip">Atheist</button>
                <button className="mini-chip">Muslim</button>
                <button className="mini-chip">Friend</button>
                <button className="mini-chip">Skeptic</button>
              </div>
            </article>

            <div className="row feature-grid">
              <button className="feature-card active">Apologetics</button>
              <button className="feature-card">Understanding Faith</button>
              <button className="feature-card">Prayer Reflection</button>
              <button className="feature-card">Scripture</button>
            </div>

            <h3 className="section-title">Daily Focus</h3>
            <div className="horizontal-scroll">
              {dailyCards.map((card) => (
                <article key={card.title} className="image-card">
                  <img src={card.image} alt={card.title} />
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'Pray' && (
          <section className="stack">
            <h3 className="section-title">Pray Track (12 modules)</h3>
            <div className="grid-cards">
              {prayerSessions.map((session) => (
                <button
                  className={`session-card ${
                    selectedSession?.id === session.id ? 'active' : ''
                  }`}
                  key={session.id}
                  onClick={() => setSelectedSession(session)}
                >
                  <h4>{session.title}</h4>
                  <p>{session.duration}</p>
                </button>
              ))}
            </div>

            {prayModules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </section>
        )}

        {activeTab === 'Learn' && (
          <section className="stack">
            <h3 className="section-title">Learn Track (10 modules)</h3>
            {learnModules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </section>
        )}

        {activeTab === 'Converse' && (
          <section className="stack">
            <h3 className="section-title">Converse Track (8 modules)</h3>
            {converseModules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </section>
        )}

        {activeTab === 'Profile' && (
          <section className="stack">
            <article className="module-card">
              <h4>Launch Content Progress</h4>
              <p>Pray modules: {prayModules.length} / 12</p>
              <p>Learn modules: {learnModules.length} / 10</p>
              <p>Converse modules: {converseModules.length} / 8</p>
            </article>
            <article className="module-card">
              <h4>Next Step</h4>
              <p>
                Once your graphics are ready, we can wire your brand imagery directly into the home
                cards, launcher icon, and module covers.
              </p>
            </article>
          </section>
        )}
      </main>

      <nav className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={tab.key === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab.key)}
          >
            <span>{tab.icon}</span>
            <span>{tab.key}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
