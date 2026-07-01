---
layout: default
title: "AI Design"
permalink: /ai/
ai_tracks:
  - title: "AI Visual Exploration"
    text: "Rapid image territories, mood systems, campaign directions, and controlled visual research before production begins."
  - title: "AI Workflow"
    text: "Repeatable prompt structures, review loops, image selection standards, and production handoff for faster creative delivery."
  - title: "AI-assisted Product Rendering"
    text: "Concept rendering, scene variation, material direction, and product storytelling supported by human art direction."
  - title: "Creative Automation"
    text: "Batch ideation, content variants, visual QA routines, and lightweight automation for recurring design tasks."
  - title: "Design System + AI"
    text: "Brand rules, visual tokens, prompt libraries, and asset generation logic aligned into one coherent operating system."
---

<section class="ai-hero" aria-labelledby="ai-page-title">
  <div class="studio-shell ai-hero__grid">
    <div>
      <p class="studio-eyebrow">AI Design Practice</p>
      <h1 id="ai-page-title">AI workflows for sharper visual systems and faster creative decisions.</h1>
    </div>
    <div class="ai-hero__body">
      <p>DTDT Studio uses AI as a design research and production layer: exploring visual possibilities, building repeatable workflows, and helping brands create more coherent image systems across product, campaign, and commerce touchpoints.</p>
      <a class="studio-button studio-button--dark" href="{{ '/connect/' | relative_url }}">Discuss AI Work</a>
    </div>
  </div>
</section>

<section class="ai-showcase" aria-label="AI visual system preview">
  <div class="studio-shell ai-showcase__grid">
    <img src="{{ '/assets/images/home-1920-5.jpg' | relative_url }}" alt="AI visual system and design exploration preview" width="1920" height="1080" loading="eager">
    <img src="{{ '/assets/images/home-1920-6.jpg' | relative_url }}" alt="AI-assisted design workflow preview" width="1920" height="1080" loading="lazy">
  </div>
</section>

<section class="studio-section" aria-labelledby="ai-track-title">
  <div class="studio-shell">
    <div class="studio-section__header">
      <p class="studio-eyebrow">Practice Areas</p>
      <h2 id="ai-track-title">Five directions where AI strengthens the design process.</h2>
    </div>

    <div class="ai-track-grid">
      {% for track in page.ai_tracks %}
        <article class="ai-track">
          <span>0{{ forloop.index }}</span>
          <h3>{{ track.title }}</h3>
          <p>{{ track.text }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="studio-section studio-section--ai-method" aria-labelledby="ai-method-title">
  <div class="studio-shell studio-split">
    <div>
      <p class="studio-eyebrow">Method</p>
      <h2 id="ai-method-title">Exploration becomes useful when it is edited into a system.</h2>
    </div>
    <div class="studio-split__body">
      <p>We start with a clear visual hypothesis, generate controlled directions, evaluate outputs against brand and commercial goals, then translate the strongest results into reusable prompts, art direction notes, and production-ready assets.</p>
      <p>The work is intentionally selective. AI expands the field of options; design judgment decides what belongs to the brand.</p>
    </div>
  </div>
</section>

<section class="studio-final-cta" aria-labelledby="ai-final-title">
  <div class="studio-shell">
    <p class="studio-eyebrow">AI Case Study</p>
    <h2 id="ai-final-title">Create a practical AI workflow for your brand visuals.</h2>
    <div class="studio-actions">
      <a class="studio-button studio-button--dark" href="{{ '/connect/' | relative_url }}">Connect</a>
      <a class="studio-button studio-button--light" href="{{ '/case/' | relative_url }}">View Work</a>
    </div>
  </div>
</section>
