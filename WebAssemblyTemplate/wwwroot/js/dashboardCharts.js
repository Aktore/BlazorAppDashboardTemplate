// Глобал dictionary барлық Chart объектілерін сақтау үшін
window.charts = window.charts || {};

/* === Бар диаграмма === */
window.renderBarChart = (ctxId, labels, values, title) => {
    const ctx = document.getElementById(ctxId);
    if (!ctx) return console.error("Canvas not found:", ctxId);

    if (window.charts[ctxId] instanceof Chart) {
        window.charts[ctxId].destroy();
    }

    window.charts[ctxId] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: title || "Data",
                data: values,
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' },
                title: { display: !!title, text: title },
                datalabels: {   // көрсеткіш сандар
                    color: '#fff',
                    font: { weight: 'bold' },
                    formatter: (value) => value
                }
            }
        },
        plugins: [ChartDataLabels]
    });
};

/* === Pie/Doughnut диаграмма === */
window.renderPieChart = (ctxId, labels, values, title) => {
    const ctx = document.getElementById(ctxId);
    if (!ctx) return console.error("Canvas not found:", ctxId);

    if (window.charts[ctxId] instanceof Chart) {
        window.charts[ctxId].destroy();
    }

    window.charts[ctxId] = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: top, display: true },
                title: { display: !!title, text: title },
                datalabels: {   // көрсеткіш сандар
                    anchor: 'end',
                    align: 'end',
                    color: '#000',
                    font: { weight: 'bold' },
                    formatter: (value, context) => {
                        // label + value бірге
                        const label = context.chart.data.labels[context.dataIndex];
                        return `${label}: ${value}`;
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
};

// wwwroot/js/dashboardCharts.js
window.renderTimelineChart = (ctxId, labels, values, title) => {
    const ctx = document.getElementById(ctxId);
    if (!ctx) return console.error("Canvas not found:", ctxId);

    if (window.charts[ctxId] instanceof Chart) {
        window.charts[ctxId].destroy();
    }

    window.charts[ctxId] = new Chart(ctx, {
        type: 'line',   // line chart
        data: {
            labels: labels,       // X осі (мысалы, күндер немесе тапсырмалар)
            datasets: [{
                label: title || "Timeline",
                data: values,     // Y осі мәндері
                borderColor: '#2ecc71',
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                fill: true,
                tension: 0.3       // сызық қисықтығы
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
                title: { display: !!title, text: title }
            },
            scales: {
                x: { title: { display: true, text: 'Time' } },
                y: { title: { display: true, text: 'Value' }, beginAtZero: true }
            }
        },
        plugins: [ChartDataLabels]
    });
};

