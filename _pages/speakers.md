---
layout: single
title: "Speaker Directory"
permalink: /adrw/speakers/
author_profile: false
---

{% assign speakers = site.data.speakers | sort %}
{% assign current_letter = "" %}

<div class="speaker-directory">

{% for item in speakers %}

  {% assign speaker_id = item[0] %}
  {% assign speaker = item[1] %}
  {% assign first_letter = speaker.name | slice: 0, 1 | upcase %}

  {% if first_letter != current_letter %}
    {% assign current_letter = first_letter %}
    <h2 id="{{ current_letter }}">{{ current_letter }}</h2>
  {% endif %}

  <div class="speaker-entry">
    <a href="#"
       class="speaker-link"
       data-speaker-id="{{ speaker_id }}">
      {{ speaker.name }}
    </a>
  </div>

{% endfor %}

</div>

{% include speaker-modal.html %}

<script src="{{ '/assets/js/speakers.js' | relative_url }}"></script>
