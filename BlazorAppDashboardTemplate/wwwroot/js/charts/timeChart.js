window.timeChartInterop = {
    myChart: null,
    Utils: {
        CHART_COLORS: {
            red: 'rgb(255, 99, 132)',
            blue: 'rgb(54, 162, 235)',
            green: 'rgb(75, 192, 192)'
        },
        transparentize: (color, opacity) => {
            const alpha = 1 - opacity;
            return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
        },
        rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        newDate: (days) => {
            const d = new Date();
            d.setDate(d.getDate() + days);
            return d;
        },
        newDateString: (days) => {
            const d = new Date();
            d.setDate(d.getDate() + days);
            return d.toISOString().split('T')[0];
        },
        numbers: ({ count, min, max }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
    },
    initChart: function () {
        const UtilsObj = this.Utils;

        const DATA_COUNT = 7;
        const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

        const data = {
            labels: [UtilsObj.newDate(0), UtilsObj.newDate(1), UtilsObj.newDate(2), UtilsObj.newDate(3), UtilsObj.newDate(4), UtilsObj.newDate(5), UtilsObj.newDate(6)],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: UtilsObj.transparentize(UtilsObj.CHART_COLORS.red, 0.5),
                    borderColor: UtilsObj.CHART_COLORS.red,
                    fill: false,
                    data: UtilsObj.numbers(NUMBER_CFG),
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: UtilsObj.transparentize(UtilsObj.CHART_COLORS.blue, 0.5),
                    borderColor: UtilsObj.CHART_COLORS.blue,
                    fill: false,
                    data: UtilsObj.numbers(NUMBER_CFG),
                },
                {
                    label: 'Dataset with point data',
                    backgroundColor: UtilsObj.transparentize(UtilsObj.CHART_COLORS.green, 0.5),
                    borderColor: UtilsObj.CHART_COLORS.green,
                    fill: false,
                    data: [
                        { x: UtilsObj.newDateString(0), y: UtilsObj.rand(0, 100) },
                        { x: UtilsObj.newDateString(5), y: UtilsObj.rand(0, 100) },
                        { x: UtilsObj.newDateString(7), y: UtilsObj.rand(0, 100) },
                        { x: UtilsObj.newDateString(15), y: UtilsObj.rand(0, 100) },
                    ]
                }
            ]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                plugins: { title: { display: true, text: 'Chart.js Time Scale' } },
                scales: {
                    x: { type: 'time', time: { tooltipFormat: 'DD T' }, title: { display: true, text: 'Date' } },
                    y: { title: { display: true, text: 'value' } }
                },
            }
        };

        const ctx = document.getElementById('timeChart').getContext('2d');
        this.myChart = new Chart(ctx, config);
    },
    randomizeChart: function () {
        if (!this.myChart) return;
        this.myChart.data.datasets.forEach(dataset => {
            dataset.data = dataset.data.map(d => typeof d === 'object' ? { x: d.x, y: Math.floor(Math.random() * 101) } : Math.floor(Math.random() * 101));
        });
        this.myChart.update();
    }
};
