const apiCoin = 'http://api.coindesk.com/v1/bpi/historical/close.json';

const printTheChart = stockData => {
    const dailyData =  stockData.data.bpi;
    console.log({dailyData});
    const stockDates = Object.keys(dailyData);
    console.log({stockDates});
    const stockCoin = Object.values(dailyData)
    console.log(stockCoin);
    
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: stockDates,
            datasets: [
                {
                    label: 'Stock Chart',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: stockCoin
                }

            ]
        }
    })
}

let input = document.createElement('input');
input.setAttribute('type', 'date');
document.body.appendChild(input);



let input2 = document.createElement('input');
input2.setAttribute('type', 'date');
document.body.appendChild(input2);



axios
    .get(apiCoin)
    .then(response => {
        console.log(response);
        printTheChart(response);
    })
    .catch(err => {
        console.log('Error while getting the data', err);
    })


