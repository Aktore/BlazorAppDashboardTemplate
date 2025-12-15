// wwwroot/js/barChart.js

// Chart объектілерін сақтау үшін глобал dictionary
window.charts = window.charts || {};

window.renderBarChart = (ctxId, labels, values, title) => {
    const ctx = document.getElementById(ctxId);
    if (!ctx) {
        console.error("Canvas not found:", ctxId);
        return;
    }

    // Бұрынғы чарт бар болса жою
    if (window.charts[ctxId] instanceof Chart) {
        window.charts[ctxId].destroy();
    }

    // Жаңа Chart объектісін жасау және сақтау
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
                legend: { display: false },
                title: { display: !!title, text: title }
            }
        }
    });
};
