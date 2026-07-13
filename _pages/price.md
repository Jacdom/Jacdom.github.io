---
layout: default
page_id: price
title: "Price & Project Scope — DTDT Studio"
description: "DTDT Studio pricing starting points for 3D rendering, page design, animation, identity, modeling, photography, and retouching, plus custom project scoping."
permalink: /price/
---

<header class="price-hero">
  <div class="studio-shell price-hero__grid">
    <div><p class="studio-eyebrow" data-i18n="price.eyebrow">Price / Project scope</p><h1 data-i18n="price.title">Clear starting points. Scope shaped around the real work.</h1></div>
    <p data-i18n="price.lead">Ecommerce systems and physical product design are quoted by project. Production services retain the published starting prices from the original DTDT pricing page.</p>
  </div>
</header>

<section class="price-priority" aria-labelledby="price-priority-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal"><p class="studio-eyebrow" data-i18n="price.priority_label">Core project scopes</p><h2 id="price-priority-title" data-i18n="price.priority_title">Define the commercial problem before defining the deliverables.</h2></header>
    <div class="price-scope-list">
      <article class="reveal"><span>01</span><h3 data-i18n="services.ecommerce_title">E-commerce Design</h3><p data-i18n="price.scope_ecommerce">Quoted around platform, SKU count, content depth, rendering needs, and market adaptation.</p><b data-i18n="price.custom_scope">Custom scope</b></article>
      <article class="reveal"><span>02</span><h3 data-i18n="services.product_design_title">Product Design</h3><p data-i18n="price.scope_product">Quoted around concept depth, form development, CMF, interaction, structure, and prototype requirements.</p><b data-i18n="price.custom_scope">Custom scope</b></article>
      <article class="reveal"><span>03</span><h3 data-i18n="services.product_title">3D Rendering</h3><p data-i18n="price.scope_rendering">Quoted around model readiness, material complexity, scene count, resolution, and applications.</p><b data-i18n="price.custom_scope">Custom scope</b></article>
    </div>
  </div>
</section>

<section class="price-baseline" aria-labelledby="price-baseline-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal"><p class="studio-eyebrow" data-i18n="price.baseline_label">Published starting prices</p><h2 id="price-baseline-title" data-i18n="price.baseline_title">Execution baselines retained from the original Price page.</h2></header>
    <div class="price-table reveal" role="table" aria-label="Service pricing starting points">
      <div class="price-table__head" role="row"><span role="columnheader" data-i18n="price.column_service">Service</span><span role="columnheader" data-i18n="price.column_basic">Basic from</span><span role="columnheader" data-i18n="price.column_custom">Custom from</span></div>
      {% for item in site.data.pricing %}
        <div class="price-table__row" role="row"><strong role="cell" data-i18n="{{ item.service_key }}">{{ item.service }}</strong><span role="cell"><small data-i18n="price.column_basic">Basic from</small>{{ item.basic }}</span><span role="cell"><small data-i18n="price.column_custom">Custom from</small>{{ item.custom }}</span></div>
      {% endfor %}
    </div>
    <p class="price-baseline__note" data-i18n="price.note">Starting prices are directional, not automatic quotes. Final cost depends on scope, source quality, revisions, licensing, timing, and delivery format.</p>
  </div>
</section>

<section class="price-process" aria-labelledby="price-process-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal"><p class="studio-eyebrow" data-i18n="price.process_label">How pricing works</p><h2 id="price-process-title" data-i18n="price.process_title">A short path from context to confirmed scope.</h2></header>
    <ol class="iteration-timeline">
      <li class="reveal"><span>01</span><div><h3 data-i18n="price.process_1_title">Share context</h3><p data-i18n="price.process_1_text">Product, audience, platform, timing, available assets, and desired outcome.</p></div></li>
      <li class="reveal"><span>02</span><div><h3 data-i18n="price.process_2_title">Shape the scope</h3><p data-i18n="price.process_2_text">Clarify priorities, outputs, dependencies, review rounds, and production route.</p></div></li>
      <li class="reveal"><span>03</span><div><h3 data-i18n="price.process_3_title">Confirm before work</h3><p data-i18n="price.process_3_text">Agree on deliverables, schedule, fee, and handoff before production begins.</p></div></li>
    </ol>
  </div>
</section>

<section class="closing-statement">
  <div class="studio-shell reveal"><p class="studio-eyebrow" data-i18n="price.final_label">Project enquiry</p><h2 data-i18n="price.final_title">Bring the context. We will define the right scope.</h2><a class="studio-button studio-button--light" href="{{ '/connect/' | relative_url }}" data-i18n="common.start_project">Start a project</a></div>
</section>
