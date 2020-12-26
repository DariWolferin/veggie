const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item');

const blogsTabs = document.querySelectorAll('.tabs-nav__btn');
const tabsNavItem = document.querySelectorAll('.tabs-nav__item');

tabsBtn.forEach(onTabClick);
blogsTabs.forEach(blogsOnTabClick);

function onTabClick(item) {
	item.addEventListener('click', function() {
		let currentBtn = item;
		let tabId = item.getAttribute('data-tab');
		let currentItem = document.querySelector(tabId);

		if(! currentBtn.classList.contains('_active') ){
			tabsBtn.forEach(function(item) {
				item.classList.remove('_active');
			});

			tabsItem.forEach(function(item) {
				item.classList.remove('_active');
			});

			currentBtn.classList.add('_active');
			currentItem.classList.add('_active');
		}
	});
}

function blogsOnTabClick(item) {
	item.addEventListener('click', function() {
		let currentBtn = item;
		let tabId = item.getAttribute('data-tab');
		let currentItem = document.querySelector(tabId);

		if(! currentBtn.classList.contains('_active') ){
			blogsTabs.forEach(function(item) {
				item.classList.remove('_active');
			});

			tabsNavItem.forEach(function(item) {
				item.classList.remove('_active');
			});

			currentBtn.classList.add('_active');
			currentItem.classList.add('_active');
		}
	});
}

document.querySelector('.tabs__nav-btn').click();
document.querySelector('.tabs-nav__btn').click();
