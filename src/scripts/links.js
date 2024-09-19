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
};