---
title: "Hello"
permalink: /zweilee/
layout: single
author_profile: false
---

## Private page

Please enter the password.

<input type="password" id="pw" placeholder="Password">
<button onclick="checkPassword()">Enter</button>

<p id="error" style="color:red;"></p>

<div id="secret-content" style="display:none; margin-top:20px;">

### Hello friends 👋

This page is shared privately.

You can place here:

- photos
- travel plans
- private notes
- links
- PDFs

</div>

<script>
function checkPassword() {

  const correct = "HyunjungMarkus";   // change this
  const entered = document.getElementById("pw").value;

  if (entered === correct) {
      document.getElementById("secret-content").style.display = "block";
      document.getElementById("error").innerText = "";
  } else {
      document.getElementById("error").innerText = "Wrong password.";
  }

}
</script>
