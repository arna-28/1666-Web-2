document.getElementById('sendBtn').addEventListener('click', function() {
    // Get the input message
    var userInput = document.getElementById('userInput').value;

    // Check if user input is not empty
    if (userInput.trim() !== "") {
        // Hide welcome message and options on first send
        document.getElementById('welcomeMessage').style.display = 'none';
        document.getElementById('optionsSection').style.display = 'none';

        // Display the user's message in the message display area
        var messageDisplay = document.getElementById('messageDisplay');
        var userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = userInput;
        messageDisplay.appendChild(userMessage);

        // Scroll to the bottom after new message
        messageDisplay.scrollTop = messageDisplay.scrollHeight;

        // Clear the input field after sending
        document.getElementById('userInput').value = "";

        // Send the user's message to the Flask server
        fetch('/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'msg': userInput
            })
        })
        .then(response => response.json())
        .then(data => {
            // Display the AI's response in the message display area
            var aiMessage = document.createElement('div');
            aiMessage.classList.add('user-message'); // Use same class for AI messages for simplicity
            aiMessage.textContent = data.response;
            messageDisplay.appendChild(aiMessage);

            // Scroll to the bottom after new message
            messageDisplay.scrollTop = messageDisplay.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});