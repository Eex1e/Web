(() => {
    window.addEventListener('load', () => {
        const loc = window.location.pathname.split('/').at(-1);

        let menuItems = document.querySelectorAll('.nav_item');
        console.log(menuItems)

        menuItems.forEach(function (item) {
            if (item.getAttribute('href') === loc) {
                item.classList.add('active')
            }
        })
    })
})()