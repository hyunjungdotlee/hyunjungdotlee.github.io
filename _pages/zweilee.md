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

Please register via this link:

[Register here](https://your-link.com)

---

## ❓ FAQ

<details>
<summary><strong>Do I need prior experience?</strong></summary>

No, the workshop is open to all levels.

</details>

<details>
<summary><strong>Do I need to bring materials?</strong></summary>

Basic materials will be provided, but you can bring your own.

</details>

<details>
<summary><strong>Is the workshop free?</strong></summary>

Yes, participation is free of charge.

</details>

---

## 📩 Contact

For questions, please email:  
hyunjung.lee@uni-leipzig.de

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
