// Function to filter the table based on the search input
document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#reportTable tbody tr');

    rows.forEach(row => {
        const courseName = row.cells[1].textContent.toLowerCase();
        if (courseName.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Function to sort the table by clicking the column headers
function sortTable(columnIndex) {
    const table = document.getElementById('reportTable');
    const rows = Array.from(table.rows).slice(1); // Skip the header row
    let isAscending = true;

    // Determine the current sorting order
    if (table.dataset.sortColumn === columnIndex.toString()) {
        isAscending = table.dataset.sortDirection !== 'asc';
    }

    // Sort rows
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();

        if (columnIndex === 2) { // If sorting by 'No. of Students', parse to integer
            return isAscending ? parseInt(aText) - parseInt(bText) : parseInt(bText) - parseInt(aText);
        }
        
        return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });

    // Append sorted rows back to the table
    rows.forEach(row => table.querySelector('tbody').appendChild(row));

    // Store current sorting state
    table.dataset.sortColumn = columnIndex;
    table.dataset.sortDirection = isAscending ? 'asc' : 'desc';
}
