import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [donateOpen, setDonateOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) setJoined(true)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Green Shield Initiative home">
          <span className="brand-mark">✳</span>
          <span>The Green Shield<br /><em>Initiative</em></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#mission" onClick={() => setMenuOpen(false)}>Our mission</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Field notes</a>
          <button className="header-cta" type="button" onClick={() => setDonateOpen(true)}>Give a little <span>↗</span></button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A living planet is possible</p>
          <h1>Let’s put<br /><i>down roots.</i></h1>
          <p className="hero-description">We plant, protect, and partner with communities to grow forests that last for generations.</p>
          <div className="hero-actions">
            <button className="button button-dark" type="button" onClick={() => setDonateOpen(true)}>Plant a tree <span>↗</span></button>
            <a className="text-link" href="#mission">See our approach <span>↓</span></a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=85" alt="Sunlight filtering through a dense green forest" />
          <div className="hero-stamp"><strong>01</strong><span>Regenerate<br />together</span></div>
          <div className="hero-caption">The Kijani corridor, Kenya <span>2024</span></div>
        </div>
      </section>

      <section className="impact-strip" aria-label="Our impact">
        <div className="impact-intro"><span className="tiny-label">Since 2016</span><strong>Small actions.<br />Deep roots.</strong></div>
        <div className="stat"><strong>1.2m</strong><span>trees planted</span></div>
        <div className="stat"><strong>14</strong><span>communities supported</span></div>
        <div className="stat"><strong>87%</strong><span>seedling survival rate</span></div>
        <div className="impact-arrow">↗</div>
      </section>

      <section className="mission-section" id="mission">
        <div className="section-label"><span>02</span><span>Why we’re here</span></div>
        <div className="mission-content"><h2>A forest is more<br />than <em>trees.</em></h2><p>It is shade for a child, food for a family, a home for a species, and a future with room to breathe. We work with people on the ground to restore the places that sustain us all.</p><a className="text-link text-link-dark" href="#work">Meet our partners <span>↗</span></a></div>
        <div className="leaf-note">The best time to plant<br /><em>was yesterday.</em><br />The next best time is now.</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><div className="section-label"><span>03</span><span>How we grow</span></div><h2>Rooted in<br /><em>the real world.</em></h2></div>
        <div className="work-grid">
          <article className="work-card"><div className="card-number">01</div><div className="card-icon">⌁</div><h3>Restore wild places</h3><p>Native trees, planted where they belong, bring watersheds and wildlife back to life.</p><a href="#top" aria-label="Learn about restoring wild places">↗</a></article>
          <article className="work-card work-card-featured"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85" alt="Hands holding a young tree seedling" /><div className="featured-copy"><div className="card-number">02</div><h3>Back local leaders</h3><p>We fund the people who know their land best, with tools and trust for the long haul.</p><a href="#stories" aria-label="Read field notes">Read field notes <span>↗</span></a></div></article>
          <article className="work-card"><div className="card-number">03</div><div className="card-icon">◌</div><h3>Make it count</h3><p>We measure what matters, share what we learn, and keep showing up after the photo op.</p><a href="#top" aria-label="Learn how we measure impact">↗</a></article>
        </div>
      </section>

      <section className="story-section" id="stories"><div className="story-image"><img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85" alt="Aerial view of a river winding through a green landscape" /><span>Field note / 004</span></div><div className="story-copy"><p className="eyebrow"><span /> From the field</p><h2>“The trees are<br /><em>coming home.”</em></h2><p>In the highlands of western Kenya, 400 women are bringing back the native forest one hillside at a time. Here’s what happens when restoration belongs to everyone.</p><a className="button button-outline" href="#top">Read the story <span>↗</span></a></div></section>

      <section className="join-section"><div><p className="eyebrow"><span /> Stay close to the ground</p><h2>Good news,<br /><em>occasionally.</em></h2></div>{joined ? <div className="joined-message"><strong>You’re in.</strong><p>We’ll bring a little good news to your inbox.</p></div> : <form onSubmit={handleSignup}><label htmlFor="email">Monthly field notes, no noise.</label><div className="email-row"><input id="email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Join the newsletter">↗</button></div><small>By subscribing, you agree to receive news from The Green Shield Initiative.</small></form>}</section>

      <footer><a className="brand" href="#top"><span className="brand-mark">✳</span><span>The Green Shield<br /><em>Initiative</em></span></a><p>For every tree we plant,<br />a little more future.</p><div className="footer-links"><a href="#mission">Instagram</a><a href="#mission">LinkedIn</a><a href="#mission">Contact</a></div><span className="copyright">© 2024 GSI</span></footer>

      {donateOpen && <div className="modal-backdrop" role="presentation" onClick={() => setDonateOpen(false)}><div className="donate-modal" role="dialog" aria-modal="true" aria-labelledby="donate-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setDonateOpen(false)} aria-label="Close donation dialog">×</button><p className="eyebrow"><span /> Your roots start here</p><h2 id="donate-title">Choose your<br /><em>impact.</em></h2><p>Every $10 helps a local partner plant and care for one native tree.</p><div className="donation-options"><button>$10 <small>1 tree</small></button><button>$25 <small>2 trees</small></button><button>$50 <small>5 trees</small></button></div><button className="button button-dark modal-donate" onClick={() => setDonateOpen(false)}>Continue to give <span>↗</span></button></div></div>}
    </main>
  )
}

export default App
