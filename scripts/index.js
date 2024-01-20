document.addEventListener('DOMContentLoaded', function() {
    const create_account_bttn = document.getElementById("make_account");
    const login_bttn = document.getElementById("login");
    const app_card = document.querySelector('.cards');

    create_account_bttn.onclick = function() {
        window.location.href = "create_account.html";
    };

    function getApps() {
        return fetch('https://origin-store-app-backend.onrender.com/applacations')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch (Network not okay)');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Problem with fetch operation: ', error);
            });
    }

    getApps()
        .then(data => {
            data['apps'].forEach(item => {
                const newDiv = document.createElement('div');
                newDiv.className = item.name;
                newDiv.id = 'app_card';
                newDiv.innerHTML = `
                    <h3 id="${item.name}.name">${item.name}</h3>
                `;
                app_card.appendChild(newDiv);
            });
        })
        .catch(error => {
            console.error('Error in data retrieval: ', error);
        });
});
