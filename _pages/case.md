---
layout: default
page_id: work
title: "Selected Work — DTDT Studio"
description: "Selected brand design, product visualization, web design, ecommerce, packaging, 3D rendering, and motion work by DTDT Studio."
permalink: /case/
image: /assets/images/case-rendering-1280-4.jpg
---

<header class="editorial-hero editorial-hero--work">
  <div class="studio-shell">
    <p class="studio-eyebrow" data-i18n="work.eyebrow">Selected work / 2024-2026</p>
    <h1 data-i18n="work.title">Systems, images, and experiences made to perform.</h1>
    <p class="editorial-hero__lead" data-i18n="work.lead">A cross-section of brand, commerce, product, web, and motion practice.</p>
  </div>
</header>

<section class="project-archive" aria-labelledby="archive-title">
  <div class="studio-shell">
    <h2 class="sr-only" id="archive-title" data-i18n="work.archive">Work archive</h2>
    {% for project in site.data.projects %}
      <article class="archive-project reveal" id="{{ project.id }}">
        <a href="{% if project.id == 'web-experience' %}#web-design{% else %}#{{ project.id }}{% endif %}">
          <figure class="archive-project__media media-frame">
            <img src="{{ project.image | relative_url }}" alt="{{ project.alt }}" width="1280" height="720" loading="lazy">
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

<section class="motion-feature" aria-labelledby="motion-title">
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
