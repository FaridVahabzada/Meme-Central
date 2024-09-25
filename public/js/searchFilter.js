async function searchFilter(url, filename) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: filename
        })
    });
    
    open_new_window('http://localhost:3000/memeoverview');
};