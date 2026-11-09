
import { useState } from 'react'
import './App.css'

const initialPosts = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    username: 'sarahmitchell',
    role: 'Real Estate Agent',
    initials: 'SM',
    location: 'Brooklyn Heights, Brooklyn',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
    caption: 'Just listed in Brooklyn Heights! Beautiful natural light, elegant details, and a private outdoor space just minutes from the waterfront.',
    likes: 128,
    comments: 18,
  },
  {
    id: 2,
    name: 'James Cooper',
    username: 'jamescooper',
    role: 'Home Enthusiast',
    initials: 'JC',
    location: 'Upper West Side, Manhattan',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    caption: 'Apartment inspiration from Manhattan. Warm wood, clean lines, and natural light make this space feel like home.',
    likes: 86,
    comments: 12,
  },
  {
    id: 3,
    name: 'Olivia Bennett',
    username: 'oliviabennett',
    role: 'Real Estate Agent',
    initials: 'OB',
    location: 'Astoria, Queens',
    time: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
    caption: 'A little NYC design inspiration. Great spaces are about more than square footage. They are about how a home makes you feel.',
    likes: 204,
    comments: 26,
  },
]

const people = [
  ['SM', 'Sarah Mitchell', 'Brooklyn Agent'],
  ['JC', 'James Cooper', 'NYC Home Enthusiast'],
  ['OB', 'Olivia Bennett', 'Queens Agent'],
]

