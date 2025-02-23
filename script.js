// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const answers = ['Yes', 'No'];
    const answerElement = document.getElementById('answer');

    // Make sure the element exists before updating it
    if (answerElement) {
        answerElement.textContent = answers[Math.floor(Math.random() * answers.length)];
    }

    // Display the message
    const secondaryMessage = "What, you didn't expect the answer right away? Well, I thought I'd save you some time by just giving it to you right away. But now you’re probably spending that time reading this... Huh, maybe I should’ve thought this through more.";
    
    // Update the 'message' and 'secondary-message' elements
    const messageElement = document.querySelector('.message');
    const secondaryMessageElement = document.querySelector('.secondary-message');

    if (messageElement) {
        messageElement.textContent = "Voila!";
    }
    
    if (secondaryMessageElement) {
        secondaryMessageElement.textContent = secondaryMessage;
    }
});

// Reload the page to show a new answer
function tryAgain() {
    location.reload();
}

  