document.getElementById('generate-btn').addEventListener('click', async () => {
    const preferences = document.getElementById('preferences').value;
    const response = await fetch('/generate-idea', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ preferences })
    });

    const data = await response.json();
    document.getElementById('result').innerText = data.idea || 'Er is iets misgegaan bij het genereren van het idee.';
});