function App() {
  const [posts, setPosts] = useState(initialPosts)
  const [activeNav, setActiveNav] = useState('Home')
  const [caption, setCaption] = useState('')
  const [location, setLocation] = useState('')
  const [showComposer, setShowComposer] = useState(false)
  const [likedPosts, setLikedPosts] = useState([])

  const toggleLike = (id) => {
    setLikedPosts((current) =>
      current.includes(id)
        ? current.filter((postId) => postId !== id)
        : [...current, id]
    )
  }

  const createPost = (event) => {
    event.preventDefault()
    if (!caption.trim()) return

    const newPost = {
      id: Date.now(),
      name: 'Your Name',
      username: 'yourprofile',
      role: 'HomeFeed Member',
      initials: 'YN',
      location: location.trim() || 'New York, NY',
      time: 'Just now',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      caption: caption.trim(),
      likes: 0,
      comments: 0,
    }

    setPosts((current) => [newPost, ...current])
    setCaption('')
    setLocation('')
    setShowComposer(false)
    setActiveNav('Home')
  }

  const navigation = [
    ['⌂', 'Home'],
    ['⌕', 'Explore'],
    ['＋', 'Create Post'],
    ['♡', 'Notifications'],
    ['✉', 'Messages'],
    ['◎', 'My Profile'],
  ]

  return (
    <div className="social-app">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-icon">H</span>
          <span>HomeFeed <span className="brand-light">Social</span></span>
        </a>

        <div className="search-box">
          <span>⌕</span>
          <input placeholder="Search people, homes, neighborhoods..." />
        </div>

        <div className="top-actions">
          <button className="icon-button" onClick={() => setActiveNav('Notifications')}>♡</button>
          <button className="icon-button" onClick={() => setActiveNav('Messages')}>✉</button>
          <div className="profile-avatar">YN</div>
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-profile">
            <div className="large-avatar">YN</div>
            <h3>Your Name</h3>
            <p>@yourprofile</p>

            <div className="profile-stats">
              <div><strong>{posts.length}</strong><span>Posts</span></div>
              <div><strong>0</strong><span>Followers</span></div>
              <div><strong>0</strong><span>Following</span></div>
            </div>
          </div>

          <nav className="navigation">
            {navigation.map(([icon, label]) => (
              <button
                key={label}
                className={activeNav === label ? 'nav-item active' : 'nav-item'}
                onClick={() => {
                  setActiveNav(label)
                  if (label === 'Create Post') setShowComposer(true)
                }}
              >
                <span className="nav-icon">{icon}</span>
                {label}
              </button>
            ))}
          </nav>

          <div className="sidebar-bottom">
            <p>HOMEFEED SOCIAL</p>
            <span>Discover New York homes. Share inspiration. Connect.</span>
          </div>
        </aside>

        <main className="feed-area">
          <div className="feed-heading">
            <div>
              <span className="eyebrow">THE NEW YORK REAL ESTATE COMMUNITY</span>
              <h1>{activeNav === 'Explore' ? 'Explore New York' : 'Your Feed'}</h1>
              <p>Homes, neighborhoods, and people shaping NYC real estate.</p>
            </div>

            <button
              className="primary-button"
              onClick={() => setShowComposer(true)}
            >
              ＋ Create Post
            </button>
          </div>

          <section className="stories">
            <div className="story">
              <div className="story-ring add-story">＋</div>
              <span>Your Story</span>
            </div>

            {people.map(([initials, name]) => (
              <div className="story" key={name}>
                <div className="story-ring"><div>{initials}</div></div>
                <span>{name.split(' ')[0]}</span>
              </div>
            ))}
          </section>

          {showComposer && (
            <form className="composer" onSubmit={createPost}>
              <div className="composer-heading">
                <h2>Create a post</h2>
                <button type="button" onClick={() => setShowComposer(false)}>✕</button>
              </div>

              <textarea
                value={caption}
                onChange={(event) => setCaption(event.target.value)}
                placeholder="Share a listing, neighborhood find, design idea, or NYC real estate insight..."
                rows={4}
              />

              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Add a New York location (optional)"
              />

              <div className="composer-footer">
                <span>⌖ Add a neighborhood or location</span>
                <button className="primary-button" type="submit">
                  Publish Post
                </button>
              </div>
            </form>
          )}

          <div className="feed-tabs">
            <button className="selected" onClick={() => setActiveNav('Home')}>For You</button>
            <button onClick={() => setActiveNav('Explore')}>Discover</button>
            <button onClick={() => setActiveNav('Home')}>Following</button>
          </div>

          {posts.map((post) => (
            <article className="post-card" key={post.id}>
              <div className="post-header">
                <div className="post-avatar">{post.initials}</div>

                <div className="post-user">
                  <strong>{post.name}</strong>
                  <span>{post.role} · {post.time}</span>
                </div>

                <button className="more-button">···</button>
              </div>

              <p className="post-location">⌖ {post.location}</p>
              <p className="post-caption">{post.caption}</p>

              <img
                className="post-image"
                src={post.image}
                alt="Real estate and home inspiration"
              />

              <div className="post-actions">
                <button
                  className={likedPosts.includes(post.id) ? 'liked' : ''}
                  onClick={() => toggleLike(post.id)}
                >
                  {likedPosts.includes(post.id) ? '♥' : '♡'}
                  {' '}{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                </button>

                <button>▢ {post.comments} Comments</button>
                <button>↗ Share</button>
                <button className="save-button">♧ Save</button>
              </div>
            </article>
          ))}
        </main>

        <aside className="right-sidebar">
          <section className="welcome-card">
            <span className="eyebrow">WELCOME TO HOMEFEED</span>
            <h2>New York real estate meets social.</h2>
            <p>
              Discover homes across the five boroughs, connect with local
              agents, and share the neighborhoods and spaces that inspire you.
            </p>
            <button onClick={() => setShowComposer(true)}>Share something</button>
          </section>

          <section className="suggestions">
            <div className="suggestion-heading">
              <h3>People to discover</h3>
              <button>See all</button>
            </div>

            {people.map(([initials, name, role]) => (
              <div className="suggestion" key={name}>
                <div className="suggestion-avatar">{initials}</div>
                <div className="suggestion-info">
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
                <button>＋</button>
              </div>
            ))}
          </section>

          <section className="neighborhoods">
            <h3>Explore New York</h3>
            <div className="neighborhood-tags">
              {[
                'Manhattan',
                'Brooklyn',
                'Queens',
                'The Bronx',
                'Staten Island',
                'Long Island',
                'Westchester',
                'Hudson Valley',
              ].map((area) => (
                <button key={area} onClick={() => setActiveNav('Explore')}>
                  {area}
                </button>
              ))}
            </div>
          </section>

          <div className="right-footer">
            About · Privacy · Terms · Help
            <p>© 2026 HomeFeed Social</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
