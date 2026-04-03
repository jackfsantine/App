import { useMemo, useState } from 'react';

type BottomTab =
  | 'Home'
  | 'Pray'
  | 'Library'
  | 'Bible'
  | 'Charity'
  | 'Learn'
  | 'Converse'
  | 'Profile';

type LibraryTab = 'Read' | 'Audiobooks' | 'Podcasts' | 'Downloaded' | 'Lists';

const bottomTabs: BottomTab[] = [
  'Home',
  'Pray',
  'Library',
  'Bible',
  'Charity',
  'Learn',
  'Converse',
  'Profile'
];

const libraryTabs: LibraryTab[] = [
  'Read',
  'Audiobooks',
  'Podcasts',
  'Downloaded',
  'Lists'
];

export default function App() {
  const [activeBottomTab, setActiveBottomTab] = useState<BottomTab>('Library');
  const [activeLibraryTab, setActiveLibraryTab] = useState<LibraryTab>('Read');

  const sectionTitle = useMemo(() => {
    if (activeBottomTab !== 'Library') return activeBottomTab;
    return `Library · ${activeLibraryTab}`;
  }, [activeBottomTab, activeLibraryTab]);

  return (
    <main className="app-shell">
      <header className="page-header">
        <h1>Catholic Formation</h1>
        <p>{sectionTitle}</p>
      </header>

      {activeBottomTab === 'Library' ? (
        <nav className="top-nav" aria-label="Library sections">
          {libraryTabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeLibraryTab ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveLibraryTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      ) : null}

      <section className="content-card">
        <h2>{sectionTitle}</h2>
        <p>
          {activeBottomTab === 'Library'
            ? `Explore ${activeLibraryTab.toLowerCase()} resources in the Library.`
            : `This is the ${activeBottomTab} section.`}
        </p>
      </section>

      <nav className="bottom-nav" aria-label="Main app navigation">
        {bottomTabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeBottomTab ? 'tab-button active' : 'tab-button'}
            onClick={() => setActiveBottomTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </main>
  );
}
