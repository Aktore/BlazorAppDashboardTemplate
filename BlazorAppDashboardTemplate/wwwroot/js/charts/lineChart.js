// wwwroot/js/charts/lineChart.js
import { renderChart } from '../dashboardCharts.js/index.js';

export function renderLineChart(ctxId, labels, values, lineLabel = 'Trend') {
    const data = {
        labels: labels,
        datasets: [{
            label: lineLabel,
            data: values,
            borderColor: 'rgba(255,99,132,1)',
            fill: false,
            tension: 0.2
        }]
    };

    const options = { title: `${lineLabel} Over Time` };

    renderChart(ctxId, 'line', data, options);
}
