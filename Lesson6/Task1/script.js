// 1.
// შექმენი button, რომელზე დაწკაპების შემდეგაც გაიხსნება
// მოდალი და მოდალის უკან შავი/გამჭვირვალე background

// body
const body = document.querySelector("body");

// button
const toggleBtn = document.querySelector(".toggle-btn")
const btn = document.createElement("button");
btn.textContent = "toggle Modal";
btn.classList.add("my_button");
toggleBtn.appendChild(btn);

// modal
const modal = document.querySelector(".modal");
btn.addEventListener("click", function() {
    modal.style.display = "block";
    btn.style.display = "none";
    body.style.backgroundColor = "black";
});

// close modal btn
const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", function(){
    modal.style.display = "none";
    btn.style.display = "block"
    body.style.backgroundColor = "";
});
