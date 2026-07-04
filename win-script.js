// ============================================
// WIN SCREEN LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    const btnLoadGG = document.getElementById('btn-load-gg');
    const ggContainer = document.getElementById('gg-iframe-container');
    const ggIframe = document.getElementById('gg-iframe');
    
    // Load GG button click
    if (btnLoadGG) {
        btnLoadGG.addEventListener('click', function() {
            if (ggContainer) {
                ggContainer.classList.add('show');
            }
            
            if (ggIframe) {
                ggIframe.src = 'GG.html';
            }
            
            btnLoadGG.textContent = '✅ GG Loaded!';
            btnLoadGG.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            btnLoadGG.style.color = '#fff';
            btnLoadGG.disabled = true;
            
            if (ggContainer) {
                setTimeout(function() {
                    ggContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
    }
    
    // Sparkle effects on click
    document.addEventListener('click', function(e) {
        var sparkle = document.createElement('div');
        sparkle.textContent = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
        sparkle.style.cssText = 'position:fixed;left:' + e.clientX + 'px;top:' + e.clientY + 'px;font-size:' + (Math.random() * 20 + 15) + 'px;z-index:9999;pointer-events:none;';
        sparkle.style.animation = 'sparkleFade 1s ease-out forwards';
        document.body.appendChild(sparkle);
        setTimeout(function() { sparkle.remove(); }, 1000);
    });
    
    // Update time display
    var winTimeDisplay = document.getElementById('win-time-display');
    if (winTimeDisplay && winTimeDisplay.textContent === 'Loading...') {
        winTimeDisplay.textContent = '? min ? sec';
    }
});

// Add sparkle animation keyframes
var style = document.createElement('style');
style.textContent = '@keyframes sparkleFade { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0) translateY(-50px); } }';
document.head.appendChild(style);