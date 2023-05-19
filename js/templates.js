/**
 * If the login menu has the class 'd-none', remove it. Otherwise, add it
 */
function subMenu() {
    let menu = document.getElementById('logMenue');
    
    if (menu.classList.contains('d-none')) {
        menu.classList.remove('d-none');
    } else {
        menu.classList.add('d-none');
    }
}



