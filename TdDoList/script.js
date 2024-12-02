let storeToDos = [];
let count = 1; // Counter for numbering to-do items

document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let container = document.getElementById('section2');
    let message = document.getElementById('todoMessage').value;

    if (!message.trim()) {
        alert('To-do message cannot be empty');
        return;
    }

    storeToDos.push(message);

    // Create a paragraph element for the to-do item
    let text = document.createElement('p');
    text.textContent = `${count}. ${message}`;
    text.id = `message-${count}`; // Unique ID for each to-do item
    container.appendChild(text);

    // Create a delete button for the to-do item
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = `Delete`;
    deleteBtn.classList.add('delete'); // Use class for styling purposes
    text.appendChild(deleteBtn);

    // Increment the counter for the next to-do
    count++;

    // Event listener for the delete button
    deleteBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Find the index of the message in the storeToDos array and remove it
        let messageIndex = storeToDos.indexOf(message);
        if (messageIndex > -1) {
            storeToDos.splice(messageIndex, 1);
        }

        // Remove the text element from the DOM
        text.remove();

        // Renumber the remaining to-dos
        let items = container.querySelectorAll('p');
        count = 1; // Reset the counter
        items.forEach((item) => {
            let button = item.querySelector('button');
            item.textContent = `${count}. ${storeToDos[count - 1]}`;
            item.appendChild(button);
            count++;
        });
    });
});
