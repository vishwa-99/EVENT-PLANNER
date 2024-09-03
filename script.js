document.getElementById('add-event-btn').addEventListener('click', addEvent);

function addEvent() {
    const eventName = document.getElementById('event-name').value.trim();
    const eventDate = document.getElementById('event-date').value;

    if (eventName === '' || eventDate === '') return;

    const eventItem = document.createElement('li');
    eventItem.textContent = `${eventName} - ${new Date(eventDate).toLocaleDateString()}`;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => eventItem.remove());

    eventItem.appendChild(deleteBtn);
    document.getElementById('event-list').appendChild(eventItem);

    // Store event in local storage
    saveEventToLocal(eventName, eventDate);

    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';
}

function saveEventToLocal(name, date) {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push({ name, date });
    localStorage.setItem('events', JSON.stringify(events));
}
