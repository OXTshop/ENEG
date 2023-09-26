let currentChart = null;

function mostrarGrafico(id) {
    if (currentChart) {
        currentChart.style.display = 'none';
    }

    const chartContainer = document.getElementById(id + '-container');
    chartContainer.style.display = 'block';

    currentChart = chartContainer;

    const ctx = document.getElementById(id).getContext('2d');
    let data;
    let suggestedMax;

    if (id === 'chart1') {
        // Se for o chart1, use os dados acumulados dos outros gráficos
        data = chart1Data;
        suggestedMax = 600;
    } else if (id === 'chart2' || id === 'chart3' || id === 'chart4') {
        data = [68, 79, 74, 78, 79, 76, 75, 78, 72];
        suggestedMax = 300;
    }

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
            datasets: [{
                label: 'Consumo',
                data: data,
                backgroundColor: 'rgba(75, 150, 2, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: suggestedMax
                }
            }
        }
    });
}

function alterarEstado(dispositivo, ligado) {
    // Função para alterar o estado dos dispositivos (ligar ou desligar)
    if (ligado) {
        alert(`Ligando ${dispositivo}`);
    } else {
        alert(`Desligando ${dispositivo}`);
    }
}

// Calcular a soma total dos valores dos gráficos 2, 3 e 4 para o chart1
const chart2Data = [12, 14, 8, 10, 9, 13, 14, 12, 8];
const chart3Data = [68, 79, 74, 78, 79, 76, 75, 78, 72];
const chart4Data = [68, 79, 7, 78, 79, 76, 75, 78, 72];
const chart1Data = chart2Data.map((value, index) => value + chart3Data[index] + chart4Data[index]);

// Mostrar o chart1 inicialmente
mostrarGrafico('chart1');
