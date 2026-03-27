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

const tabs: Tab[] = ['Home', 'Pray', 'Learn', 'Converse', 'Profile']

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
    <article className="detail-card">
      <p className="module-id">{module.id.toUpperCase()}</p>
      <h4>{module.title}</h4>
      <p>{module.summary}</p>
      <p className="source">Duration: {module.duration}</p>
      <ul className="point-list">
        {module.keyPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="source">Sources: {module.sourceStack.join(' • ')}</p>
      <button onClick={() => speakText(module.audioScript)}>▶ Play Draft Audio</button>
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
    if (activeTab === 'Home') return 'Start Today'
    return activeTab
  }, [activeTab])

  return (
    <div className="app-shell">
      <header className="top-bar">
        <p className="kicker">Catholic Formation</p>
        <h1>{title}</h1>
      </header>

      <main className="content">
        {activeTab === 'Home' && (
          <section className="stack">
            <article className="hero-card">
              <div>
                <h2>30 Launch Modules Ready</h2>
                <p>{first30LaunchModules.length} modules drafted across Pray, Learn, and Converse.</p>
              </div>
              <button onClick={() => setActiveTab('Pray')}>View Modules</button>
            </article>

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

            {selectedSession && (
              <article className="detail-card">
                <h4>Quick Pray</h4>
                <p>{selectedSession.title}</p>
                <p>{selectedSession.text}</p>
                <button onClick={() => speakText(selectedSession.text)}>▶ Pray with Audio</button>
              </article>
            )}
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
            <article className="detail-card">
              <h4>Launch Content Progress</h4>
              <p>Pray modules: {prayModules.length} / 12</p>
              <p>Learn modules: {learnModules.length} / 10</p>
              <p>Converse modules: {converseModules.length} / 8</p>
            </article>
            <article className="detail-card">
              <h4>Next Step</h4>
              <p>
                Review content tone and theology, then we can move into Phase 2 UX polish with your
                new graphics.
              </p>
            </article>
          </section>
        )}
      </main>

      <nav className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
