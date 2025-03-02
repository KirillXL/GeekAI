const users = [
    { username: 'user1' },
    { username: 'user2' },
    { username: 'user3' }
];

const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];

users.forEach(user => {
    const row = usersTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = user.username;
    cell2.innerHTML = '<button onclick="editUser(\'' + user.username + '\')">Редактировать</button> <button onclick="deleteUser(\'' + user.username + '\')">Удалить</button>';
});

function editUser(username) {
    alert('Редактирование пользователя: ' + username);
}

function deleteUser(username) {
    alert('Удаление пользователя: ' + username);
}