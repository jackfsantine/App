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

export type LaunchTrack = 'Pray' | 'Learn' | 'Converse'

export type LaunchModule = {
  id: string
  track: LaunchTrack
  title: string
  duration: string
  summary: string
  keyPoints: string[]
  sourceStack: string[]
  audioScript: string
}

export const dailyCards = [
  {
    title: 'Today\'s Mass Readings',
    subtitle: 'Daily Gospel + reflection + practical prayer',
    image:
      'https://images.unsplash.com/photo-1520637836862-4d197d17c48a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Saint of the Day',
    subtitle: 'Biography, virtue, and a short intercessory prayer',
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

export const first30LaunchModules: LaunchModule[] = [
  {
    id: 'p01',
    track: 'Pray',
    title: 'Morning Offering (Guided)',
    duration: '4 min',
    summary: 'Consecrate your whole day to Jesus with a short guided intention prayer.',
    keyPoints: ['Offer every task to God', 'Ask for charity in speech', 'End with one concrete intention'],
    sourceStack: ['Romans 12:1', 'CCC 901'],
    audioScript:
      'Lord Jesus, I offer You this day: my prayers, works, joys, and sufferings. Make my speech truthful and loving.',
  },
  {
    id: 'p02',
    track: 'Pray',
    title: 'Evening Examen (Guided)',
    duration: '6 min',
    summary: 'Review your day with gratitude, repentance, and a renewed commitment to love.',
    keyPoints: ['Thanksgiving', 'Review', 'Ask pardon and renew'],
    sourceStack: ['Psalm 139:23-24', 'CCC 1454'],
    audioScript:
      'Holy Spirit, bring to mind where I loved well and where I failed. I thank You, ask forgiveness, and ask grace for tomorrow.',
  },
  {
    id: 'p03',
    track: 'Pray',
    title: 'Daily Mass Readings + Reflection',
    duration: '8 min',
    summary: 'Read the day’s readings and end with a short practical reflection.',
    keyPoints: ['Read slowly', 'Notice one phrase', 'Apply one action today'],
    sourceStack: ['Lectionary cycle', 'Dei Verbum 21'],
    audioScript:
      'Let the Word of God dwell richly in your heart. Choose one phrase and keep it with you through the day.',
  },
  {
    id: 'p04',
    track: 'Pray',
    title: 'Liturgy of the Hours: Morning Prayer',
    duration: '10 min',
    summary: 'Pray the Church’s morning office with psalm, canticle, and intercessions.',
    keyPoints: ['Unite with the universal Church', 'Pray with the Psalms', 'Intercede for the world'],
    sourceStack: ['General Instruction Liturgy of the Hours'],
    audioScript:
      'Lord, open my lips, and my mouth will proclaim Your praise. Teach me to pray with the Church this morning.',
  },
  {
    id: 'p05',
    track: 'Pray',
    title: 'Liturgy of the Hours: Evening Prayer',
    duration: '10 min',
    summary: 'Close your day in the Church’s evening office with thanksgiving and intercession.',
    keyPoints: ['Review day with God', 'Pray Magnificat', 'Intercede for family and Church'],
    sourceStack: ['Luke 1:46-55', 'General Instruction Liturgy of the Hours'],
    audioScript:
      'My soul proclaims the greatness of the Lord. Receive this evening sacrifice of praise.',
  },
  {
    id: 'p06',
    track: 'Pray',
    title: 'Latin Hours: Beginner Mode',
    duration: '9 min',
    summary: 'Learn and pray simplified Latin responses for the Hours with pronunciation help.',
    keyPoints: ['Call and response format', 'Pronunciation aids', 'Parallel English text'],
    sourceStack: ['Liturgia Horarum'],
    audioScript:
      'Deus, in adiutorium meum intende. Domine, ad adiuvandum me festina. Come pray slowly in Latin and English.',
  },
  {
    id: 'p07',
    track: 'Pray',
    title: 'Interactive Rosary: Joyful Mysteries',
    duration: '18 min',
    summary: 'A paced Rosary with mystery prompts and optional timed silences.',
    keyPoints: ['Mystery meditation prompts', 'Bead progress tracking', 'Optional audio pacing'],
    sourceStack: ['Luke 1-2', 'Rosarium Virginis Mariae'],
    audioScript:
      'As you pray each decade, place one person and one intention into the heart of Jesus through Mary.',
  },
  {
    id: 'p08',
    track: 'Pray',
    title: 'Interactive Rosary: Sorrowful Mysteries',
    duration: '18 min',
    summary: 'Meditate on Christ’s Passion with focused intercession and silence.',
    keyPoints: ['Contemplate the Passion', 'Pray for suffering persons', 'Offer small sacrifices'],
    sourceStack: ['Matthew 26-27', 'Isaiah 53'],
    audioScript:
      'Jesus, through Your sorrowful Passion, strengthen all who suffer and teach us sacrificial love.',
  },
  {
    id: 'p09',
    track: 'Pray',
    title: 'Chaplet of Divine Mercy',
    duration: '12 min',
    summary: 'Pray for mercy for yourself, the Church, and the world.',
    keyPoints: ['Trust in Divine Mercy', 'Intercede for all souls', 'End with surrender'],
    sourceStack: ['Diary of St. Faustina', 'John 20:19-31'],
    audioScript:
      'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
  },
  {
    id: 'p10',
    track: 'Pray',
    title: 'Seven Sorrows Rosary',
    duration: '15 min',
    summary: 'Walk with Our Lady through seven moments of sorrow and hope.',
    keyPoints: ['Meditate on each sorrow', 'Unite personal grief to Christ', 'Pray for perseverance'],
    sourceStack: ['Luke 2:35', 'John 19:25-27'],
    audioScript:
      'Mother of Sorrows, teach us fidelity at the foot of the Cross and trust in the Resurrection.',
  },
  {
    id: 'p11',
    track: 'Pray',
    title: 'Saint of the Day',
    duration: '5 min',
    summary: 'Daily saint biography with one virtue challenge and intercessory prayer.',
    keyPoints: ['Who the saint is', 'Virtue to imitate', 'One practical challenge'],
    sourceStack: ['Roman Martyrology'],
    audioScript:
      'Saint of God, pray for us that we may grow in holiness, courage, and fidelity today.',
  },
  {
    id: 'p12',
    track: 'Pray',
    title: 'Confession Preparation + Examination of Conscience',
    duration: '12 min',
    summary: 'Guided reconciliation prep with state-in-life examination prompts.',
    keyPoints: ['Ask for light', 'Examine with honesty', 'Plan a sincere confession'],
    sourceStack: ['CCC 1454-1460'],
    audioScript:
      'Holy Spirit, help me see my sins clearly, trust God’s mercy, and make a humble confession.',
  },
  {
    id: 'l13',
    track: 'Learn',
    title: 'How to Read the Bible (NAB) as a Catholic',
    duration: '7 min',
    summary: 'Learn a reliable method to read Scripture prayerfully and in communion with the Church.',
    keyPoints: ['Context and genre', 'Pray with the text', 'Read with Tradition'],
    sourceStack: ['Dei Verbum 12', 'CCC 109-119'],
    audioScript:
      'Read the Bible with prayer, reason, and the mind of the Church so the Word forms your life.',
  },
  {
    id: 'l14',
    track: 'Learn',
    title: 'What the Catechism Is and How to Use It',
    duration: '6 min',
    summary: 'Navigate the Catechism by topic, paragraph references, and doctrinal hierarchy.',
    keyPoints: ['Four pillars', 'Cross references', 'Application to daily life'],
    sourceStack: ['CCC Prologue'],
    audioScript:
      'The Catechism is a trustworthy map: what we believe, celebrate, live, and pray.',
  },
  {
    id: 'l15',
    track: 'Learn',
    title: 'Scripture, Tradition, and Magisterium',
    duration: '8 min',
    summary: 'Understand the Catholic view of authority and why these three belong together.',
    keyPoints: ['One deposit of faith', 'Apostolic succession', 'Authentic interpretation'],
    sourceStack: ['Dei Verbum 9-10', 'CCC 80-95'],
    audioScript:
      'Scripture, Tradition, and Magisterium serve one Gospel and protect the Church from confusion.',
  },
  {
    id: 'l16',
    track: 'Learn',
    title: 'Vatican II in Plain Language',
    duration: '9 min',
    summary: 'A beginner-friendly overview of the Council’s major documents and goals.',
    keyPoints: ['Renewal in continuity', 'Universal call to holiness', 'Mission in modern world'],
    sourceStack: ['Lumen Gentium', 'Gaudium et Spes'],
    audioScript:
      'Vatican II calls all Catholics to holiness, mission, and deeper participation in Christ.',
  },
  {
    id: 'l17',
    track: 'Learn',
    title: 'Canon Law Basics for Lay Catholics',
    duration: '7 min',
    summary: 'See how Canon Law protects sacramental life, rights, and good order in the Church.',
    keyPoints: ['Purpose of law', 'Rights and duties of faithful', 'Pastoral application'],
    sourceStack: ['CIC can. 208-223', 'CIC can. 1752'],
    audioScript:
      'Canon Law exists for communion and salvation, not bureaucracy for its own sake.',
  },
  {
    id: 'l18',
    track: 'Learn',
    title: 'The Mass Explained from Scripture and Tradition',
    duration: '10 min',
    summary: 'Trace the biblical and historical roots of the Eucharistic liturgy.',
    keyPoints: ['Liturgy of the Word', 'Liturgy of the Eucharist', 'Real Presence'],
    sourceStack: ['Luke 22:19-20', 'CCC 1322-1419'],
    audioScript:
      'At Mass, heaven touches earth: Christ feeds us with His Word and Body.',
  },
  {
    id: 'l19',
    track: 'Learn',
    title: 'Sacrament of Reconciliation: Theology and Practice',
    duration: '8 min',
    summary: 'Learn what confession does, why it matters, and how to prepare fruitfully.',
    keyPoints: ['Contrition', 'Confession', 'Absolution and satisfaction'],
    sourceStack: ['John 20:21-23', 'CCC 1422-1498'],
    audioScript:
      'Confession is not shame management, it is a personal encounter with Christ’s healing mercy.',
  },
  {
    id: 'l20',
    track: 'Learn',
    title: 'Communion of Saints and Intercession',
    duration: '7 min',
    summary: 'Understand how the Church on earth and in heaven remains united in Christ.',
    keyPoints: ['One Body in Christ', 'Prayer for one another', 'Hope in resurrection'],
    sourceStack: ['Hebrews 12:1', 'CCC 946-962'],
    audioScript:
      'The saints are not rivals to Christ; they are witnesses who point us to Him.',
  },
  {
    id: 'l21',
    track: 'Learn',
    title: 'Mary in Catholic Theology',
    duration: '8 min',
    summary: 'A biblical and doctrinal overview of Marian teaching and devotion.',
    keyPoints: ['Mother of God', 'Model disciple', 'Proper Marian devotion'],
    sourceStack: ['Luke 1:26-56', 'CCC 963-975'],
    audioScript:
      'Marian devotion is Christ-centered: Mary always says, do whatever He tells you.',
  },
  {
    id: 'l22',
    track: 'Learn',
    title: 'Faith, Reason, and Science',
    duration: '9 min',
    summary: 'Clarify why Catholicism sees no contradiction between authentic faith and science.',
    keyPoints: ['God as source of truth', 'Proper methods', 'Humility before mystery'],
    sourceStack: ['Fides et Ratio', 'CCC 159'],
    audioScript:
      'Faith and reason are two wings on which the human spirit rises to the contemplation of truth.',
  },
  {
    id: 'c23',
    track: 'Converse',
    title: 'Why confess to a priest?',
    duration: '6 min',
    summary: 'Practice answering objections to sacramental confession with charity and clarity.',
    keyPoints: ['Acknowledge discomfort', 'Explain Christ’s institution', 'Invite personal encounter'],
    sourceStack: ['John 20:21-23', 'CCC 1441-1442'],
    audioScript:
      'Catholics confess to a priest because Jesus entrusted His Church with a sacramental ministry of reconciliation.',
  },
  {
    id: 'c24',
    track: 'Converse',
    title: 'Why pray to saints?',
    duration: '5 min',
    summary: 'Differentiate worship from intercession using simple, relational language.',
    keyPoints: ['God alone is worshipped', 'Saints intercede', 'Communion in Christ'],
    sourceStack: ['Revelation 5:8', 'CCC 956'],
    audioScript:
      'We do not worship saints; we ask their prayers, just as we ask faithful friends to pray for us.',
  },
  {
    id: 'c25',
    track: 'Converse',
    title: 'Where is the papacy in the Bible?',
    duration: '7 min',
    summary: 'Present Petrine texts and early Church witness without argument-first tone.',
    keyPoints: ['Matthew 16 context', 'Service of unity', 'Historical continuity'],
    sourceStack: ['Matthew 16:18-19', 'CCC 880-882'],
    audioScript:
      'The papacy is a ministry of unity and service rooted in Christ’s commission to Peter.',
  },
  {
    id: 'c26',
    track: 'Converse',
    title: 'Is Catholicism man-made tradition?',
    duration: '7 min',
    summary: 'Explain apostolic Tradition as living transmission of the Gospel.',
    keyPoints: ['Tradition vs customs', 'Apostolic foundation', 'Scripture and Tradition together'],
    sourceStack: ['2 Thessalonians 2:15', 'Dei Verbum 8-10'],
    audioScript:
      'Catholic Tradition is not human invention but the living apostolic faith handed on in the Church.',
  },
  {
    id: 'c27',
    track: 'Converse',
    title: 'Do Catholics worship Mary?',
    duration: '5 min',
    summary: 'Use clear distinctions: adoration for God, honor for Mary, imitation for discipleship.',
    keyPoints: ['Clarify terms', 'Use biblical language', 'Keep Jesus central'],
    sourceStack: ['Luke 1:48', 'CCC 971'],
    audioScript:
      'Catholics adore God alone and honor Mary because Scripture calls her blessed among women.',
  },
  {
    id: 'c28',
    track: 'Converse',
    title: 'Why trust the Church after scandals?',
    duration: '8 min',
    summary: 'Respond with honesty, repentance, and Christ-centered ecclesiology.',
    keyPoints: ['Acknowledge wounds', 'Differentiate sin and doctrine', 'Call to reform and holiness'],
    sourceStack: ['2 Corinthians 4:7', 'CCC 827'],
    audioScript:
      'The sins of Christians are real and grievous, yet Christ remains faithful to His Church and calls us to reform.',
  },
  {
    id: 'c29',
    track: 'Converse',
    title: 'Can faith and science both be true?',
    duration: '6 min',
    summary: 'Offer a balanced answer rooted in reason, humility, and the unity of truth.',
    keyPoints: ['Different methods', 'One truth', 'Avoid false conflict'],
    sourceStack: ['CCC 159', 'Fides et Ratio'],
    audioScript:
      'Faith and science seek truth by different methods and can never truly contradict when rightly understood.',
  },
  {
    id: 'c30',
    track: 'Converse',
    title: 'What makes Catholicism different?',
    duration: '7 min',
    summary: 'Give a concise overview of sacramental life, apostolic continuity, and universality.',
    keyPoints: ['Sacramental worldview', 'Apostolic succession', 'Global communion'],
    sourceStack: ['Acts 2:42', 'CCC 811-870'],
    audioScript:
      'Catholicism unites Scripture, sacrament, apostolic continuity, and global communion in one visible Church.',
  },
]

export const getModulesByTrack = (track: LaunchTrack) =>
  first30LaunchModules.filter((module) => module.track === track)
