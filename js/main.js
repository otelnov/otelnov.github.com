(function () {
	'use strict';

	var plus = document.querySelector('.icon-plus');
	var hidden = document.querySelector('.hidden');
	var hideContacts = true;

	function init() {
		checkHidden();
		plus.addEventListener('click', function (e) {
			hideContacts = !hideContacts;
			checkHidden();
		});
		function checkHidden() {
			if (hideContacts) {
				hidden.style.visibility = 'hidden';
			} else {
				hidden.style.visibility = '';
			}
		}
	}

	init();
})();