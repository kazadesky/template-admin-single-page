const ctx = document.querySelector(".activity-chart")
const ctx2 = document.querySelector(".prog-chart")

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Time',
            data: [8, 6, 7, 6, 10, 8, 4],
            backgroundColor: '#1e293b',
            borderWidth: 3,
            borderRadius: 6,
            hoverBackgroundColor: '#60a5fa',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                border: {
                    display: true,
                },
                grid: {
                    display: true,
                    color: '#1e293b',
                }
            },
            y: {
                ticks: {
                    display: false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
})

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Des'],
        datasets: [
            {
                label: 'Class GPA',
                data: [6, 10, 14, 8, 8, 6, 7, 6, 10, 8, 4, 5],
                borderColor: '#0891b2',
                tension: 0.4
            },
            {
                label: 'Aver GPA',
                data: [5, 9, 10, 8, 6, 9, 14, 12, 8, 10, 9, 4],
                borderColor: '#ca8a04',
                tension: 0.4
            },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                ticks: {
                    display: false,
                },
                border: {
                    display: false,
                    dash: [5, 5]
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
})