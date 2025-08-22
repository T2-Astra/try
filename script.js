document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');
    
    // Add a timestamp to show when the page was loaded
    const main = document.querySelector('main');
    const timestamp = document.createElement('p');
    timestamp.textContent = `Page loaded at: ${new Date().toLocaleString()}`;
    main.appendChild(timestamp);
    
    // Load additional scripts if needed
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'blog.html' || currentPage === 'projects.html') {
        // Dynamically load blog script
        const blogScript = document.createElement('script');
        blogScript.src = 'blog-script.js';
        document.body.appendChild(blogScript);
    }
});