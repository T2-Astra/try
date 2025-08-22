document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');
    
    // Add a timestamp to show when the page was loaded
    const main = document.querySelector('main');
    const timestamp = document.createElement('p');
    timestamp.textContent = `Page loaded at: ${new Date().toLocaleString()}`;
    main.appendChild(timestamp);
});