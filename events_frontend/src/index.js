const state = {
    users: [],
    events: [],
    selectedUser: null
}


// add all events to page
function renderEvents(events) {
    events.forEach(e => {
        renderEvent(e)
    });
}

// add single event to page
function renderEvent(event) {
    state.events = event
    const user1 = state.users.find(user =>  
        user.id == event.user_id)
         
        
    let eventEl = document.querySelector('#events-table')
    let eventRowEl = document.createElement('tr')
    eventRowEl.innerHTML = `
    <td>${event.name}</td>
    <td>${event.date}</td>
    <td>${user1.name}</td>
    <td><button id='${event.id}-delete-event-btn' class='delete-btn' type='delete'>Delete</button></td>
    `
  
    eventEl.append(eventRowEl)
    
     
    
    //add delete button functionality
    const deleteBtn = eventRowEl.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', (e) => {
        eventRowEl.remove()
        debugger 
        //remove from server 
        const intZ = parseInt(e.target.id)
        const delEvent = state.events.find(obj => obj.id == intZ)
         
        deleteEventServer(delEvent) 
    })

}


function renderFormHTML () {
    return `<form id='submit-form' class="ui form">
    <label>Event Title</label>
          <p>
            <input type="text" name="name" value="" />
          </p>
    <label>Host</label>      
          <p>
    <select name='host'>
            ${state.users.map(user => {
              return (`<option value=${user.id}>${user.name}</option>`)
            })}          
    </select>
          </p>
    <label>Event Date</label>
          <p>
            <input type="text" name="date" value="" />
          </p>
    <label>IMAGE Url</label>
          <p>
            <input type="text" name="image_url" value="" />
          </p>
            <button type='submit'>Create Event</button>
</form>`

}

//render new event form on page
function renderEventForm() {
    let form = document.querySelector('#event-form')
    let button = document.querySelector('#event-form-btn')

    button.addEventListener('click', function(event) {
        form.innerHTML = renderFormHTML()
        
        
        // add event listener for form submission 
        const submitForm = document.querySelector('#submit-form')
        submitForm.addEventListener('submit', event => {
             event.preventDefault()

             const name = event.target.name.value
             const date = event.target.date.value 
             const image = event.target.image_url.value 
             const user_id = parseInt(event.target.host.value)
              
             const eventX = {name: name,
                            date: date,
                            user_id: user_id,
                            image_url: image}
             //adds new event to page   
             renderEvent(eventX)
             //add new event to server 
             createEventServer(eventX)    
        })
    })
}







// adds event listeners to app
function addEventListeners() {
    renderEventForm()
    // sendEventData()
}


//initialise function 
function init() {
    
    fetchUsers()
    .then(users => {
        state.users = users
   
    fetchEvents()
    .then(renderEvents)
    
    })
    
    addEventListeners()
}

init()

