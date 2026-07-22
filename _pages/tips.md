---
layout: default
page_id: tips
title: "Design Tips — Practical Principles | DTDT Studio"
description: "Practical design principles for ecommerce, visual hierarchy, product imagery, design systems, interaction, accessibility, motion, 3D, and AI."
permalink: /explore/tips/
image: /assets/images/case-e-commerce-1280-1.jpg
---

<header class="knowledge-hero knowledge-hero--tips">
  <div class="studio-shell knowledge-hero__grid">
    <p class="studio-eyebrow" data-i18n="tips.eyebrow">Explore / Tips</p>
    <h1 data-i18n="tips.title">Principles that survive changing tools.</h1>
    <p data-i18n="tips.lead">Eight concise ideas for making commerce, images, interfaces, and creative workflows clearer and more useful.</p>
  </div>
</header>

<section class="principles" aria-labelledby="principles-title">
  <div class="studio-shell">
    <h2 class="sr-only" id="principles-title" data-i18n="tips.list_title">Design principles</h2>
    {% for item in site.data.explore.tips %}
      <article class="principle reveal">
        <header class="principle__meta">
          <span>{{ item.number }}</span>
          <p data-i18n="{{ item.category_key }}">{{ item.category }}</p>
        </header>
        <div class="principle__body">
          <h2 data-i18n="{{ item.title_key }}">{{ item.title }}</h2>
          <p data-i18n="{{ item.summary_key }}">{{ item.summary }}</p>
          <div class="principle__practice">
            <b data-i18n="tips.practice_label">Put it into practice</b>
            <p data-i18n="{{ item.practice_key }}">{{ item.practice }}</p>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="reference-shelf" aria-labelledby="reference-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal">
      <p class="studio-eyebrow" data-i18n="tips.references_label">Reference shelf</p>
      <h2 id="reference-title" data-i18n="tips.references_title">Primary sources worth returning to.</h2>
    </header>
    <div class="reference-list">
      {% for item in site.data.explore.references %}
        <a class="reference-row reveal" href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
          <span>{{ forloop.index | prepend: '0' }}</span>
          <div><small>{{ item.provider }}</small><h3>{{ item.title }}</h3></div>
          <p data-i18n="{{ item.description_key }}">{{ item.description }}</p>
          <i aria-hidden="true">&#8599;</i>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="knowledge-next">
  <div class="studio-shell knowledge-next__grid reveal">
    <p class="studio-eyebrow" data-i18n="tips.next_label">Continue learning</p>
    <h2 data-i18n="tips.next_title">Turn principles into a deliberate study path.</h2>
    <a class="studio-button studio-button--light" href="{{ '/explore/courses/' | relative_url }}" data-i18n="explore.courses_cta">Browse learning resources</a>
  </div>
</section>
