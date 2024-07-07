// script.js

// Function to toggle theme
function toggleTheme() {
    const rootStyles = getComputedStyle(document.documentElement);
    const currentBgColor = rootStyles.getPropertyValue('--bg-color').trim();
    document.documentElement.style.setProperty('--bg-color', currentBgColor === '#1e1e1e' ? '#ffffff' : '#1e1e1e');
    document.documentElement.style.setProperty('--text-color', currentBgColor === '#1e1e1e' ? '#000000' : '#d4d4d4');
    document.documentElement.style.setProperty('--link-bg', currentBgColor === '#1e1e1e' ? '#f0f0f0' : '#333');
    document.documentElement.style.setProperty('--link-color', currentBgColor === '#1e1e1e' ? '#0000ff' : '#00ff00');
    document.documentElement.style.setProperty('--link-border', currentBgColor === '#1e1e1e' ? '#0000ff' : '#00ff00');
}

// Event listener for toggle theme button in footer
document.getElementById('footer-toggle-theme').addEventListener('click', function() {
    toggleTheme();
});

// Event listener for collapsible section
document.addEventListener('DOMContentLoaded', function() {
    const collapsible = document.querySelector('.collapsible');
    collapsible.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'flex') {
            content.style.display = 'none';
        } else {
            content.style.display = 'flex';
        }
    });

    // Modal functionality
    const modal = document.getElementById('linkhub-modal');
    const btn = document.getElementById('linkhub-description');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});