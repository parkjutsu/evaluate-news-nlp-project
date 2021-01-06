function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    // Fetch request to Express server to reference API
    console.log("::: Form Submitted :::");
    fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: formText,
    })
    .then(res => res.json()) // Parse JSON response into native JavaScript object
    .then(data => {
        document.getElementById('results').innerHTML = `MeaningCloud identifies this text as ${data.subjectivity} and ${data.irony} with ${data.confidence}% confidence.`;
    })
}

export { handleSubmit }
