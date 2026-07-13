const featuredJerseys = [
  { name: 'Classic Home Kit', price: '$79', badge: 'Best Seller' },
  { name: 'Champions Edition', price: '$99', badge: 'New Drop' },
  { name: 'Retro Legend', price: '$89', badge: 'Limited' }
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Jerseyspot</div>
        <nav className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Premium matchday wear</p>
            <h1>Show your team pride in style.</h1>
            <p className="hero-text">
              Discover official-inspired jerseys for football, basketball, and streetwear fans.
              Crafted for comfort, built for passion.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#shop">Shop Jerseys</a>
              <a className="btn btn-secondary" href="#about">Why Jerseyspot</a>
            </div>
          </div>

          <div className="hero-card" aria-label="Featured jersey showcase">
            <div className="card-badge">Featured</div>
            <h3>Signature Jersey Pack</h3>
            <p>Fresh colors, premium fabric, and fast delivery.</p>
            <div className="price-row">
              <span>From $89</span>
              <button type="button">Grab Yours</button>
            </div>
          </div>
        </section>

        <section id="shop" className="products-section">
          <div className="section-heading">
            <p className="eyebrow">Popular picks</p>
            <h2>Fan favorites this week</h2>
          </div>
          <div className="product-grid">
            {featuredJerseys.map((item) => (
              <article className="product-card" key={item.name}>
                <span className="product-badge">{item.badge}</span>
                <h3>{item.name}</h3>
                <p>High-quality fabric with a bold, clean finish.</p>
                <div className="product-footer">
                  <strong>{item.price}</strong>
                  <button type="button">Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="info-section">
          <div>
            <p className="eyebrow">Why fans love us</p>
            <h2>Fast shipping, authentic style, and unbeatable comfort.</h2>
          </div>
          <div className="stats-grid">
            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Styles</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>Rated</span>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>© 2026 Jerseyspot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
