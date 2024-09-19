// Sort table by date in ascending order
const sortTableByDate = () => {
    const table = document.getElementById('linksTable');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const aDate = a.cells[2].dataset.date;
        const bDate = b.cells[2].dataset.date;
        return aDate.localeCompare(bDate);
    });

    tbody.append(...rows);
};

// Filter table rows based on input
const filterTable = () => {
    const filter = document.getElementById('filterInput').value.toLowerCase();
    const rows = document.querySelectorAll('#linksTable tbody tr');

    rows.forEach(row => {
        const text = Array.from(row.cells).map(cell => cell.textContent.toLowerCase()).join(' ');
        row.classList.toggle('hidden', !text.includes(filter));
    });
};

// Initialize the links page
export const initializeLinksPage = () => {
    document.getElementById('filterInput')?.addEventListener('input', filterTable);

    // Initial sort by date
    sortTableByDate();
};