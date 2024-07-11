var ideas = [
    'Portfolio Website', 'Mini Games', 'Front-end Landing Page', 'Tournement Simulation Application', 'Chess AI Bot', 'Employee Training Gameified App', 'To-do List App',
    'Personal Finance Tracker', 'Calculator', 'Neural Network', 'Build API', 'Real-time Chat Application', 'Algorithm Visualiser', 'Travel Booking System', 'Quiz Application',
    'HTTP Server', 'Real-time Editor', 'Chat-bot', 'QR Code Generator', 'Sentiment Analysis Tool', 'Online Multiplayer Game'
]

const idea = document.getElementById('projectText');
const ideaBtn = document.getElementById('newProjectBtn');
const copyBtn = document.getElementById('copyIdeaBtn');

ideaBtn.addEventListener('click', projectFn);
copyBtn.addEventListener('click', copyFn);
projectFn();

function projectFn() {
    var randomNumber = Math.floor(Math.random() * (ideas.length));
    idea.innerHTML = ideas[randomNumber];
}

function copyFn() {
    // Get the element with the id 'idea'
    const ideaElement = document.getElementById('projectText');
    
    // Check if the element exists
    if (ideaElement) {
        // Create a new textarea element
        const textArea = document.createElement('textarea');
        
        // Set the text content you want to copy
        textArea.value = ideaElement.textContent;
        
        // Add the class to hide the textarea
        textArea.classList.add('hidden-textarea');
        
        // Append the textarea to the body (necessary for selection)
        document.body.appendChild(textArea);
        
        // Select the text
        textArea.select();

        // Copy the selected text to the clipboard
        navigator.clipboard.writeText(textArea.value)
            .then(() => {
                // Remove the textarea element from the body
                document.body.removeChild(textArea);

                // Alert the user
                alert('Idea copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    } else {
        console.error('Element with id "idea" not found.');
    }
}