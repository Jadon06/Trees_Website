import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [donateOpen, setDonateOpen] = useState(false)
  const [donationAmount, setDonationAmount] = useState('1')
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
          <a href="#expectations" onClick={() => setMenuOpen(false)}>What to expect</a>
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
            <a className="text-link" href="#expectations">What to expect <span>↓</span></a>
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
        <div className="section-label"><span>02</span><span>Our mission</span></div>
        <div className="mission-content"><p className="mission-kicker">Our 20-year promise</p><h2>One trillion<br /><em>new beginnings.</em></h2><p>By 2046, The Green Shield Initiative will help plant and protect 1 trillion native trees with the communities who know their land best.</p><p>It is an ambitious response to a planetary emergency. Trees draw carbon dioxide from the air as they grow, store it in their trunks, roots, and soil, and cool the places around them. The World Economic Forum has reported that restoring a vast area of tree cover could remove around 205 gigatonnes of carbon from the atmosphere. Repeated at global scale, that kind of restoration can help reverse the buildup driving global warming, alongside rapid cuts to fossil-fuel emissions.</p><a className="text-link text-link-dark" href="https://www.weforum.org/stories/nature-and-biodiversity/planting-1-trillion-trees-save-the-planet-sustainability" target="_blank" rel="noreferrer">Read the source <span>↗</span></a></div>
        <div className="mission-aside"><strong>1T</strong><span>trees planted<br />by 2046</span><div className="leaf-note">The future is<br /><em>something we grow.</em></div></div>
      </section>

      <section className="expectation-section" id="expectations">
        <div className="section-label"><span>03</span><span>What to expect</span></div>
        <div className="expectation-content">
          <p className="mission-kicker">An En-ROADS scenario</p>
          <h2>A cooler path<br /><em>is possible.</em></h2>
          <p>En-ROADS is an interactive climate simulator that shows how policy and technology choices can shape global temperature, energy use, health, the economy, and other outcomes. It was developed by Climate Interactive and MIT Sloan, using system-dynamics modeling grounded in published climate and energy research.</p>
          <p>It is a trustworthy tool for exploring scenarios rather than a crystal ball or a promise. Its assumptions and relationships are documented, its results are tested against established scientific understanding, and its transparent design lets people inspect trade-offs by changing one solution at a time. En-ROADS has been used by more than 1.6 million people, including educators, advocates, businesses, and policymakers, to build climate understanding and compare possible pathways.</p>
          <p>If our mission is accomplished, the result would be more than a number of trees planted. The En-ROADS scenario linked below models an ambitious global tree-planting response across the next 80 years, while accounting for the real-world delays between acquiring suitable land, planting seedlings, and seeing mature forests grow. That timeline matters. New trees do not become mature carbon stores overnight, so the strongest benefits arrive progressively rather than all at once.</p>
          <p>As forests establish, they draw carbon dioxide from the atmosphere through photosynthesis and store carbon in trunks, branches, roots, leaf litter, and soils. The modeled intervention therefore creates a growing climate benefit that strengthens over time. It also brings important local benefits that a temperature graph cannot fully capture: shade, cooler ground, healthier watersheds, reduced erosion, habitat for wildlife, and more resilient landscapes for the people who live and work in them.</p>
          <p>The scenario is intentionally realistic about constraints. Land acquisition takes time, planting capacity has limits, and survival depends on choosing native species that fit local conditions and caring for them after planting. Some seedlings will fail and need to be replaced. Drought, fire, pests, competing land uses, and changing climate conditions can also reduce the amount of carbon ultimately stored. These factors mean that protecting and maintaining forests is just as important as reaching the planting target.</p>
          <p>The overall lesson is hopeful but not simplistic. One trillion trees could make a meaningful contribution to slowing warming and could help move the world toward a safer climate pathway. However, forests cannot absorb emissions indefinitely, and planting trees does not cancel the need to rapidly reduce coal, oil, and gas use. The best outcome comes from combining restoration with clean energy, efficient buildings and transport, lower-emission industry, and strong protection for existing forests.</p>
          <p>There would be social and economic gains as well. Restoration can create local jobs in nurseries, planting, monitoring, fire prevention, and watershed care. When communities help choose locations and species, they can protect food systems and cultural landscapes while building skills that last beyond a single campaign. The outcome depends on durable funding, transparent measurement, and local leadership from the first seedling to the mature forest.</p>
          <p>Our mission would therefore be a long-term act of climate infrastructure: patient work with compounding returns. The first years would be defined by partnerships, land stewardship, and survival. Later decades would bring larger canopies, deeper roots, richer soils, and more dependable cooling and carbon storage. Success would not mean that every climate problem disappears. It would mean that communities have helped create a stronger natural defense, restored living systems, and given future generations more room to adapt and thrive.</p>
        </div>
        <div className="expectation-graph">
          <div className="enroads-embed">
            <iframe title="Interactive En-ROADS scenario showing the modeled climate response to this mission" src="https://en-roads.climateinteractive.org/scenario.html?v=26.11.0&p517=11&p520=-62&p50=0.8&p373=11&p63=10.7&p235=1.7&p417=100&p57=-10&g0=2&g1=62" loading="lazy" />
          </div>
          <a className="text-link text-link-dark" href="https://en-roads.climateinteractive.org/scenario.html?v=26.11.0&p517=11&p520=-62&p50=0.8&p373=11&p63=10.7&p235=1.7&p417=100&p57=-10&g0=2&g1=62" target="_blank" rel="noreferrer">Open the En-ROADS scenario <span>↗</span></a>
          <div className="expectation-aside">
            <strong>80</strong>
            <span>years of modeled<br />climate response</span>
            <div className="expectation-note">Patient work,<br /><em>lasting change.</em></div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">        <div className="section-label"><span>04</span><span>Our work</span></div><div className="work-intro"><h2>Rooted in<br /><em>the real world.</em></h2><p>We plan to enlighten and educate 1 million people every year, turning climate knowledge into practical action for healthier forests, communities, and futures.</p><a className="text-link text-link-dark work-social-link" href="#social">Follow the work <span>↗</span></a></div></div>
        <div className="work-grid">
          <article className="work-card"><div className="card-number">01</div><div className="card-icon">⌁</div><h3>Restore wild places</h3><p>Native trees, planted where they belong, bring watersheds and wildlife back to life.</p><a href="#top" aria-label="Learn about restoring wild places">↗</a></article>
          <article className="work-card work-card-featured"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85" alt="Hands holding a young tree seedling" /><div className="featured-copy"><div className="card-number">02</div><h3>Back local leaders</h3><p>We fund the people who know their land best, with tools and trust for the long haul.</p><a href="#stories" aria-label="Read field notes">Read field notes <span>↗</span></a></div></article>
          <article className="work-card"><div className="card-number">03</div><div className="card-icon">◌</div><h3>Make it count</h3><p>We measure what matters, share what we learn, and keep showing up after the photo op.</p><a href="#top" aria-label="Learn how we measure impact">↗</a></article>
        </div>
      </section>

      <section className="story-section" id="stories"><div className="story-image"><img src="https://www.unccd.int/sites/default/files/styles/components_830x500_webp/public/2021-09/great%20green%20wall.jpg.webp?itok=CnxZH6AC" alt="Green fields meeting the edge of a dry landscape as part of the Great Green Wall region" /><span>Mission / 004</span></div><div className="story-copy"><p className="eyebrow"><span /> A mission like ours</p><h2>The Great<br /><em>Green Wall.</em></h2><p>Led by African countries and launched in 2007, the Great Green Wall is restoring land and livelihoods across 22 nations in the Sahel. Its 2030 ambition is immense: restore 100 million hectares, sequester 250 million tonnes of carbon, and create 10 million green jobs.</p><p className="story-secondary">Healthy soils and native vegetation can hold water, support biodiversity, strengthen food security, and help communities adapt where temperatures are rising fast. It is an ecosystem project, a livelihood project, and a living legacy for the generations who come next.</p><a className="button button-outline" href="https://www.unccd.int/our-work/ggwi" target="_blank" rel="noreferrer">Explore the initiative <span>↗</span></a></div></section>

      <section className="join-section"><div><p className="eyebrow"><span /> Stay close to the ground</p><h2>Good news,<br /><em>occasionally.</em></h2></div>{joined ? <div className="joined-message"><strong>You’re in.</strong><p>We’ll bring a little good news to your inbox.</p></div> : <form onSubmit={handleSignup}><label htmlFor="email">Monthly field notes, no noise.</label><div className="email-row"><input id="email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Join the newsletter">↗</button></div><small>By subscribing, you agree to receive news from The Green Shield Initiative.</small></form>}</section>

      <footer id="social"><a className="brand" href="#top"><span className="brand-mark">✳</span><span>The Green Shield<br /><em>Initiative</em></span></a><p>For every tree we plant,<br />a little more future.</p><div className="footer-links"><a href="#social">Instagram</a><a href="#social">LinkedIn</a><a href="#mission">Contact</a></div><span className="copyright">© 2024 GSI</span></footer>

      {donateOpen && <div className="modal-backdrop" role="presentation" onClick={() => setDonateOpen(false)}><div className="donate-modal" role="dialog" aria-modal="true" aria-labelledby="donate-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setDonateOpen(false)} aria-label="Close donation dialog">×</button><p className="eyebrow"><span /> Your roots start here</p><h2 id="donate-title">One dollar.<br /><em>One tree.</em></h2><p>Your $1 gift helps a local partner plant and care for one native tree.</p><div className="donate-impact"><div><strong>Atmosphere</strong><span>As it grows, a tree draws carbon dioxide from the air, stores carbon in its wood and soil, and helps cool its surroundings.</span></div><div><strong>Local life</strong><span>Native trees create habitat, hold water in the soil, reduce erosion, and give communities food, shade, and a stronger future.</span></div></div><label className="donation-input-label" htmlFor="donation-amount">How many trees would you like to plant?</label><div className="donation-input-wrap"><span>$</span><input id="donation-amount" type="text" inputMode="numeric" pattern="[0-9]*" aria-describedby="donation-hint" value={donationAmount} onChange={(event) => setDonationAmount(event.target.value.replace(/[^0-9]/g, '').replace(/^0+(?=\d)/, ''))} onBlur={() => setDonationAmount((amount) => amount || '1')} /><span className="per-tree">$1 per tree</span></div><small className="donation-hint" id="donation-hint">Enter a whole number. Your gift plants the same number of trees.</small><button className="button button-dark modal-donate" onClick={() => setDonateOpen(false)}>Continue to give <span>↗</span></button></div></div>}
    </main>
  )
}

export default App
