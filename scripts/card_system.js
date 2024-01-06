const apps = document.getElementsByClassName('cards');
const apiURL = '';

const app_data = fetch('http://localhost:8000/data_test.json');
document.createElement("p").textContent = JSON.stringify(app_data);