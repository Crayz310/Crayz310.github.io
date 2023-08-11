const isSafari = /^((?!chrome | android).)*safari/i.test(navigator.userAgentData);
const fab = document.getElementById('fab');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const btn = document.querySelector('.btn');
const body = document.body;

if (!isSafari) {
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
			document.documentElement.style.setProperty('--stcolor', '#0A0A0A')
			document.documentElement.style.setProperty('--hvcolor', 'black')

		}
	}

	window.addEventListener('scroll', handleFabColor);
	window.addEventListener('resize', handleFabColor);

	function openModal() {
	  modalOverlay.style.display = 'flex';
	  modal.style.animation = 'opst 0.3s linear';
	  body.style.overflow = 'hidden';
	}

	function closeModalFn() {
	  modalOverlay.style.display = 'none';
	  body.style.overflow = 'auto';
	}
	fab.addEventListener('click', openModal);
	closeModal.addEventListener('click', closeModalFn);
	modalOverlay.addEventListener('click', function(event) {
		if (event.target === modalOverlay) {
			closeModalFn();
		}
	});

	// window.addEventListener('load', function() {
	// 	var loadMain = document.querySelector('.loader');
	// 	var loadContainer = document.querySelector('.loader-container');
	// 	loadMain.style.animation = 'none';
	// 	loadContainer.style.animation = 'fadesc 3s ease';
	// 	setTimeout(function() {
	// 		loadContainer.style.display = 'none';
	// 	}, 3000);
	// });

	handleFabColor();
}


