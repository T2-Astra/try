/**
 * Mock API for the Contribution Project
 * This file simulates backend API responses
 */

const API = {
    // Mock user data
    users: [
        { id: 1, username: 'user1', contributions: 245 },
        { id: 2, username: 'user2', contributions: 187 },
        { id: 3, username: 'user3', contributions: 342 },
        { id: 4, username: 'user4', contributions: 156 },
        { id: 5, username: 'user5', contributions: 278 }
    ],
    
    // Mock project data
    projects: [
        { 
            id: 1, 
            name: 'GitHub Contribution Tracker', 
            description: 'A tool to visualize and analyze your GitHub contribution patterns over time.',
            techStack: ['JavaScript', 'D3.js', 'GitHub API'],
            stars: 45
        },
        { 
            id: 2, 
            name: 'Automated Contribution System', 
            description: 'A system that helps developers maintain consistent contribution patterns by suggesting daily coding tasks.',
            techStack: ['Python', 'Machine Learning', 'GitHub API'],
            stars: 32
        },
        { 
            id: 3, 
            name: 'Open Source Finder', 
            description: 'A tool that recommends open source projects matching your skills and interests to help you contribute more effectively.',
            techStack: ['Node.js', 'React', 'MongoDB'],
            stars: 28
        }
    ],
    
    // Mock blog posts
    blogPosts: [
        {
            id: 1,
            title: 'How to Maximize GitHub Contributions',
            date: '2023-05-15',
            content: 'GitHub tracks your contributions through various activities such as commits, pull requests, and issues...',
            author: 'user1',
            tags: ['github', 'contributions', 'tips']
        },
        {
            id: 2,
            title: 'Understanding the GitHub Contribution Graph',
            date: '2023-05-10',
            content: 'The GitHub contribution graph shows your activity over the past year. Each square represents a day...',
            author: 'user2',
            tags: ['github', 'visualization', 'activity']
        }
    ],
    
    // API methods
    getUsers: function() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.users), 300);
        });
    },
    
    getProjects: function() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.projects), 300);
        });
    },
    
    getBlogPosts: function() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.blogPosts), 300);
        });
    },
    
    getUserById: function(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.users.find(u => u.id === id);
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error('User not found'));
                }
            }, 300);
        });
    },
    
    getProjectById: function(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const project = this.projects.find(p => p.id === id);
                if (project) {
                    resolve(project);
                } else {
                    reject(new Error('Project not found'));
                }
            }, 300);
        });
    },
    
    getBlogPostById: function(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const post = this.blogPosts.find(p => p.id === id);
                if (post) {
                    resolve(post);
                } else {
                    reject(new Error('Blog post not found'));
                }
            }, 300);
        });
    }
};

// Export the API for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API;
} else {
    window.API = API;
}