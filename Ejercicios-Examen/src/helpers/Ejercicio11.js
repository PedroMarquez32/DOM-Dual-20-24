document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('downloadButton').addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const content = `Name: ${name}\nAddress: ${address}`;
            
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'datos.txt';
            a.click();
            URL.revokeObjectURL(url);
        });
    }, 0);
});
