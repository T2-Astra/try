/**
 * Advanced contribution heatmap visualization
 * This file provides a heatmap visualization of GitHub contributions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on a page that needs the heatmap visualization
    const heatmapContainer = document.getElementById('contribution-heatmap');
    if (!heatmapContainer) return;
    
    // Create a GitHub-style contribution heatmap
    createContributionHeatmap(heatmapContainer);
});

function createContributionHeatmap(container) {
    // Mock data for a year of contributions (52 weeks × 7 days)
    // In a real app, this would come from the GitHub API
    const mockYearData = generateMockYearData();
    
    // Create heatmap container
    const heatmapContainer = document.createElement('div');
    heatmapContainer.classList.add('heatmap-container');
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Yearly Contribution Activity';
    heatmapContainer.appendChild(title);
    
    // Create the heatmap grid
    const heatmapGrid = document.createElement('div');
    heatmapGrid.classList.add('heatmap-grid');
    
    // Create month labels
    const monthLabels = document.createElement('div');
    monthLabels.classList.add('month-labels');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    months.forEach(month => {
        const monthLabel = document.createElement('div');
        monthLabel.textContent = month;
        monthLabels.appendChild(monthLabel);
    });
    heatmapContainer.appendChild(monthLabels);
    
    // Create day labels (Mon, Wed, Fri)
    const dayLabels = document.createElement('div');
    dayLabels.classList.add('day-labels');
    const days = ['Mon', '', 'Wed', '', 'Fri', '', ''];
    days.forEach(day => {
        const dayLabel = document.createElement('div');
        dayLabel.textContent = day;
        dayLabels.appendChild(dayLabel);
    });
    
    // Create the grid with day labels and cells
    const gridWithLabels = document.createElement('div');
    gridWithLabels.classList.add('grid-with-labels');
    gridWithLabels.appendChild(dayLabels);
    gridWithLabels.appendChild(heatmapGrid);
    heatmapContainer.appendChild(gridWithLabels);
    
    // Find the maximum value for scaling
    const maxValue = Math.max(...mockYearData.map(day => day.count));
    
    // Create cells for each day
    mockYearData.forEach(day => {
        const cell = document.createElement('div');
        cell.classList.add('heatmap-cell');
        
        // Determine intensity level (0-4)
        let intensityLevel = 0;
        if (day.count > 0) {
            intensityLevel = Math.ceil((day.count / maxValue) * 4);
        }
        
        cell.classList.add(`intensity-${intensityLevel}`);
        
        // Add tooltip with date and count
        cell.title = `${day.date}: ${day.count} contributions`;
        
        heatmapGrid.appendChild(cell);
    });
    
    // Add legend
    const legend = document.createElement('div');
    legend.classList.add('heatmap-legend');
    
    const legendLabel = document.createElement('div');
    legendLabel.textContent = 'Less';
    legend.appendChild(legendLabel);
    
    for (let i = 0; i <= 4; i++) {
        const legendCell = document.createElement('div');
        legendCell.classList.add('heatmap-cell', `intensity-${i}`);
        legend.appendChild(legendCell);
    }
    
    const legendLabelMore = document.createElement('div');
    legendLabelMore.textContent = 'More';
    legend.appendChild(legendLabelMore);
    
    heatmapContainer.appendChild(legend);
    container.appendChild(heatmapContainer);
    
    // Add CSS for the heatmap
    const style = document.createElement('style');
    style.textContent = `
        .heatmap-container {
            margin: 2rem 0;
            text-align: center;
        }
        
        .month-labels {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            text-align: left;
            font-size: 12px;
            margin-bottom: 5px;
            color: #586069;
        }
        
        .grid-with-labels {
            display: flex;
        }
        
        .day-labels {
            display: grid;
            grid-template-rows: repeat(7, 1fr);
            grid-gap: 2px;
            margin-right: 4px;
            font-size: 12px;
            color: #586069;
        }
        
        .day-labels div {
            height: 10px;
            line-height: 10px;
            text-align: right;
        }
        
        .heatmap-grid {
            display: grid;
            grid-template-columns: repeat(52, 1fr);
            grid-template-rows: repeat(7, 1fr);
            grid-gap: 2px;
        }
        
        .heatmap-cell {
            width: 10px;
            height: 10px;
            border-radius: 2px;
            background-color: #ebedf0;
        }
        
        .intensity-0 { background-color: #ebedf0; }
        .intensity-1 { background-color: #9be9a8; }
        .intensity-2 { background-color: #40c463; }
        .intensity-3 { background-color: #30a14e; }
        .intensity-4 { background-color: #216e39; }
        
        .heatmap-legend {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: 10px;
            font-size: 12px;
            color: #586069;
        }
        
        .heatmap-legend .heatmap-cell {
            margin: 0 2px;
        }
    `;
    
    document.head.appendChild(style);
}

function generateMockYearData() {
    const yearData = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setFullYear(today.getFullYear() - 1);
    
    // Generate data for each day in the past year
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
        const date = new Date(d);
        const dateString = date.toISOString().split('T')[0];
        
        // Generate random contribution count with some patterns
        let count = 0;
        
        // Higher probability of contributions on weekdays
        const dayOfWeek = date.getDay();
        const isWeekday = dayOfWeek > 0 && dayOfWeek < 6;
        
        if (isWeekday) {
            // More likely to have contributions on weekdays
            count = Math.floor(Math.random() * 10);
            
            // Simulate occasional high activity days
            if (Math.random() < 0.1) {
                count += Math.floor(Math.random() * 15);
            }
        } else {
            // Less likely to have contributions on weekends
            if (Math.random() < 0.4) {
                count = Math.floor(Math.random() * 5);
            }
        }
        
        yearData.push({
            date: dateString,
            count: count
        });
    }
    
    return yearData;
}