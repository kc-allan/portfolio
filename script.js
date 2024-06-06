document.addEventListener('DOMContentLoaded', () => {
	const loading = document.querySelector('.loader')
	loading.classList.add('hidden')
	
	const menu = document.querySelector('.ham-menu')
	const menuDropdown = document.querySelector('.menu-dropdown')
	menu.addEventListener('click', () => {
		menu.classList.toggle('active')
		menuDropdown.classList.toggle('active')
	})
})
