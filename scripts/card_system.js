const Apps = document.getElementsByClassName('cards');
const apiURL = '';

function getApps() {
    return {
        "apps": 
        [
            {
                "name": "test-1", 
                "curr_ver": "1", 
                "required_ver": "399", 
                "authors": ["Wolfieboy09"], 
                "author_link_types": ["github"], 
                "links": [], 
                "description": "This is a silly little test :D"
                }, 
            {
                "name": "test-2", 
                "curr_ver": "2", 
                "required_ver": "400", 
                "authors": ["Mist"], 
                "author_link_types": ["discord"], 
                "links": [], 
                "description": "This is another silly little test :D"
                }
        ]
    };
}

document.getElementsByClassName('cards').innerHTML = "Hey!!!";