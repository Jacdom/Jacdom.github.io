---
layout: default
title: Case
permalink: /case/
web_cases:
  - id: brand
    tab_key: web.tab_brand
    tab: Premium Brand Website
    title_key: web.case_brand_title
    title: Premium Brand Website
    text_key: web.case_brand_text
    text: Premium brand website with strong first screen, story, typography, and CTA.
    image: /assets/images/visual-web-brand.svg
    alt: Premium brand website mockup
    points:
      - Brand hero
      - Visual system
      - Brand story
      - CTA structure
  - id: ecommerce
    tab_key: web.tab_ecommerce
    tab: DTC Ecommerce Website
    title_key: web.case_ecommerce_title
    title: DTC Ecommerce Website
    text_key: web.case_ecommerce_text
    text: Product journey with benefit blocks, scene modules, reviews, and purchase path.
    image: /assets/images/visual-web-ecommerce.svg
    alt: DTC ecommerce website mockup
    points:
      - Product hero
      - Benefit modules
      - Reviews
      - Purchase path
  - id: amazon
    tab_key: web.tab_amazon
    tab: Amazon Storefront Homepage
    title_key: web.case_amazon_title
    title: Amazon Storefront Homepage
    text_key: web.case_amazon_text
    text: Storefront homepage with category navigation, hero promotion, products, and brand story.
    image: /assets/images/visual-web-amazon.svg
    alt: Amazon storefront homepage mockup
    points:
      - Storefront hero
      - Category navigation
      - Featured products
      - Promotion zone
---

<section class="case-hero" aria-labelledby="case-page-title">
  <div class="studio-shell">
    <p class="studio-eyebrow">Selected Work</p>
    <h1 id="case-page-title">Case studies across web, brand, commerce, and product visuals.</h1>
  </div>
</section>

<section class="studio-section web-case-section" id="web-design" aria-labelledby="web-case-title">
  <div class="studio-shell">
    <div class="studio-section__header">
      <p class="studio-eyebrow" data-i18n="web.cases">Web Design</p>
      <h2 id="web-case-title" data-i18n="web.cases_title">Three website directions for brand and commerce.</h2>
    </div>

    <div class="web-case-tabs" role="tablist" aria-label="Website design cases">
      {% for item in page.web_cases %}
        <button class="web-case-tab{% if forloop.first %} is-active{% endif %}" type="button" role="tab" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="case-web-panel-{{ item.id }}" id="case-web-tab-{{ item.id }}" data-case-tab="{{ item.id }}" data-i18n="{{ item.tab_key }}">
          {{ item.tab }}
        </button>
      {% endfor %}
    </div>

    <div class="web-case-panels">
      {% for item in page.web_cases %}
        <article class="web-case-panel{% if forloop.first %} is-active{% endif %}" id="case-web-panel-{{ item.id }}" role="tabpanel" aria-labelledby="case-web-tab-{{ item.id }}" data-case-panel="{{ item.id }}" {% unless forloop.first %}hidden{% endunless %}>
          <div class="mockup-frame case-preview">
            <img class="media-contain" src="{{ item.image | relative_url }}" alt="{{ item.alt }}" width="1200" height="760" loading="lazy">
          </div>
          <div class="web-case-copy">
            <p class="studio-eyebrow">Web 0{{ forloop.index }}</p>
            <h3 data-i18n="{{ item.title_key }}">{{ item.title }}</h3>
            <p data-i18n="{{ item.text_key }}">{{ item.text }}</p>
            <ul>
              {% for point in item.points %}
                <li>{{ point }}</li>
              {% endfor %}
            </ul>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="case-section" aria-label="Selected design cases">
  <div class="case-block">
    <h2 class="case-title">E-commerce Design</h2>
    <div class="case-img">
      <img src="{{ '/assets/images/case-e-commerce-1280-1.jpg' | relative_url }}" alt="E-commerce design case" width="1280" height="720">
    </div>
  </div>

  <div class="case-block">
    <h2 class="case-title">Packaging Design</h2>
    <div class="case-img">
      <img src="{{ '/assets/images/case-Package-1280-2.jpg' | relative_url }}" alt="Packaging design case" width="1280" height="720">
    </div>
  </div>

  <div class="case-block">
    <h2 class="case-title">Brand Identity</h2>
    <div class="case-img">
      <img src="{{ '/assets/images/case-VI-1280-3.jpg' | relative_url }}" alt="Brand identity case" width="1280" height="720">
    </div>
  </div>

  <div class="case-block">
    <h2 class="case-title">3D Rendering</h2>
    <div class="case-img">
      <img src="{{ '/assets/images/case-rendering-1280-4.jpg' | relative_url }}" alt="3D rendering case" width="1280" height="720">
    </div>
  </div>

  <div class="case-block">
    <h2 class="case-title">Product Animation</h2>
    <div class="case-img">
      <iframe src="https://player.bilibili.com/player.html?bvid=BV1VdekzyE52&page=1&autoplay=0"
        title="Product animation case"
        scrolling="no"
        frameborder="no"
        allowfullscreen="true"
        width="1280"
        height="720">
      </iframe>
    </div>
  </div>
</section>
