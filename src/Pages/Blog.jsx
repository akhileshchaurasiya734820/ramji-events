import whyRamjiDining from '../assets/why_ramji_dining.png'
import { blogPosts } from '../Data/blogs.jsx'

export default function Blog({
  navigateTo,
  blogCategory,
  setBlogCategory,
  activePost,
  setActivePost
}) {
  return (
    <div className="services-page blog-page">
      {/* Blog Header Banner */}
      <div className="services-header-banner blog-header-banner" style={{ backgroundImage: `url(${whyRamjiDining})` }}>
        <div className="services-header-overlay"></div>
        <div className="services-header-content">
          <div className="breadcrumbs">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>HOME</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">JOURNAL</span>
          </div>
          <span className="services-subtitle">JOURNAL</span>
          <h1 className="services-title">Insights & Inspiration</h1>
          <p className="services-lead">
            Event trends, planning advice, and behind-the-scenes stories from our team.
          </p>
        </div>
      </div>

      {/* Blog Controls Section */}
      <div className="blog-controls-container">
        <div className="blog-filters-wrapper">
          {['ALL', 'WEDDINGS', 'CORPORATE', 'BEHIND THE SCENES', 'TIPS & ADVICE', 'VENUES'].map((cat) => (
            <button
              key={cat}
              onClick={() => setBlogCategory(cat)}
              className={`blog-filter-btn ${blogCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="blog-grid-container">
        <div className="blog-grid">
          {blogPosts
            .filter(post => blogCategory === 'ALL' || post.category.toUpperCase() === blogCategory)
            .map((post) => (
              <div
                key={post.id}
                className="blog-card"
                onClick={() => setActivePost(post)}
              >
                <div className="blog-card-img-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-meta-category">{post.category}</span>
                    <span className="blog-meta-dot">·</span>
                    <span className="blog-meta-date">{post.date}</span>
                    <span className="blog-meta-dot">·</span>
                    <span className="blog-meta-readtime">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <button 
                    className="blog-card-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePost(post);
                    }}
                  >
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Article Modal */}
      {activePost !== null && (
        <div className="article-modal-overlay" onClick={() => setActivePost(null)}>
          <div className="article-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="article-modal-close"
              onClick={() => setActivePost(null)}
              aria-label="Close article"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="article-modal-hero" style={{ backgroundImage: `url(${activePost.image})` }}>
              <div className="article-modal-hero-overlay"></div>
              <div className="article-modal-hero-content">
                <span className="article-modal-category">{activePost.category}</span>
                <h2 className="article-modal-title">{activePost.title}</h2>
                <div className="article-modal-meta">
                  <span>{activePost.date}</span>
                  <span>·</span>
                  <span>{activePost.readTime}</span>
                  <span>·</span>
                  <span>By Ramesh Joshi</span>
                </div>
              </div>
            </div>
            <div className="article-modal-body">
              <p className="article-lead">{activePost.excerpt}</p>
              <p>
                Planning an event is a beautiful art, requiring careful balance of creative design, venue logistics, and catering choices. At Ramji Events, we believe in crafting every celebration to be unique. Our process is designed to coordinate all pieces together seamlessly.
              </p>
              <h3>Key Elements for Event Success</h3>
              <ul>
                <li><strong>Concept Development:</strong> Aligning floral theme, colors, and layouts to represent your distinct style.</li>
                <li><strong>Logistics Masterclass:</strong> Streamlining vendor coordination, technical setups, and lighting to ensure perfect execution on event day.</li>
                <li><strong>Curated Dining:</strong> Providing exquisite menus and customized drinks selection to wow your guests.</li>
              </ul>
              <p>
                Whether it's an intimate anniversary dinner, a multi-day wedding celebration, or a 1000-guest summit conference, focusing on these fundamentals elevates the entire celebration. Stay tuned for more behind-the-scenes stories and tips from our design team!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
