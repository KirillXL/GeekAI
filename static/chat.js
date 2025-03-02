document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const chatWindow = document.getElementById('chatWindow');

    if (messageInput.value.trim() !== "") {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageInput.value;
        chatWindow.appendChild(messageElement);
        messageInput.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});