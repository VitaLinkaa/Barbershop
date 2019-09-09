const search = document.querySelector("#search");
search.addEventListener('input', changed)

function changed(event) {
	const substring = event.target.value.trim();

	document.querySelectorAll( '.service-list article').forEach( article => {
		const shouldBeVisible = substring === '' || article.dataset.content.includes(substring);
		article.style.display = shouldBeVisible ? 'block' : 'none';
	});
}