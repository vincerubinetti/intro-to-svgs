---
layout: default
---

<header>
  <section>
    {% assign header = site.sections | first %}
    {{ header.content }}
  </section>
</header>

<main>
  {% for section in site.sections %}
    {% if forloop.index > 1 and forloop.rindex > 1 %}
      <section>
        {{ section.content }}
      </section>
    {% endif %}
  {% endfor %}
</main>

<footer>
  <section>
    {% assign footer = site.sections | last %}
    {{ footer.content }}
  </section>
</footer>
