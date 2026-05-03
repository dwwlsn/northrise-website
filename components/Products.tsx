export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-inner">
        <div className="products-header">
          <p className="section-tag">Products</p>
          <h2 className="section-h2">Focused products. Each one built for a specific market.</h2>
        </div>

        <div className="product-feature">
          <div className="product-info">
            <div>
              <div className="product-badge">✦ First product &nbsp;·&nbsp; Early Access</div>
              <div className="product-name">AskTev</div>
              <p className="product-desc">
                Tev is your family&apos;s AI chief of staff. Schedules, meals, school emails —
                she handles the mental load and delivers a 5-minute morning briefing so
                nothing slips. Built for real families, not power users.
              </p>
            </div>
            <a href="https://asktev.com" target="_blank" rel="noopener noreferrer" className="product-link">
              Visit asktev.com <span>→</span>
            </a>
          </div>

          <div className="product-preview">
            <div className="app-mock">
              <div className="app-mock-header">
                <div className="app-mock-header-left">
                  <div className="app-tev-avatar"></div>
                  <div>
                    <div className="app-mock-name">Tev</div>
                    <div className="app-mock-status">
                      <div className="app-mock-status-dot"></div>
                      Online · AI Family Chief of Staff
                    </div>
                  </div>
                </div>
                <div className="app-mock-plan">Plan tomorrow in under 5 min</div>
              </div>
              <div className="app-mock-body">
                <div className="app-msg-row">
                  <div className="app-msg-avatar"></div>
                  <div className="app-msg app-msg-tev">
                    Hey — I&apos;m Tev. I handle the mental load of running a household:
                    schedules, meals, school emails, all of it. What does yours feel like right now?
                  </div>
                </div>
                <div className="app-msg-row app-msg-row-user">
                  <div className="app-msg app-msg-user">
                    Soccer AND dentist on the same day 😩
                  </div>
                </div>
                <div className="app-msg-row">
                  <div className="app-msg-avatar"></div>
                  <div className="app-msg app-msg-tev">
                    I see the conflict — soccer at 5pm overlaps your 4:30pm call.
                    Want me to reschedule, or handle pickup a different way?
                  </div>
                </div>
              </div>
              <div className="app-chips">
                <div className="app-chip">Reschedule soccer</div>
                <div className="app-chip">Find a carpool</div>
                <div className="app-chip">Move my call</div>
              </div>
              <div className="app-mock-input-row">
                <span className="app-mock-input-text">Or just tell me what your week looks like…</span>
                <div className="app-mock-send">
                  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 5L1 1V4.5L6.5 5L1 5.5V9Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderTop: "none", borderRadius: "0 0 6px 6px", overflow: "hidden" }}>
          <div className="product-coming">
            <div className="product-coming-text">
              <strong>More products in development.</strong><br/>
              Each one built for a specific underserved market.
            </div>
            <div className="product-coming-tag">Coming soon</div>
          </div>
          <div className="product-coming" style={{ borderLeft: "1px solid var(--border)" }}>
            <div className="product-coming-text">
              <strong>Have a market in mind?</strong><br/>
              We&apos;re always looking for the next gap worth filling.
            </div>
            <a href="#contact" className="btn-ghost" style={{ flexShrink: 0 }}>
              Talk to us <span className="btn-ghost-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
