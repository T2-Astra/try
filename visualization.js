/**
 * Simple data visualization for contribution data
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on a page that needs visualization
    const visualizationContainer = document.getElementById('contribution-visualization');
    if (!visualizationContainer) return;
    
    // Create a simple bar chart to visualize contribution data
    createContributionChart(visualizationContainer);
});

function createContributionChart(container) {
    // Mock data - in a real app, this would come from an API
    const mockData = [
        { day: 'Mon', contributions: 4 },
        { day: 'Tue', contributions: 8 },
        { day: 'Wed', contributions: 15 },
        { day: 'Thu', contributions: 16 },
        { day: 'Fri', contributions: 23 },
        { day: 'Sat', contributions: 12 },
        { day: 'Sun', contributions: 9 }
    ];
    
    // Create chart container
    const chartContainer = document.createElement('div');
    chartContainer.classList.add('chart-container');
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Weekly Contribution Activity';
    chartContainer.appendChild(title);
    
    // Create the chart
    const chart = document.createElement('div');
    chart.classList.add('bar-chart');
    
    // Find the maximum value for scaling
    const maxValue = Math.max(...mockData.map(item => item.contributions));
    
    // Create bars for each data point
    mockData.forEach(item => {
        const barContainer = document.createElement('div');
        barContainer.classList.add('bar-container');
        
        const bar = document.createElement('div');
        bar.classList.add('bar');
        
        // Calculate height based on data value (percentage of max)
        const heightPercentage = (item.contributions / maxValue) * 100;
        bar.style.height = `${heightPercentage}%`;
        
        // Color based on contribution count
        if (item.contributions < 10) {
            bar.style.backgroundColor = '#9be9a8'; // Light green
        } else if (item.contributions < 20) {
            bar.style.backgroundColor = '#40c463'; // Medium green
        } else {
            bar.style.backgroundColor = '#2ea44f'; // Dark green
        }
        
        // Add label and value
        const dayLabel = document.createElement('div');
        dayLabel.classList.add('bar-label');
        dayLabel.textContent = item.day;
        
        const valueLabel = document.createElement('div');
        valueLabel.classList.add('bar-value');
        valueLabel.textContent = item.contributions;
        
        // Assemble the bar
        barContainer.appendChild(valueLabel);
        barContainer.appendChild(bar);
        barContainer.appendChild(dayLabel);
        
        // Add to chart
        chart.appendChild(barContainer);
    });
    
    chartContainer.appendChild(chart);
    container.appendChild(chartContainer);
    
    // Add CSS for the chart
    const style = document.createElement('style');
    style.textContent = `
        .chart-container {
            margin: 2rem 0;
            text-align: center;
        }
        
        .bar-chart {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            height: 200px;
            margin-top: 1rem;
            padding: 0 10px;
        }
        
        .bar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 40px;
        }
        
        .bar {
            width: 30px;
            border-radius: 4px 4px 0 0;
            transition: height 0.3s ease;
        }
        
        .bar-label {
            margin-top: 5px;
            font-size: 12px;
        }
        
        .bar-value {
            font-size: 12px;
            margin-bottom: 5px;
        }
    `;
    
    document.head.appendChild(style);
}