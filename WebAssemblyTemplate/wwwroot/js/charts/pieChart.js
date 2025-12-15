// wwwroot/js/charts/pieChart.js

window.renderPieChart = (ctxId, labels, values) => {
    const data = {
        labels: labels,
        datasets: [{
            data: values,
            backgroundColor: [
                '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c'
            ]
        }]
    };

    const options = { title: 'Project Status Distribution' };

    if (window.renderChart) {
        window.renderChart(ctxId, 'doughnut', data, options);
    } else {
        console.error('renderChart функциясы табылмады.');
    }
};
