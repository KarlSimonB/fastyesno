// Display a random Yes/No answer
window.onload = function() {
    const answers = ['Yes', 'No'];
    document.getElementById('answer').textContent = answers[Math.floor(Math.random() * answers.length)];
  
    // Display the message
    const secondaryMessage = "What, you didn't expect the answer right away? Well, I thought I'd save you some time by just giving it to you right away. But now you’re probably spending that time reading this... Huh, maybe I should’ve thought this through more.";
    
    document.querySelector('.main-message').textContent = "Voila!";
    document.getElementById('secondary-message').textContent = secondaryMessage;
  };
  
  // Reload the page to show a new answer
  function tryAgain() {
    location.reload();
  }
  