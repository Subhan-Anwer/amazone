const search = document.getElementsById('search');

if (search) {
    search.addEventListener('click', () => {
        search.classList.add('border');
    })
}