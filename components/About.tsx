export default function About() {
  const values = [
    {
      title: "Focused, not broad",
      body: "Every product is built for a specific user and market. We resist the urge to build for everyone.",
    },
    {
      title: "Useful from day one",
      body: "Our products work without setup, configuration, or a learning curve. Value in the first session.",
    },
    {
      title: "Built as assets, not features",
      body: "Each product is designed to stand alone — with its own brand, users, and strategic value.",
    },
    {
      title: "Grounded, not hype-driven",
      body: "We build things that matter for real people. We don't chase trends or chase press.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <p className="section-tag">About the studio</p>
          <h2 className="section-h2">A builder-led studio with discipline and direction.</h2>
          <p className="section-body">
            Northrise is not a generic AI lab, a consulting shop, or a hype-driven startup.
            It&apos;s a product studio designed to build, scale, and own focused AI products
            as strategic assets.
          </p>
          <p className="section-body" style={{ marginTop: 16 }}>
            We do not ask users to become AI experts. We do the hard work for them — so
            AI feels obvious, useful, and natural from the first day they use it.
          </p>
        </div>

        <div className="about-values">
          {values.map((v) => (
            <div key={v.title} className="about-value">
              <div className="about-value-mark">
                <div className="about-value-dot"></div>
              </div>
              <div>
                <div className="about-value-title">{v.title}</div>
                <div className="about-value-body">{v.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
