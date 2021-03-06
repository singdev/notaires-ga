loadMenu();

function loadMenu() {
    const menus = document.querySelectorAll('.menu');

    menus.forEach(menu => {
        menu.querySelector('.nav-item').addEventListener('click', (e) => {
            const dds = document.querySelectorAll('.dropdown');

            const currentdd = menu.querySelector('.dropdown');
            if (currentdd) {
                currentdd.addEventListener('click', () => {
                    currentdd.classList.remove('drop');
                })
                dds.forEach(d => {
                    if (d == currentdd) {
                        d.classList.add('drop');
                    } else {
                        d.classList.remove('drop');
                    }
                });
                menu.querySelector('.dropdown').classList.add('drop');
            }
        })
    })
}

function toggleMenu() {
    console.log("toggle");
    document.querySelector("#menu").classList.toggle("show-menu");
}