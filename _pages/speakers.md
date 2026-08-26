---
layout: single
title: "Speaker Directory"
permalink: /speakers/
---

{% assign speakers = site.data.speakers | sort: "name" %}
{% assign current_letter = "" %}

<div class="speaker-directory">

{% for speaker in speakers %}

  {% assign first_letter = speaker.name | slice: 0 | upcase %}

  {% if first_letter != current_letter %}
    {% assign current_letter = first_letter %}
    <h2 id="{{ current_letter }}">{{ current_letter }}</h2>
  {% endif %}

  <div class="speaker-entry">
    <a href="#" class="speaker-link" data-speaker="{{ speaker.id }}">
      {{ speaker.name }}
    </a>
  </div>

{% endfor %}

</div>
