document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('filter');
    const searchInput = document.getElementById('search');
    const items = document.querySelectorAll('.item');

    filterSelect.addEventListener('change', filterItems);
    searchInput.addEventListener('input', filterItems);

    function filterItems() {
        const filterValue = filterSelect.value;
        const searchValue = searchInput.value.toLowerCase();

        items.forEach(item => {
            const isMatchingFilter = filterValue === 'all' || item.classList.contains(filterValue);
            const isMatchingSearch = item.textContent.toLowerCase().includes(searchValue);

            if (isMatchingFilter && isMatchingSearch) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
