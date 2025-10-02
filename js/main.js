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
const smiskiCloseBook = document.querySelector('.smiski-book-text .close-btn');

smiskiImg?.addEventListener('click', () => {
	smiskiWrapper?.classList.toggle('open');
});

smiskiCloseBook?.addEventListener('click', () => {
	smiskiWrapper?.classList.remove('open');
});


// toggle instructions popup
const instructionsBtn = document.querySelector('.instructions-btn');
const instructionsWrapper = document.querySelector('.instructions');
const instructionsCloseBtn = document.querySelector('.instructions .close-btn');

instructionsBtn?.addEventListener('click', () => {
	if (instructionsWrapper) {
		instructionsWrapper.style.display = 'block';
	}
});

instructionsCloseBtn?.addEventListener('click', () => {
	if (instructionsWrapper) {
		instructionsWrapper.style.display = 'none';
	}
});