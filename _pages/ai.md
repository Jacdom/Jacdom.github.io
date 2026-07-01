---
layout: default
title: "AI Design"
permalink: /ai/
ai_tracks:
  - title: "AI Visual Exploration"
    title_key: ai.track_visual_title
    text: "Rapid image territories, mood systems, campaign directions, and controlled visual research before production begins."
    text_key: ai.track_visual_text
  - title: "AI Workflow"
    title_key: ai.track_workflow_title
    text: "Repeatable prompt structures, review loops, image selection standards, and production handoff for faster creative delivery."
    text_key: ai.track_workflow_text
  - title: "AI-assisted Product Rendering"
    title_key: ai.track_render_title
    text: "Concept rendering, scene variation, material direction, and product storytelling supported by human art direction."
    text_key: ai.track_render_text
  - title: "Creative Automation"
    title_key: ai.track_auto_title
    text: "Batch ideation, content variants, visual QA routines, and lightweight automation for recurring design tasks."
    text_key: ai.track_auto_text
  - title: "Design System + AI"
    title_key: ai.track_system_title
    text: "Brand rules, visual tokens, prompt libraries, and asset generation logic aligned into one coherent operating system."
    text_key: ai.track_system_text
---

<section class="ai-hero" aria-labelledby="ai-page-title">
  <div class="studio-shell ai-hero__grid">
    <div>
      <p class="studio-eyebrow">AI Design Practice</p>
      <h1 id="ai-page-title" data-i18n="ai.title">AI workflows for sharper visual systems and faster creative decisions.</h1>
    </div>
    <div class="ai-hero__body">
      <p data-i18n="ai.body">DTDT Studio uses AI as a design research and production layer: exploring visual possibilities, building repeatable workflows, and helping brands create more coherent image systems across product, campaign, and commerce touchpoints.</p>
      <a class="studio-button studio-button--dark" href="{{ '/connect/' | relative_url }}" data-i18n="ai.cta">Discuss AI Work</a>
    </div>
  </div>
</section>

<section class="ai-showcase" aria-label="AI visual system preview">
  <div class="studio-shell ai-showcase__grid">
    <div class="visual-frame visual-frame--wide">
      <img class="media-contain" src="{{ '/assets/images/visual-ai-system.svg' | relative_url }}" alt="AI visual system and design exploration preview" width="1200" height="760" loading="eager">
    </div>
    <div class="visual-frame visual-frame--wide">
      <img class="media-contain" src="{{ '/assets/images/home-1920-6.jpg' | relative_url }}" alt="AI-assisted design workflow preview" width="1920" height="1080" loading="lazy">
    </div>
  </div>
</section>

<section class="studio-section" aria-labelledby="ai-track-title">
  <div class="studio-shell">
    <div class="studio-section__header">
      <p class="studio-eyebrow" data-i18n="ai.practice">Practice Areas</p>
      <h2 id="ai-track-title" data-i18n="ai.practice_title">Five directions where AI strengthens the design process.</h2>
    </div>

    <div class="ai-track-grid">
      {% for track in page.ai_tracks %}
        <article class="ai-track">
          <span>0{{ forloop.index }}</span>
          <h3 data-i18n="{{ track.title_key }}">{{ track.title }}</h3>
          <p data-i18n="{{ track.text_key }}">{{ track.text }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="studio-section studio-section--ai-method" aria-labelledby="ai-method-title">
  <div class="studio-shell studio-split">
    <div>
      <p class="studio-eyebrow" data-i18n="ai.method">Method</p>
      <h2 id="ai-method-title" data-i18n="ai.method_title">Exploration becomes useful when it is edited into a system.</h2>
    </div>
    <div class="studio-split__body">
      <p data-i18n="ai.method_text_1">We start with a clear visual hypothesis, generate controlled directions, evaluate outputs against brand and commercial goals, then translate the strongest results into reusable prompts, art direction notes, and production-ready assets.</p>
      <p data-i18n="ai.method_text_2">The work is intentionally selective. AI expands the field of options; design judgment decides what belongs to the brand.</p>
    </div>
  </div>
</section>

<section class="studio-final-cta" aria-labelledby="ai-final-title">
  <div class="studio-shell">
    <p class="studio-eyebrow">AI Case Study</p>
    <h2 id="ai-final-title">Create a practical AI workflow for your brand visuals.</h2>
    <div class="studio-actions">
      <a class="studio-button studio-button--dark" href="{{ '/connect/' | relative_url }}" data-i18n="nav.connect">Connect</a>
      <a class="studio-button studio-button--light" href="{{ '/case/' | relative_url }}" data-i18n="home.view_work">View Work</a>
    </div>
  </div>
</section>
