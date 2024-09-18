// Global state for current sort configuration
const currentSort = { column: 'date', ascending: false };

// Sort table based on the selected column
const sortTable = (column) => {
    const table = document.getElementById('linksTable');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Update current sort state
    currentSort.column = column;
    currentSort.ascending = currentSort.column === column ? !currentSort.ascending : true;

    rows.sort((a, b) => {
        const aValue = getCellValue(a, column);
        const bValue = getCellValue(b, column);
        return currentSort.ascending ? compareValues(aValue, bValue) : compareValues(bValue, aValue);
    });

    tbody.append(...rows);
    updateSortIndicators();
};

// Get cell value based on column type
const getCellValue = (row, column) => {
    const cell = row.cells[getColumnIndex(column)];
    return column === 'date' ? cell.dataset.date : cell.textContent.toLowerCase();
};

// Map column names to their indices
const getColumnIndex = (column) => ({ title: 0, url: 1, date: 2 }[column]);

// Compare two values for sorting
const compareValues = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

// Update sort indicators (▲ or ▼) in table headers
const updateSortIndicators = () => {
    const headers = document.querySelectorAll('th');
    headers.forEach(th => {
        const column = th.dataset.sort;
        th.classList.remove('after:content-["▲"]', 'after:content-["▼"]');
        if (column === currentSort.column) {
            th.classList.add(currentSort.ascending ? 'after:content-["▲"]' : 'after:content-["▼"]');
        }
    });
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
    document.querySelectorAll('th').forEach(th => {
        th.addEventListener('click', () => sortTable(th.dataset.sort ?? 'date'));
    });

    document.getElementById('filterInput')?.addEventListener('input', filterTable);

    // Initial sort by date
    sortTable('date');
};