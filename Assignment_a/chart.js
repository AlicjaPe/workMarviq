
// here is some code for chart, same as in the index.html but i was not sure where should it be.. so i create that file.

require(['moment'], function () {
            require(['chartjs'], function (Chart) {
                var ctx = document.getElementById('myChart').getContext('2d');
                require(['node-modules/chart.js/dist/Chart.min.js'], function (Chart) {
                    var chart = new Chart(ctx, {
                        // The type of chart we want to create
                        type: 'line',

                        // The data for our dataset
                        data: {
                            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'
                            ],
                            datasets: [{
                                label: 'My First dataset',
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: [0, 10, 5, 2, 20, 30, 45]
                            }]
                        },

                        // Configuration options go here
                        options: {}
                    });
                });
            });


            function beforePrintHandler() {
                for (var id in Chart.instances) {
                    Chart.instances[id].resize();
                }
            });