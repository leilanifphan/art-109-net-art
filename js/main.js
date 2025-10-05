// script is loaded at end of body, so elements exist already
const closeBtn = document.querySelector('.close-btn');
const instructions = document.querySelector('.instructions');

closeBtn?.addEventListener('click', () => {
	if (instructions) {
		instructions.style.display = 'none';
		document.body.focus();
	}
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



// toggle smiski-book popup
const smiskiImg = document.querySelector('#smiski-book');
const smiskiWrapper = document.querySelector('.smiski-book');
const smiskiCloseBook = document.querySelector('.smiski-book-text .close-btn');

smiskiImg?.addEventListener('click', () => {
	smiskiWrapper?.classList.toggle('open');
});

smiskiCloseBook?.addEventListener('click', () => {
	smiskiWrapper?.classList.remove('open');
});

// toggle smiski-push popup
const smiskiPushImg = document.querySelector('#smiski-push');
const smiskiPushWrapper = document.querySelector('.smiski-push');
const smiskiPushClose = document.querySelector('.smiski-push-text .close-btn');

smiskiPushImg?.addEventListener('click', () => {
	smiskiPushWrapper?.classList.toggle('open');
});

smiskiPushClose?.addEventListener('click', () => {
	smiskiPushWrapper?.classList.remove('open');
});



// toggle smiski-gardening popup
const smiskiGardeningImg = document.querySelector('#smiski-gardening');
const smiskiGardeningWrapper = document.querySelector('.smiski-gardening');
const smiskiGardeningClose = document.querySelector('.smiski-gardening-text .close-btn');

smiskiGardeningImg?.addEventListener('click', () => {
	smiskiGardeningWrapper?.classList.toggle('open');
});

smiskiGardeningClose?.addEventListener('click', () => {
	smiskiGardeningWrapper?.classList.remove('open');
});



// toggle smiski-nap popup
const smiskiNapImg = document.querySelector('#smiski-nap');
const smiskiNapWrapper = document.querySelector('.smiski-nap');
const smiskiNapClose = document.querySelector('.smiski-nap-text .close-btn');

smiskiNapImg?.addEventListener('click', () => {
	smiskiNapWrapper?.classList.toggle('open');
});

smiskiNapClose?.addEventListener('click', () => {
	smiskiNapWrapper?.classList.remove('open');
});



// toggle smiski-underpants popup
const smiskiUnderpantsImg = document.querySelector('#smiski-underpants');
const smiskiUnderpantsWrapper = document.querySelector('.smiski-underpants');
const smiskiUnderpantsClose = document.querySelector('.smiski-underpants-text .close-btn');

smiskiUnderpantsImg?.addEventListener('click', () => {
	smiskiUnderpantsWrapper?.classList.toggle('open');
});

smiskiUnderpantsClose?.addEventListener('click', () => {
	smiskiUnderpantsWrapper?.classList.remove('open');
});




// toggle smiski-briefcase popup
const smiskiBriefcaseImg = document.querySelector('#smiski-briefcase');
const smiskiBriefcaseWrapper = document.querySelector('.smiski-briefcase');
const smiskiBriefcaseClose = document.querySelector('.smiski-briefcase-text .close-btn');

smiskiBriefcaseImg?.addEventListener('click', () => {
	smiskiBriefcaseWrapper?.classList.toggle('open');
});

smiskiBriefcaseClose?.addEventListener('click', () => {
	smiskiBriefcaseWrapper?.classList.remove('open');
});



// toggle smiski-dumbbell popup
const smiskiDumbbellImg = document.querySelector('#smiski-dumbbell');
const smiskiDumbbellWrapper = document.querySelector('.smiski-dumbbell');
const smiskiDumbbellClose = document.querySelector('.smiski-dumbbell-text .close-btn');

smiskiDumbbellImg?.addEventListener('click', () => {
	smiskiDumbbellWrapper?.classList.toggle('open');
});

smiskiDumbbellClose?.addEventListener('click', () => {
	smiskiDumbbellWrapper?.classList.remove('open');
});



// toggle smiski-daydreaming popup
const smiskiDaydreamingImg = document.querySelector('#smiski-daydreaming');
const smiskiDaydreamingWrapper = document.querySelector('.smiski-daydreaming');
const smiskiDaydreamingClose = document.querySelector('.smiski-daydreaming-text .close-btn');

smiskiDaydreamingImg?.addEventListener('click', () => {
	smiskiDaydreamingWrapper?.classList.toggle('open');
});

smiskiDaydreamingClose?.addEventListener('click', () => {
	smiskiDaydreamingWrapper?.classList.remove('open');
});


// toggle smiski-peeking popup
const smiskiPeekingImg = document.querySelector('#smiski-peeking');
const smiskiPeekingWrapper = document.querySelector('.smiski-peeking');
const smiskiPeekingClose = document.querySelector('.smiski-peeking-text .close-btn');

smiskiPeekingImg?.addEventListener('click', () => {
	smiskiPeekingWrapper?.classList.toggle('open');
});

smiskiPeekingClose?.addEventListener('click', () => {
	smiskiPeekingWrapper?.classList.remove('open');
});


// toggle smiski-dali popup
const smiskiDaliImg = document.querySelector('#smiski-dali');
const smiskiDaliWrapper = document.querySelector('.smiski-dali');
const smiskiDaliClose = document.querySelector('.smiski-dali-text .close-btn');

smiskiDaliImg?.addEventListener('click', () => {
	smiskiDaliWrapper?.classList.toggle('open');
});

smiskiDaliClose?.addEventListener('click', () => {
	smiskiDaliWrapper?.classList.remove('open');
});

