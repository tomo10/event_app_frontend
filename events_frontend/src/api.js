//handing server interaction 

baseURL = 'http://localhost:3000'

function fetchEvents() {
    return fetch(baseURL + `/events`)
    .then(resp => resp.json())
}

function fetchUsers() {
    return fetch(baseURL + `/users`)
    .then(resp => resp.json())
}

function createEventServer(event) {
    return fetch("http://localhost:3000/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(event)
        }).then(res => res.json())
}

function deleteEventServer(event) {
    return fetch(`http://localhost:3000/events/${event.id}`, {
            method: 'DELETE'
        }).then(res => res.json())
}