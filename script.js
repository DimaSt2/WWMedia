window.addEventListener('load', () => {
	if (!sessionStorage.getItem('ageConfirmed')) {
		checkAge()
	} 
})

const ageOverlay = document.querySelector('.age-overlay');
const ageBtnYes = document.querySelector('.age-btn-yes');
const ageBtnNo = document.querySelector('.age-btn-no');

function checkAge () {
	ageOverlay.style.display = 'flex';

	const hideAgeModal = function() {
		ageOverlay.style.display = 'none';
	}

	const confirmAge = function () {
		sessionStorage.setItem('ageConfirmed', true);
		hideAgeModal();
	}

	const denyAge = function () {
		window.location.href = 'https://www.google.by/?hl=ru'; 
	}

	ageBtnYes.addEventListener('click', () => {
        confirmAge()
        showNotice()
    });

	ageBtnNo.addEventListener('click', denyAge);
};

const cookieNotice = document.querySelector('.cookies-notice');
const cookieBtn = document.querySelector('.cookies-btn');

cookieBtn.addEventListener('click', () => cookieNotice.style.bottom = '-90px')

function showNotice() {
    cookieNotice.style.bottom = '5px'
}