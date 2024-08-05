document.getElementById('multiplication-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const maxZ = parseInt(document.getElementById('z').value, 10);

    // Validate inputs
    if (isNaN(x) || isNaN(y) || isNaN(maxZ) || maxZ < 1 || maxZ > 50) {
        alert('Think properly and enter a reasonable figure *z must be between 1 and 50*.');
        return;
    }

    // Generate multiplication table
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>x</th>
                    <th>y</th>
                    <th>z</th>
                    <th>x * y * z</th>
                </tr>
            </thead>
            <tbody>
    `;

    let z = 1;
    while (z <= maxZ) {
        let product = x * y * z;
        tableHTML += `
            <tr>
                <td>${x}</td>
                <td>${y}</td>
                <td>${z}</td>
                <td>${product}</td>
            </tr>
        `;
        z++;
    }

    tableHTML += '</tbody></table>';
    resultDiv.innerHTML = tableHTML;

    // Show success alert
    alert('Calculation completed successfully!');
});
