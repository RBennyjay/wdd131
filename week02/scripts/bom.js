
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        // Clear input and refocus
        input.value = '';
        input.focus();

        // Delete functionality
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    } else {
        input.focus(); // Ensure input remains active
    }
});
