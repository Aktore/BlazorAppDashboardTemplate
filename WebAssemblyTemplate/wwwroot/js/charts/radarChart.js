// wwwroot/js/charts/radarChart.js
import { renderChart } from '../dashboardCharts.js/index.js';

export function renderRadarChart(ctxId, criteria, scores) {
    const data = {
        labels: criteria,
        datasets: [{
            label: 'Process Efficiency',
            data: scores,
            backgroundColor: 'rgba(46,204,113,0.2)',
            borderColor: 'rgba(46,204,113,1)',
            pointBackgroundColor: '#27ae60'
        }]
    };

    const options = { title: 'Efficiency by Criteria' };

    renderChart(ctxId, 'radar', data, options);
}
