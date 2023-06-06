const xtElement = document.getElementById('developer');
const contact = document.getElementById('contact');
var text = ["Developer", 
            "ChatTriggers Enthusiast", 
            "Student", 
            "Malware Analyst", 
            "Reaper Client On TOP"]

const texts = ['Developer', 'ChatTriggers Enthusiast', 'Student', 'Malware Analyst', 'Reaper Client On TOP'];
var count = 0;

setInterval(() => {
    if (count >= texts.length) {
        count = 0;
    }
    text = texts[count];
    count++;
  textElement.textContent = text;
}, 3000);

function redirect1() {
    window.location.href = "https://github.com/brennendev/brennendev.github.io/"
}

function redirect2() {
  window.location.href = "https://github.com/brennendev/htmltictactoe/"
}




function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

contact.addEventListener('click', () => {
    alert('Copied to clipboard!');
    copyToClipboard('coming soon... sorry');
    event.preventDefault();
})
