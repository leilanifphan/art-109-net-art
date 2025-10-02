// script is loaded at end of body, so elements exist already
const closeBtn = document.querySelector('.close-btn');
const instructions = document.querySelector('.instructions');

closeBtn?.addEventListener('click', () => {
	if (instructions) {
		instructions.style.display = 'none';
		document.body.focus();
	}
});


document.querySelector('#smiski-book').addEventListener('click', function() {

});

// toggle smiski popup
const smiskiImg = document.querySelector('#smiski-book');
const smiskiWrapper = document.querySelector('.smiski-book');
const smiskiClose = document.querySelector('.smiski-book-text .close-btn');

smiskiImg?.addEventListener('click', () => {
	smiskiWrapper?.classList.toggle('open');
});

smiskiClose?.addEventListener('click', () => {
	smiskiWrapper?.classList.remove('open');
});