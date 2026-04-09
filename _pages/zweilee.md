---
title: "Zweilee"
permalink: /zweilee/
layout: single
author_profile: false
---

<h2>Private page</h2>
<p>Please enter the password. 비밀번호를 입력하세요</p>

<input type="password" id="pw" placeholder="Password" />
<button type="button" onclick="checkPassword()">Enter</button>

<p id="error" style="color:red;"></p>

<div id="secret-content" style="display:none; margin-top:20px;">
  <h3>Hello friends 👋</h3>
  <p>This page is shared privately.</p>
</div>

<script>
function checkPassword() {
  const correct = "2606";
  const entered = document.getElementById("pw").value;
  const content = document.getElementById("secret-content");
  const error = document.getElementById("error");

  if (entered === correct) {
    content.style.display = "block";
    error.textContent = "";
  } else {
    content.style.display = "none";
    error.textContent = "Wrong password.";
  }
}
</script>
