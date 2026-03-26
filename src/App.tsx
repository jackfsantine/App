import { useMemo, useState } from 'react'
import {
  conversationTopics,
  dailyCards,
  learnModules,
  prayerSessions,
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

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home')
  const [selectedSession, setSelectedSession] = useState<PrayerSession | null>(
    prayerSessions[0],
  )

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
                <h2>Today’s Plan</h2>
                <p>Pray • Learn • Converse in 20 minutes.</p>
              </div>
              <button>Start Today</button>
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
          </section>
        )}

        {activeTab === 'Pray' && (
          <section className="stack">
            <h3 className="section-title">Prayer Sessions</h3>
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

            {selectedSession && (
              <article className="detail-card">
                <h4>{selectedSession.title}</h4>
                <p>{selectedSession.text}</p>
                <div className="button-row">
                  <button onClick={() => speakText(selectedSession.text)}>
                    ▶ Play Audio
                  </button>
                  <button className="ghost">✓ Mark Complete</button>
                </div>
              </article>
            )}
          </section>
        )}

        {activeTab === 'Learn' && (
          <section className="stack">
            <h3 className="section-title">Learn from Church Sources</h3>
            {learnModules.map((module) => (
              <article className="detail-card" key={module.id}>
                <h4>{module.title}</h4>
                <p>{module.summary}</p>
                <p className="source">Source: {module.source}</p>
                <div className="button-row">
                  <button onClick={() => speakText(module.summary)}>▶ Listen</button>
                  <button className="ghost">Open Module</button>
                </div>
              </article>
            ))}
          </section>
        )}

        {activeTab === 'Converse' && (
          <section className="stack">
            <h3 className="section-title">Charitable Conversation Practice</h3>
            {conversationTopics.map((topic) => (
              <article className="detail-card" key={topic.id}>
                <h4>{topic.prompt}</h4>
                <p>
                  <strong>30-second answer:</strong> {topic.shortAnswer}
                </p>
                <p>
                  <strong>Charity tip:</strong> {topic.respectfulTip}
                </p>
                <p className="source">Source: {topic.source}</p>
                <button onClick={() => speakText(topic.shortAnswer)}>▶ Practice Audio</button>
              </article>
            ))}
          </section>
        )}

        {activeTab === 'Profile' && (
          <section className="stack">
            <article className="detail-card">
              <h4>Your Progress</h4>
              <p>Prayer streak: 4 days</p>
              <p>Learning modules completed: 3</p>
              <p>Conversation scenarios practiced: 5</p>
            </article>
            <article className="detail-card">
              <h4>Roadmap Notes</h4>
              <p>
                Next build targets: onboarding, source document explorer (NAB/CCC/Vatican
                II/Canon Law), account sync, and CMS-backed audio.
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
