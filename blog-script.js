document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog page loaded successfully!');
    
    // Add reading time estimate to blog articles
    const articles = document.querySelectorAll('article');
    
    articles.forEach(article => {
        const text = article.textContent;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
        
        const readingTimeElement = document.createElement('p');
        readingTimeElement.classList.add('reading-time');
        readingTimeElement.textContent = `${readingTime} min read`;
        
        const dateElement = article.querySelector('.date');
        if (dateElement) {
            dateElement.insertAdjacentElement('afterend', readingTimeElement);
        } else {
            article.querySelector('h2').insertAdjacentElement('afterend', readingTimeElement);
        }
    });
    
    // Add filter functionality for projects
    const projectSections = document.querySelectorAll('.project');
    if (projectSections.length > 0) {
        // Create filter controls
        const filterContainer = document.createElement('div');
        filterContainer.classList.add('filter-container');
        filterContainer.innerHTML = `
            <h3>Filter Projects:</h3>
            <div class="filter-options">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="JavaScript">JavaScript</button>
                <button class="filter-btn" data-filter="Python">Python</button>
                <button class="filter-btn" data-filter="React">React</button>
            </div>
        `;
        
        const mainElement = document.querySelector('main');
        mainElement.insertBefore(filterContainer, mainElement.firstChild);
        
        // Add filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectSections.forEach(project => {
                    if (filter === 'all') {
                        project.style.display = 'block';
                    } else {
                        const techStack = project.querySelector('.tech-stack').textContent;
                        if (techStack.includes(filter)) {
                            project.style.display = 'block';
                        } else {
                            project.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
});