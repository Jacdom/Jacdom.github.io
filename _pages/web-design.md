---
layout: default
title: "Web Design"
permalink: /web-design/
web_cases:
  - id: brand
    tab_key: web.tab_brand
    tab: Premium Brand Website
    title_key: web.case_brand_title
    title: Premium Brand Website
    text_key: web.case_brand_text
    text: A restrained brand website structure with a cinematic first screen, story-led sections, editorial typography, and clear consultation CTAs.
    image: /assets/images/visual-web-brand.svg
    alt: Premium brand website mockup
    points:
      - Brand hero
      - Visual system
      - Brand story
      - Editorial typography
      - CTA structure
  - id: ecommerce
    tab_key: web.tab_ecommerce
    tab: DTC Ecommerce Website
    title_key: web.case_ecommerce_title
    title: DTC Ecommerce Website
    text_key: web.case_ecommerce_text
    text: A conversion-led product journey with benefit blocks, scene modules, reviews, sticky purchase intent, and an easy path to checkout.
    image: /assets/images/visual-web-ecommerce.svg
    alt: DTC ecommerce website mockup
    points:
      - Product hero
      - Benefit modules
      - Lifestyle sections
      - Review proof
      - Purchase path
  - id: amazon
    tab_key: web.tab_amazon
    tab: Amazon Storefront Homepage
    title_key: web.case_amazon_title
    title: Amazon Storefront Homepage
    text_key: web.case_amazon_text
    text: A marketplace-ready storefront homepage with category navigation, hero promotion, product zones, lifestyle storytelling, and brand trust modules.
    image: /assets/images/visual-web-amazon.svg
    alt: Amazon storefront homepage mockup
    points:
      - Storefront hero
      - Category navigation
      - Featured products
      - Scenario modules
      - Promotion zone
---

<section class="web-hero" aria-labelledby="web-page-title">
  <div class="studio-shell studio-split">
    <div>
      <p class="studio-eyebrow">Website Design / Digital Experience</p>
      <h1 id="web-page-title" data-i18n="web.title">Website design for premium brands, commerce teams, and AI-assisted launches.</h1>
    </div>
    <div class="studio-split__body">
      <p data-i18n="web.lead">We design digital experiences that make a brand easier to understand, easier to trust, and easier to buy from.</p>
      <a class="studio-button studio-button--dark" href="{{ '/connect/' | relative_url }}" data-i18n="web.start">Start A Website Project</a>
    </div>
  </div>
</section>

<section class="web-visual-band" aria-label="Website design visual system">
  <div class="studio-shell visual-frame visual-frame--wide">
    <img class="media-contain" src="{{ '/assets/images/visual-web-brand.svg' | relative_url }}" alt="Premium website design visual system" width="1200" height="760" loading="eager">
  </div>
</section>

<section class="studio-section studio-section--web-service" aria-labelledby="web-service-title">
  <div class="studio-shell studio-split">
    <div>
      <p class="studio-eyebrow">Service</p>
      <h2 id="web-service-title" data-i18n="web.services_title">Designed for brand clarity and commercial movement.</h2>
    </div>
    <div class="studio-split__body">
      <p data-i18n="web.services_text">Every page is treated as a visual system: message hierarchy, responsive structure, product proof, and conversion paths are planned together.</p>
      <div class="web-service-list" aria-label="Website design services">
        <span>Brand Website</span>
        <span>DTC Ecommerce</span>
        <span>Amazon Storefront</span>
        <span>AI-assisted Web Design</span>
        <span>Conversion Page</span>
        <span>Visual System</span>
      </div>
    </div>
  </div>
</section>

<section class="studio-section web-case-section" aria-labelledby="web-case-title">
  <div class="studio-shell">
    <div class="studio-section__header">
      <p class="studio-eyebrow" data-i18n="web.cases">Interactive Cases</p>
      <h2 id="web-case-title" data-i18n="web.cases_title">Three web design directions, one coherent design standard.</h2>
    </div>

    <div class="web-case-tabs" role="tablist" aria-label="Website design cases">
      {% for item in page.web_cases %}
        <button class="web-case-tab{% if forloop.first %} is-active{% endif %}" type="button" role="tab" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="web-panel-{{ item.id }}" id="web-tab-{{ item.id }}" data-case-tab="{{ item.id }}" data-i18n="{{ item.tab_key }}">
          {{ item.tab }}
        </button>
      {% endfor %}
    </div>

    <div class="web-case-panels">
      {% for item in page.web_cases %}
        <article class="web-case-panel{% if forloop.first %} is-active{% endif %}" id="web-panel-{{ item.id }}" role="tabpanel" aria-labelledby="web-tab-{{ item.id }}" data-case-panel="{{ item.id }}" {% unless forloop.first %}hidden{% endunless %}>
          <div class="mockup-frame case-preview">
            <img class="media-contain" src="{{ item.image | relative_url }}" alt="{{ item.alt }}" width="1200" height="760" loading="lazy">
          </div>
          <div class="web-case-copy">
            <p class="studio-eyebrow">Case 0{{ forloop.index }}</p>
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

<section class="studio-final-cta" aria-labelledby="web-final-title">
  <div class="studio-shell">
    <p class="studio-eyebrow">Website System</p>
    <h2 id="web-final-title" data-i18n="web.final_title">Plan a website system that can carry your next campaign.</h2>
    <div class="studio-actions">
      <a class="studio-button studio-button--dark" href="{{ '/connect/' | relative_url }}" data-i18n="nav.connect">Connect</a>
      <a class="studio-button studio-button--light" href="{{ '/case/' | relative_url }}" data-i18n="home.view_work">View Work</a>
    </div>
  </div>
</section>
