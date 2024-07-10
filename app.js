var ideas = [
    '1', '2', '3', '4', '5'
]

const idea = document.getElementById('projectText');
const ideaBtn = document.getElementById('newProjectBtn');
const copyBtn = document.getElementById('copyIdeaBtn');

ideaBtn.addEventListener('click', projectFn);
copyBtn.addEventListener('click', copyFn);
projectFn();

function projectFn() {
    var randomNumber = Math.floor(Math.random() * (ideas.length));
    document.getElementById('projectText').innerHTML = ideas[randomNumber];
}

function copyFn() {
    var copyText = document.getElementById('projectText');
    copyText.select();
    // copyText.setSelectRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the idea: " + copyText.value);
}