let volume = 0;
const balloon = document.getElementById('balloon');
const volumeText = document.getElementById('volume-text');
const statusText = document.getElementById('status-text');
const pumpBtn = document.getElementById('pump-btn');

let popState = false;

// The user clicks to pump volume up
pumpBtn.addEventListener('click', () => {
    if (popState) return; // Can't pump while popped!
    
    volume += 6; // Each pump increases volume by 6%
    
    if (volume > 100) {
        popBalloon();
    } else {
        updateUI();
    }
});

// The core "Bad UI" mechanic: Deflation
setInterval(() => {
    if (popState) return;
    
    if (volume > 0) {
        // Volume automatically decreases. 
        // User must keep clicking to hear anything.
        volume -= 1; 
        updateUI();
    }
}, 250); // Leaks every 250 milliseconds!

function updateUI() {
    // Sync UI with exact state
    volumeText.innerText = Math.floor(volume) + '%';
    statusText.innerText = Math.floor(volume) + '%';
    
    // Update balloon size dynamically based on volume level
    // Base size 50px, max size around 250px
    const size = 50 + (volume * 2);
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    
    // Color turns to a warning red as it approaches popping point
    if (volume > 85) {
        balloon.style.backgroundColor = '#cc0000'; 
    } else {
        balloon.style.backgroundColor = '#ff4d4d';
    }
}

function popBalloon() {
    popState = true;
    volume = 0; // Immediate mute penalty
    
    // Trigger visual pop
    balloon.classList.add('popped');
    volumeText.innerText = 'POP!';
    statusText.innerText = '0% (Muted)';
    
    // Prevent the user from doing anything for 3 seconds as a punishment
    pumpBtn.innerText = "TIMEOUT...";
    pumpBtn.style.backgroundColor = "#999";
    pumpBtn.style.boxShadow = "0 5px 0 #666";
    
    setTimeout(() => {
        balloon.classList.remove('popped');
        pumpBtn.innerText = "💨 PUMP";
        pumpBtn.style.backgroundColor = "#4CAF50";
        pumpBtn.style.boxShadow = "0 5px 0 #2E8B57";
        popState = false;
        updateUI();
    }, 3000); 
}
