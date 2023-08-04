const fab = document.getElementById('fab');
const btn = document.querySelector('.btn');

function isOutOfView(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.bottom < 0 ||
		rect.right < 0 ||
		rect.left > window.innerWidth ||
		rect.top > window.innerHeight
	);
}

function handleFabColor() {
	if (isOutOfView(btn)) {
		document.documentElement.style.setProperty('--stcolor', 'orange')
		document.documentElement.style.setProperty('--hvcolor', 'darkorange')
	} else {
		document.documentElement.style.setProperty('--stcolor', 'black')
		document.documentElement.style.setProperty('--hvcolor', 'black')

	}
}

window.addEventListener('scroll', handleFabColor);
window.addEventListener('resize', handleFabColor);

handleFabColor();
