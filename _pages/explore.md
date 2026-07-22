---
layout: default
page_id: explore
title: "Explore — Work, Design Tips & Courses | DTDT Studio"
description: "Explore selected DTDT Studio work, practical design principles, and curated learning resources for ecommerce, 3D, motion, brand, AI, and web design."
permalink: /explore/
image: /assets/images/home-1920-5.jpg
---

<header class="explore-hero">
  <div class="studio-shell explore-hero__copy">
    <p class="studio-eyebrow" data-i18n="explore.eyebrow">Explore / Studio index</p>
    <h1 data-i18n="explore.title">Work to study. Principles to reuse. Courses to continue.</h1>
    <p data-i18n="explore.lead">A focused index of DTDT projects, working knowledge, and trusted places to learn.</p>
  </div>
  <figure class="explore-hero__visual">
    <img src="{{ '/assets/images/home-1920-5.jpg' | relative_url }}" alt="DTDT ecommerce and product visual design collection" width="1920" height="540" loading="eager">
  </figure>
</header>

<section class="explore-directory" aria-labelledby="explore-directory-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal">
      <p class="studio-eyebrow" data-i18n="explore.directory_label">Three ways in</p>
      <h2 id="explore-directory-title" data-i18n="explore.directory_title">Browse outcomes, methods, or structured learning.</h2>
    </header>

    <div class="explore-directory__list">
      {% for item in site.data.explore.tracks %}
        <article class="explore-track explore-track--{{ item.id }} reveal">
          <a href="{{ item.href | relative_url }}">
            <div class="explore-track__copy">
              <span>{{ item.number }}</span>
              <div>
                <h2 data-i18n="{{ item.title_key }}">{{ item.title }}</h2>
                <p data-i18n="{{ item.description_key }}">{{ item.description }}</p>
                <b data-i18n="{{ item.cta_key }}">{{ item.cta }}</b>
              </div>
            </div>
            <figure class="explore-track__media">
              <img src="{{ item.image | relative_url }}" alt="{{ item.alt }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy">
            </figure>
          </a>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="explore-closing">
  <div class="studio-shell explore-closing__grid reveal">
    <p class="studio-eyebrow" data-i18n="explore.closing_label">A practical loop</p>
    <h2 data-i18n="explore.closing_title">Observe the work. Name the principle. Test it in practice.</h2>
    <a class="studio-button studio-button--light" href="{{ '/case/' | relative_url }}" data-i18n="explore.work_cta">View selected work</a>
  </div>
</section>
