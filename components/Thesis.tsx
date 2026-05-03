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
            Every product we build is a strategic asset. The user adoption and
            market-specific insights we generate flow back to the larger platform
            providers whose foundational AI powers our products — extending their
            reach into markets they couldn&apos;t serve directly.
          </p>
        </div>

        <div className="thesis-stat-grid">
          <div className="thesis-stat">
            <div className="thesis-stat-num">1<span>B+</span></div>
            <div className="thesis-stat-label">
              people whose work AI hasn&apos;t been built for — yet
            </div>
          </div>
          <div className="thesis-stat">
            <div className="thesis-stat-num">1<span>:1</span></div>
            <div className="thesis-stat-label">
              one product, one market — built end-to-end
            </div>
          </div>
          <div className="thesis-stat">
            <div className="thesis-stat-num">Day<span>1</span></div>
            <div className="thesis-stat-label">
              useful from the first interaction. not the fifth.
            </div>
          </div>
          <div className="thesis-stat">
            <div className="thesis-stat-num" style={{ fontSize: 32, paddingTop: 6 }}>
              Stand<span>alone.</span>
            </div>
            <div className="thesis-stat-label">
              each product. its own brand. its own users. its own value.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
