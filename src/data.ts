export type PrayerSession = {
  id: string
  title: string
  duration: string
  text: string
}

export type LearnModule = {
  id: string
  title: string
  summary: string
  source: string
}

export type ConversationTopic = {
  id: string
  prompt: string
  shortAnswer: string
  respectfulTip: string
  source: string
}

export const dailyCards = [
  {
    title: 'Today\'s Mass Readings',
    subtitle: 'John 8:1-11 • Mercy and conversion',
    image:
      'https://images.unsplash.com/photo-1520637836862-4d197d17c48a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Saint of the Day',
    subtitle: 'St. Joseph, Protector of the Church',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1000&q=80',
  },
]

export const prayerSessions: PrayerSession[] = [
  {
    id: 'morning-offering',
    title: 'Morning Offering',
    duration: '4 min',
    text: 'Lord Jesus, I offer You this day: my prayers, works, joys, and sufferings. Grant me grace to live in charity and truth.',
  },
  {
    id: 'rosary-joyful',
    title: 'Interactive Rosary (Joyful Mysteries)',
    duration: '18 min',
    text: 'Begin with the Sign of the Cross. Pray the Apostles’ Creed, one Our Father, three Hail Marys, and one Glory Be. Meditate on each mystery with intention and gratitude.',
  },
  {
    id: 'divine-mercy',
    title: 'Chaplet of Divine Mercy',
    duration: '12 min',
    text: 'For the sake of His sorrowful Passion, have mercy on us and on the whole world. Place every person in need into Christ’s merciful heart.',
  },
  {
    id: 'examen',
    title: 'Evening Examen',
    duration: '6 min',
    text: 'Thank God for the day. Ask for light. Review moments of grace and failure. Ask forgiveness and resolve one concrete act of love tomorrow.',
  },
]

export const learnModules: LearnModule[] = [
  {
    id: 'ccc-intro',
    title: 'How to Use the Catechism',
    summary: 'Understand how to move from questions to doctrine, references, and practical application.',
    source: 'CCC Prologue; Four Pillars structure',
  },
  {
    id: 'vatican-ii',
    title: 'Vatican II in Plain Language',
    summary: 'A guided overview of major constitutions and what they mean for everyday Catholic life.',
    source: 'Sacrosanctum Concilium, Lumen Gentium, Dei Verbum',
  },
  {
    id: 'canon-law',
    title: 'Canon Law Basics for Laity',
    summary: 'Learn what Canon Law is, why it exists, and how it serves the salvation of souls.',
    source: '1983 Code of Canon Law, can. 1752',
  },
  {
    id: 'faith-reason',
    title: 'Faith and Reason',
    summary: 'Explore how Catholic thought embraces philosophy, science, and revelation together.',
    source: 'Fides et Ratio; CCC 31-35, 159',
  },
]

export const conversationTopics: ConversationTopic[] = [
  {
    id: 'saints',
    prompt: 'Why do Catholics pray to saints?',
    shortAnswer:
      'Catholics worship God alone. We ask saints to pray for us, just as we ask friends on earth to pray for us.',
    respectfulTip: 'Start by affirming shared belief in Jesus and prayer before explaining intercession.',
    source: 'Revelation 5:8; CCC 956, 2683',
  },
  {
    id: 'confession',
    prompt: 'Why confess to a priest?',
    shortAnswer:
      'Jesus gave the apostles authority to forgive sins in His name. Priestly absolution is Christ’s mercy made sacramentally present.',
    respectfulTip: 'Acknowledge fear or hesitation first; then focus on healing, not legalism.',
    source: 'John 20:21-23; CCC 1441-1442',
  },
  {
    id: 'mary',
    prompt: 'Do Catholics worship Mary?',
    shortAnswer:
      'No. Adoration belongs to God alone. Mary is honored as the Mother of Jesus and model disciple.',
    respectfulTip: 'Use careful words: worship vs. honor; adoration vs. veneration.',
    source: 'Luke 1:48; CCC 971',
  },
]
