---
layout: default
page_id: price
title: "Amazon Image Design Pricing — DTDT Studio"
description: "Amazon main image, gallery, and A+ design packages with clear deliverables, pricing, timelines, and revision rounds."
permalink: /price/
---

<header class="price-hero">
  <div class="studio-shell price-hero__grid">
    <div><p class="studio-eyebrow" data-i18n="price.eyebrow">Amazon image design / Pricing</p><h1 data-i18n="price.title">Amazon image design</h1></div>
    <div class="price-hero__copy"><p data-i18n="price.lead">Main image, gallery images, and A+ content, designed as one coherent product story.</p><a class="price-hero__jump" href="#amazon-pricing"><span data-i18n="price.jump">Explore packages</span><span aria-hidden="true">↓</span></a></div>
  </div>
</header>

<section class="amazon-pricing" id="amazon-pricing" aria-labelledby="amazon-pricing-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal">
      <p class="studio-eyebrow" data-i18n="price.amazon_label">Amazon image design</p>
      <div><h2 id="amazon-pricing-title" data-i18n="price.amazon_title">Main image, gallery, and A+—one product story.</h2><p class="amazon-pricing__intro" data-i18n="price.amazon_intro">Three clear directions for Amazon main images, gallery images, and a complete A+ content set.</p></div>
    </header>
    <div class="amazon-price-cards">
      <article class="amazon-price-card reveal">
        <p class="amazon-price-card__tier">Essential</p><p class="amazon-price-card__name" data-i18n="price.essential">基础版</p>
        <p class="amazon-price-card__amount"><span data-i18n="price.currency">¥</span>2,499</p>
        <p class="amazon-price-card__promise" data-i18n="price.essential_desc">满足基础要求</p>
      </article>
      <article class="amazon-price-card amazon-price-card--featured reveal">
        <p class="amazon-price-card__tier">Professional</p><p class="amazon-price-card__name" data-i18n="price.professional">专业版</p>
        <p class="amazon-price-card__amount"><span data-i18n="price.currency">¥</span>5,280</p>
        <p class="amazon-price-card__promise" data-i18n="price.professional_desc">注重视觉竞争力与产品转化表现</p>
      </article>
      <article class="amazon-price-card reveal">
        <p class="amazon-price-card__tier">Premium</p><p class="amazon-price-card__name" data-i18n="price.premium">高级版</p>
        <p class="amazon-price-card__amount"><span data-i18n="price.currency">¥</span>11,800</p>
        <p class="amazon-price-card__promise" data-i18n="price.premium_desc">差异化创意与高品质视觉</p>
      </article>
    </div>
    <a class="amazon-pricing__cta" href="{{ '/price/amazon-image-design/' | relative_url }}"><span data-i18n="price.details_cta">查看完整套餐与服务明细</span><span aria-hidden="true">→</span></a>
    <p class="amazon-pricing__note" data-i18n="price.pricing_note">套餐按单个 ASIN 计价。咨询时可附 ASIN、目标市场、产品卖点、现有素材与期望排期，便于讨论合适的服务范围。</p>
  </div>
</section>

<section class="price-priority" aria-labelledby="price-priority-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal"><p class="studio-eyebrow" data-i18n="price.priority_label">Core project scopes</p><h2 id="price-priority-title" data-i18n="price.priority_title">Define the commercial problem before defining the deliverables.</h2></header>
    <div class="price-scope-list">
      <article class="reveal"><span>01</span><h3 data-i18n="services.ecommerce_title">E-commerce Design</h3><p data-i18n="price.scope_ecommerce">Quoted around platform, SKU count, content depth, rendering needs, and market adaptation.</p><b data-i18n="price.custom_scope">Custom scope</b></article>
      <article class="reveal"><span>02</span><h3 data-i18n="services.product_title">3D Rendering</h3><p data-i18n="price.scope_rendering">Quoted around model readiness, material complexity, scene count, resolution, and applications.</p><b data-i18n="price.custom_scope">Custom scope</b></article>
      <article class="reveal"><span>03</span><h3 data-i18n="services.product_design_title">Product Design</h3><p data-i18n="price.scope_product">Quoted around concept depth, form development, CMF, interaction, structure, and prototype requirements.</p><b data-i18n="price.custom_scope">Custom scope</b></article>
    </div>
  </div>
</section>

<section class="price-baseline" aria-labelledby="price-baseline-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal"><p class="studio-eyebrow" data-i18n="price.baseline_label">Other services</p><h2 id="price-baseline-title" data-i18n="price.baseline_title">Starting prices for additional studio services.</h2></header>
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
