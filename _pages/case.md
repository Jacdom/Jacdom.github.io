---
layout: default
page_id: work
title: "Selected Work — DTDT Studio"
description: "Selected ecommerce design, 3D product visualization, AI, motion, brand, web, and physical product design work by DTDT Studio."
permalink: /case/
image: /assets/images/case-e-commerce-1280-1.jpg
---

<header class="editorial-hero editorial-hero--work">
  <div class="studio-shell">
    <p class="studio-eyebrow" data-i18n="work.eyebrow">Selected work / 2024-2026</p>
    <h1 data-i18n="work.title">Commerce, images, and systems made to perform.</h1>
    <p class="editorial-hero__lead" data-i18n="work.lead">Led by ecommerce design and 3D product visualization.</p>
  </div>
</header>

<nav class="work-categories" aria-label="Project categories">
  <div class="studio-shell work-categories__track">
    <a href="{{ '/case/ecommerce/' | relative_url }}"><span>01</span><b data-i18n="services.ecommerce_title">E-commerce Design</b></a>
    <a href="{{ '/case/3d-visualization/' | relative_url }}"><span>02</span><b data-i18n="services.product_title">3D Rendering</b></a>
    <a href="{{ '/ai/' | relative_url }}"><span>03</span><b data-i18n="services.ai_title">AI Creative</b></a>
    <a href="#motion-design"><span>04</span><b data-i18n="services.motion_title">3D Animation &amp; Motion</b></a>
    <a href="#brand-identity"><span>05</span><b data-i18n="services.brand_title">Brand Design</b></a>
    <a href="#web-design"><span>06</span><b data-i18n="services.web_title">Web Design</b></a>
    <a href="{{ '/case/product-design/' | relative_url }}"><span>07</span><b data-i18n="services.product_design_title">Product Design</b></a>
  </div>
</nav>

<section class="project-archive" aria-labelledby="archive-title">
  <div class="studio-shell">
    <h2 class="sr-only" id="archive-title" data-i18n="work.archive">Work archive</h2>
    {% for project in site.data.projects %}
      <article class="archive-project reveal" id="{{ project.id }}">
        <a href="{{ project.href | relative_url }}">
          <figure class="archive-project__media media-frame">
            <img src="{{ project.image | relative_url }}" alt="{{ project.alt }}" width="{{ project.image_width }}" height="{{ project.image_height }}" loading="lazy">
          </figure>
          <div class="archive-project__meta">
            <span>{{ project.number }}</span>
            <h2 data-i18n="{{ project.title_key }}">{{ project.title }}</h2>
            <p><span data-i18n="{{ project.category_key }}">{{ project.category }}</span> / {{ project.year }}</p>
            <small data-i18n="{{ project.description_key }}">{{ project.description }}</small>
          </div>
        </a>
      </article>
    {% endfor %}
  </div>
</section>

<section class="web-lab" id="web-design" aria-labelledby="web-design-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal">
      <div>
        <p class="studio-eyebrow" data-i18n="work.web_label">Web design cases</p>
        <h2 id="web-design-title" data-i18n="work.web_title">Three digital models for brand and commerce.</h2>
      </div>
      <p data-i18n="work.web_lead">Switch the case, compare visual views, and open the design logic behind each system.</p>
    </header>

    <div class="case-switcher" role="tablist" aria-label="Website design cases">
      {% for item in site.data.web_cases %}
        <button class="case-switcher__tab{% if forloop.first %} is-active{% endif %}" type="button" role="tab" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="web-panel-{{ item.id }}" id="web-tab-{{ item.id }}" data-case-tab="{{ item.id }}">
          <span>{{ item.number }}</span><b data-i18n="{{ item.tab_key }}">{{ item.tab }}</b>
        </button>
      {% endfor %}
    </div>

    <div class="case-panels">
      {% for item in site.data.web_cases %}
        <article class="case-panel{% if forloop.first %} is-active{% endif %}" id="web-panel-{{ item.id }}" role="tabpanel" aria-labelledby="web-tab-{{ item.id }}" data-case-panel="{{ item.id }}"{% unless forloop.first %} hidden{% endunless %}>
          <div class="case-panel__visual">
            <div class="case-preview-controls" role="group" aria-label="Preview view">
              <button class="is-active" type="button" aria-pressed="true" data-preview-trigger="overview" data-i18n="common.overview">Overview</button>
              <button type="button" aria-pressed="false" data-preview-trigger="system" data-i18n="common.system">System</button>
            </div>
            <div class="case-preview media-frame">
              <img class="is-active" src="{{ item.overview | relative_url }}" alt="{{ item.alt }}" width="1200" height="760" loading="lazy" data-preview-image="overview">
              <img src="{{ item.system | relative_url }}" alt="{{ item.title }} design system detail" width="1200" height="760" loading="lazy" data-preview-image="system" hidden>
            </div>
          </div>

          <div class="case-panel__copy">
            <p class="studio-eyebrow">Web / {{ item.number }}</p>
            <h3 data-i18n="{{ item.title_key }}">{{ item.title }}</h3>
            <p class="case-panel__subtitle" data-i18n="{{ item.subtitle_key }}">{{ item.subtitle }}</p>
            <button class="case-details-button" type="button" aria-expanded="false" aria-controls="web-details-{{ item.id }}" data-case-details data-label-open-key="common.details" data-label-close-key="common.close_details">
              <span data-i18n="common.details">Case details</span><i aria-hidden="true">+</i>
            </button>
          </div>

          <div class="case-details" id="web-details-{{ item.id }}" hidden>
            <dl>
              <div><dt data-i18n="work.background">Background</dt><dd data-i18n="{{ item.background_key }}">{{ item.background }}</dd></div>
              <div><dt data-i18n="work.objective">Design goal</dt><dd data-i18n="{{ item.objective_key }}">{{ item.objective }}</dd></div>
              <div><dt data-i18n="work.strategy">Strategy</dt><dd data-i18n="{{ item.strategy_key }}">{{ item.strategy }}</dd></div>
              <div><dt data-i18n="work.structure">Page structure</dt><dd data-i18n="{{ item.structure_key }}">{{ item.structure }}</dd></div>
              <div><dt data-i18n="work.visual">Visual system</dt><dd data-i18n="{{ item.visual_key }}">{{ item.visual }}</dd></div>
              <div><dt data-i18n="work.result">Outcome</dt><dd data-i18n="{{ item.result_key }}">{{ item.result }}</dd></div>
            </dl>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="motion-feature" id="motion-showcase" aria-labelledby="motion-title">
  <div class="studio-shell">
    <header class="section-heading reveal">
      <p class="studio-eyebrow" data-i18n="work.legacy_label">Extended practice</p>
      <h2 id="motion-title" data-i18n="work.motion">Product Animation</h2>
    </header>
    <div class="video-frame reveal">
      <iframe src="https://player.bilibili.com/player.html?bvid=BV1VdekzyE52&page=1&autoplay=0" title="DTDT Studio product animation case" loading="lazy" scrolling="no" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</section>
