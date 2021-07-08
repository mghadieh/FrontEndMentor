const itemList = document.querySelectorAll('.accordian__item');

const expand_collapse = function () {
	// this.classList.add('open');
	this.querySelector('h2 .accordian__question').classList.toggle('open');
	if (this.querySelector('.accordian__collapse').style.display === 'none') {
		// this.querySelector('.accordian__collapse').style.display = 'block';
		this.querySelector('.accordian__collapse').style.display = 'block';
	} else {
		this.querySelector('.accordian__collapse').style.display = 'none';
	}
};

itemList.forEach(function (element) {
	element.addEventListener('click', expand_collapse, false);
});

// buttonList.forEach(function (element) {
// 	// button.classList.add('open');
// 	// document.querySelector('.accordian__question');
// 	if (element.classList.contains('open')) {
// 		element.addEventListener('click', collapse, false);
// 	} else {
// 		element.addEventListener('click', expand, false);
// 	}
// });
