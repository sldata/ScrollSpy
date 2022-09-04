const menuItems = document.querySelectorAll('a')
const scrollSpySections = document.querySelectorAll('.section')
const lastSection = document.querySelector('a:last-of-type')

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
				sections.push(section)

				const activeSections = document.querySelector(`[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('active'))
				activeSections.classList.add('active')
			}

			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
                menuItems.forEach(item => item.classList.remove('active'))
				lastSection.classList.add('active')
			}
		})
	}
}

window.addEventListener('scroll', handleScrollSpy)
