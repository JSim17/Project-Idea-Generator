var ideas = [
    'Portfolio Website', 'Mini Games', 'Front-end Landing Page', 'Tournement Simulation Application', 'Chess AI Bot', 'Employee Training Gameified App', 'To-do List App',
    'Personal Finance Tracker', 'Calculator', 'Neural Network', 'Build API', 'Real-time Chat Application', 'Algorithm Visualiser', 'Travel Booking System', 'Quiz Application',
    'HTTP Server', 'Real-time Editor', 'Chat-bot', 'QR Code Generator', 'Sentiment Analysis Tool', 'Online Multiplayer Game'
]

const idea = document.getElementById('projectText');
const ideaBtn = document.getElementById('newProjectBtn');
const copyBtn = document.getElementById('copyIdeaBtn');
let textArea = document.createElement('textarea');

ideaBtn.addEventListener('click', projectFn);
copyBtn.addEventListener('click', copyFn);
projectFn();

function projectFn() {
    var randomNumber = Math.floor(Math.random() * (ideas.length));
    idea.innerHTML = ideas[randomNumber];
}

function copyFn() {
    // idea.select();
    // idea.setSelectRange(0, 99999);
    // navigator.clipboard.writeText(idea.value);
    // alert("Copied the idea: " + idea.value);

    // var textArea = document.createElement('textarea');
    textArea = idea.textContent;
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    document.body.removeChild(textArea);
    alert('Idea copied to clipboard!');
}