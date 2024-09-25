async function sendDetails(url, filename) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: filename
        })
    });
    
    open_new_window('http://localhost:3000/memedetails');
};