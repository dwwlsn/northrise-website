import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible AI — Northrise",
  description: "The principles that guide every AI product Northrise builds.",
};

export default function ResponsibleAI() {
  return (
    <>
      <p className="section-tag">Our principles</p>
      <h1>Responsible AI</h1>
      <p className="last-updated">Last updated: November 3, 2026</p>

      <p>
        Northrise builds AI products for specific markets. We believe focused, useful AI
        built with care delivers more value to real people than general-purpose tools. This
        page describes the principles that guide every product we build, and what those
        principles mean in practice.
      </p>

      <h2>1. People first</h2>
      <p>
        We design for the user we&apos;re serving — not for the AI. Our products work
        without setup, without configuration, without learning curves. If a feature only
        works because the user becomes an &ldquo;AI expert,&rdquo; we&apos;ve designed it
        wrong.
      </p>

      <h2>2. Useful from day one</h2>
      <p>
        We measure success by whether someone gets real value in their first session. If
        they don&apos;t, we go back and fix it. We don&apos;t ship aspirational AI that
        &ldquo;could&rdquo; work — we ship AI that works now.
      </p>

      <h2>3. Transparent about what AI does</h2>
      <p>
        Each product clearly indicates when AI is generating content, making suggestions, or
        taking action on the user&apos;s behalf. Users always know what the AI did and what
        they did themselves.
      </p>

      <h2>4. Built on trusted foundations</h2>
      <p>
        We build on top of established AI platforms (currently including OpenAI and
        Anthropic). We don&apos;t train our own foundation models. Their safety practices
        are the floor; our product-specific guardrails sit on top.
      </p>

      <h2>5. We don&apos;t train on your data</h2>
      <p>
        User content from our products is never used to train foundation models without
        explicit consent. We&apos;re a customer of these platforms — we configure our
        accounts so that user data isn&apos;t shared back for model training.
      </p>

      <h2>6. Human oversight on consequential actions</h2>
      <p>
        Any action with real-world consequences — sending an email, scheduling, transacting,
        sharing data — requires user confirmation. The AI proposes; the human disposes.
      </p>

      <h2>7. Honest about limits</h2>
      <p>
        Our products will sometimes be wrong. We tell users that. We invest in mechanisms —
        confidence indicators, undo, escape hatches — to make wrongness recoverable.
      </p>

      <h2>8. Bias and fairness</h2>
      <p>
        Foundation models carry biases from their training data. We test our products against
        the markets they serve, surface where bias might affect outcomes, and document
        mitigations in product-specific documentation.
      </p>

      <h2>9. Privacy by default</h2>
      <p>
        We follow data minimization. We collect only what a feature requires. See our{" "}
        <a href="/privacy">Privacy Policy</a> for specifics on data handling at the company
        level, and each product&apos;s own privacy policy for product-specific practices.
      </p>

      <h2>10. We listen</h2>
      <p>
        We treat user reports of incorrect, harmful, or biased outputs as urgent. Each
        product provides a clear path to flag issues, and we respond.
      </p>

      <h2>What this means for builders, partners, and journalists</h2>
      <p>
        If you&apos;re evaluating whether to build with us, partner with us, or write about
        us:
      </p>
      <ul>
        <li>
          Each product publishes its own AI-specific documentation alongside this overarching
          policy.
        </li>
        <li>
          We&apos;re happy to walk through our practices in detail — email{" "}
          <a href="mailto:responsibleai@northrise.com">responsibleai@northrise.com</a>.
        </li>
      </ul>

      <h2>Changes to these principles</h2>
      <p>
        These principles will evolve as the field evolves and as our products grow. The
        &ldquo;Last updated&rdquo; date above reflects the most recent change. Material
        changes will be highlighted.
      </p>

      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:responsibleai@northrise.com">responsibleai@northrise.com</a></li>
        <li>Mail: [Northrise Holdings Inc.], [Address]</li>
      </ul>
    </>
  );
}
