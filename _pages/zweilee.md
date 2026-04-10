---
title: "Zweilee"
permalink: /zweilee/
layout: single
author_profile: false
published: true
---

<div id="login-box">

<h2>Private page</h2>
<p>Please enter the password. 비밀번호를 입력하세요</p>

<input type="password" id="pw" placeholder="Password" />
<button type="button" onclick="checkPassword()">Enter</button>

<p id="error" style="color:red;"></p>

</div>

<div id="secret-content" style="display:none; margin-top:20px;">

## 🗓 Event Overview

**Date:** 15 May 2026  
**Time:** 10:00–14:00  
**Location:** Leipzig  

This workshop focuses on creative poster-making as a tool for empowerment and expression.

---

## 📋 Programme

| Time        | Session                          |
|------------|---------------------------------|
| 10:00–10:15 | Welcome & introduction          |
| 10:15–11:00 | Talk: Visual storytelling       |
| 11:00–12:30 | Poster workshop (hands-on)      |
| 12:30–13:00 | Break                           |
| 13:00–14:00 | Presentation & discussion       |

---

## 📝 Registration

[Register here](https://your-link.com)

---

## ❓ FAQ

<details>
<summary><strong>Do I need prior experience?</strong></summary>

No, the workshop is open to all levels.

</details>

<details>
<summary><strong>Do I need to bring materials?</strong></summary>

Basic materials will be provided.

</details>

<details>
<summary><strong>Is the workshop free?</strong></summary>

Yes.

</details>

---

## 📩 Contact

hyunjung.lee@uni-leipzig.de

</div>

<script>
function checkPassword() {
  const correct = "2606";
  const entered = document.getElementById("pw").value;

  const loginBox = document.getElementById("login-box");
  const content = document.getElementById("secret-content");
  const error = document.getElementById("error");

  if (entered === correct) {
    loginBox.style.display = "none";   // 🔥 hide password box
    content.style.display = "block";   // 🔥 show content
    error.textContent = "";
  } else {
    error.textContent = "Wrong password.";
  }
}
</script>
