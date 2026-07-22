---
layout: default
page_id: courses
title: "Design Courses & Learning Resources | DTDT Studio"
description: "Curated official courses and learning resources for ecommerce, Amazon Storefronts, Figma, UX, web design, 3D, motion, and accessibility."
permalink: /explore/courses/
image: /assets/images/case-rendering-1280-4.jpg
---

<header class="knowledge-hero knowledge-hero--courses">
  <div class="studio-shell knowledge-hero__grid">
    <p class="studio-eyebrow" data-i18n="courses.eyebrow">Explore / Courses</p>
    <h1 data-i18n="courses.title">A learning shelf with a reason for every link.</h1>
    <p data-i18n="courses.lead">Official platforms and practical references, ordered from commerce fundamentals to specialist craft.</p>
  </div>
</header>

<section class="learning-paths" aria-labelledby="learning-paths-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal">
      <p class="studio-eyebrow" data-i18n="courses.paths_label">Suggested paths</p>
      <h2 id="learning-paths-title" data-i18n="courses.paths_title">Choose the sequence that matches the work.</h2>
    </header>
    <div class="learning-paths__grid reveal">
      <article><span>01</span><h3 data-i18n="courses.path_commerce_title">Commerce &amp; conversion</h3><p data-i18n="courses.path_commerce_text">Shopify Academy → Amazon Brand Stores → accessibility reference.</p></article>
      <article><span>02</span><h3 data-i18n="courses.path_digital_title">Interface &amp; web</h3><p data-i18n="courses.path_digital_text">Figma foundations → Google UX process → Webflow implementation.</p></article>
      <article><span>03</span><h3 data-i18n="courses.path_craft_title">3D &amp; motion craft</h3><p data-i18n="courses.path_craft_text">Blender production training → After Effects motion and compositing.</p></article>
    </div>
  </div>
</section>

<section class="course-library" aria-labelledby="course-library-title">
  <div class="studio-shell">
    <header class="section-heading section-heading--split reveal">
      <p class="studio-eyebrow" data-i18n="courses.library_label">Curated library</p>
      <h2 id="course-library-title" data-i18n="courses.library_title">Eight resources from official publishers.</h2>
    </header>

    <div class="course-list">
      {% for item in site.data.explore.courses %}
        <article class="course-row reveal">
          <span>{{ item.number }}</span>
          <div class="course-row__title"><small>{{ item.provider }}</small><h3>{{ item.title }}</h3></div>
          <p data-i18n="{{ item.description_key }}">{{ item.description }}</p>
          <div class="course-row__meta"><b data-i18n="{{ item.focus_key }}">{{ item.focus }}</b><small data-i18n="{{ item.meta_key }}">{{ item.meta }}</small></div>
          <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer"><span class="sr-only">{{ item.title }}: </span><span data-i18n="courses.open_resource">Open resource</span><i aria-hidden="true">&#8599;</i></a>
        </article>
      {% endfor %}
    </div>
    <p class="course-library__note" data-i18n="courses.note">External availability, pricing, and course structure may change. Check the publisher before enrolling.</p>
  </div>
</section>

<section class="knowledge-next knowledge-next--purple">
  <div class="studio-shell knowledge-next__grid reveal">
    <p class="studio-eyebrow" data-i18n="courses.next_label">Before the course</p>
    <h2 data-i18n="courses.next_title">Start with a real design question, then choose the resource.</h2>
    <a class="studio-button studio-button--light" href="{{ '/explore/tips/' | relative_url }}" data-i18n="explore.tips_cta">Read design tips</a>
  </div>
</section>
