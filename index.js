const expandBtns = document.querySelectorAll(".expand-button");
console.log(expandBtns);

for (const button of expandBtns) {
	button.addEventListener("click", function expandInfo(ev) {
		const attributionInfo = ev.target.nextElementSibling;
		attributionInfo.classList.toggle("visually-hidden");
	});
	console.log("click!");
}
