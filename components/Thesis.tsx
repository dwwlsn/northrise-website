export default function Thesis() {
  return (
    <section className="thesis" id="thesis">
      <div className="thesis-inner">
        <div>
          <div className="thesis-rule"></div>
          <p className="section-tag">Our thesis</p>
          <h2 className="section-h2">
            Big tech builds broad. <strong>Northrise builds focused.</strong>
          </h2>
          <p className="section-body">
            Large AI platforms are designed to serve everyone. That creates real gaps
            for specific users, workflows, and markets. We find those gaps and build
            products that fit them precisely — simple, useful, and built around how
            real people actually work.
          </p>
          <p className="section-body" style={{ marginTop: 16 }}>
            Every product we build is a strategic asset. We capture adoption, utilization,
            and market-specific insight that larger companies eventually need to own.
          </p>
        </div>

        <div className="thesis-stat-grid">
          <div className="thesis-stat">
            <div className="thesis-stat-num">1<span>B+</span></div>
            <div className="thesis-stat-label">people still underserved by existing AI tools</div>
          </div>
          <div className="thesis-stat">
            <div className="thesis-stat-num" style={{ fontSize: 36, paddingTop: 4 }}>Focus<span>.</span></div>
            <div className="thesis-stat-label">is our competitive advantage</div>
          </div>
          <div className="thesis-stat">
            <div className="thesis-stat-num">Day<span>1</span></div>
            <div className="thesis-stat-label">useful from the first interaction</div>
          </div>
          <div className="thesis-stat">
            <div className="thesis-stat-num">↑<span></span></div>
            <div className="thesis-stat-label">strategic assets, not just apps</div>
          </div>
        </div>
      </div>
    </section>
  );
}
