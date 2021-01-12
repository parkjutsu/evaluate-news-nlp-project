function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    //Client.checkForName(formText);

    // Fetch request to Express server to reference API
    console.log('::: Form Submitted :::');
    fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: encodeURIComponent(formText),
    })
    .then(res => res.json()) // Parse JSON response into native JavaScript object
    .then(data => {
        // Construct string from API data
        let rtnStr = `MeaningCloud identifies this text as <strong>${data.subjectivity}</strong> and <strong>${data.irony}</strong> with <strong>${data.confidence}%</strong> confidence.
        
        `;

        for (const sentence of data.sentence_list) {
            let sentiment = '';
            switch (sentence.score_tag) {
                case 'P+':
                    sentiment = 'strong positive';
                    break;
                case 'P':
                    sentiment = 'positive';
                    break;
                case 'NEU':
                    sentiment = 'neutral';
                    break;
                case 'N':
                    sentiment = 'negative';
                    break;
                case 'N+':
                    sentiment = 'strong negative';
                    break;
                case 'NONE':
                    sentiment = 'without sentiment';
                    break;
            }
            rtnStr += `Sentence:
            <em>${sentence.text}</em>
            The sentiment in this sentence is rated as <strong>${sentiment}</strong> with <strong>${sentence.confidence}%</strong> confidence.
            
            `
        }
        document.getElementById('results').innerHTML = rtnStr;
    })
}

export { handleSubmit }
