const btn = document.querySelector(".send-btn");

btn.addEventListener("click", function() {
	setTimeout(function() {
		btn.blur();
	}, 700);
})