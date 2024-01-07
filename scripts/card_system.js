const apps = document.getElementsByClassName('cards');
const apiURL = '';
const jsonResponseElement = document.getElementById('jsonResponse');

function getApps() {
    return fetch('http://localhost:8000/data_test.json') // temporary
    .then(responce => {
        if (!responce.ok) {
            throw new Error('Failed to fetch (Network not okay)');
        }
        return responce.json()
    })
    .catch(error => {
        console.error('Problem with fetch operation: ', error)
    });
}

jsonResponseElement.textContent = JSON.stringify(getApps(), null, 2);