---
layout: default
page_id: ai
title: "AI Creative Lab — DTDT Studio"
description: "Applied AI visual exploration, prompt research, assisted design, creative automation, and AI design systems by DTDT Studio."
permalink: /ai/
image: /assets/images/visual-ai-system.svg
---

<header class="editorial-hero ai-lab-hero">
  <div class="studio-shell ai-lab-hero__grid">
    <div>
      <p class="studio-eyebrow" data-i18n="ai.eyebrow">AI Creative Lab / Applied research</p>
      <h1 data-i18n="ai.title">AI expands the field. Direction defines the result.</h1>
      <p class="editorial-hero__lead" data-i18n="ai.lead">A working practice for visual exploration, prompt research, and creative automation.</p>
      <a class="studio-button studio-button--ink" href="{{ '/connect/' | relative_url }}" data-i18n="common.start_project">Start a project</a>
    </div>
    <figure class="ai-lab-hero__visual media-frame reveal">
      <img src="{{ '/assets/images/ai/lab-workflow.svg' | relative_url }}" alt="AI creative workflow from visual hypothesis to production system" width="1200" height="900" loading="eager">
    </figure>
  </div>
</header>

<section class="studio-section ai-framework" aria-labelledby="ai-framework-title">
  <div class="studio-shell feature-band__grid">
    <figure class="media-frame reveal">
      <img src="{{ '/assets/images/visual-ai-system.svg' | relative_url }}" alt="AI visual system exploration interface" width="1200" height="760" loading="lazy">
    </figure>
    <div class="feature-band__copy reveal">
      <p class="studio-eyebrow" data-i18n="ai.framework_label">Creative operating layer</p>
      <h2 id="ai-framework-title" data-i18n="ai.framework_title">From experiment to repeatable design intelligence.</h2>
      <p data-i18n="ai.framework_text">We define the visual hypothesis, generate controlled territories, edit against brand goals, and turn the strongest logic into reusable production tools.</p>
    </div>
  </div>
</section>

<section class="studio-section ai-practice" aria-labelledby="ai-practice-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal">
      <p class="studio-eyebrow" data-i18n="ai.practice_label">Lab directions</p>
      <h2 id="ai-practice-title" data-i18n="ai.practice_title">Five practical ways AI strengthens creative work.</h2>
    </header>
    <div class="service-list service-list--dark">
      {% for track in site.data.ai_tracks %}
        <article class="service-row reveal">
          <span>{{ track.number }}</span>
          <h3 data-i18n="{{ track.title_key }}">{{ track.title }}</h3>
          <p data-i18n="{{ track.text_key }}">{{ track.text }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="studio-section studio-belief ai-method" aria-labelledby="ai-method-title">
  <div class="studio-shell studio-belief__grid reveal">
    <p class="studio-eyebrow" data-i18n="ai.method_label">Method</p>
    <h2 id="ai-method-title" data-i18n="ai.method_title">Hypothesis. Explore. Edit. Systemize.</h2>
    <div>
      <p data-i18n="ai.method_text">AI creates range. We create relevance, consistency, and production value.</p>
      <a class="studio-text-link" href="{{ '/connect/' | relative_url }}" data-i18n="common.start_project">Start a project</a>
    </div>
  </div>
</section>

<section class="closing-statement">
  <div class="studio-shell reveal">
    <p class="studio-eyebrow">AI / Creative / Production</p>
    <h2 data-i18n="ai.final_title">Build an AI workflow your brand can actually use.</h2>
    <a class="studio-button studio-button--light" href="{{ '/connect/' | relative_url }}" data-i18n="nav.connect">Connect</a>
  </div>
</section>
