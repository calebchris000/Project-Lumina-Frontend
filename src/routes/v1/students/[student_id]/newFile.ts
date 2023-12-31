FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'stackedcolumn2d',
        renderAt: 'chart-container',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "caption": "Revenue split by product category",
                "subCaption": "For current year",
                "xAxisname": "Quarter",
                "yAxisName": "Revenues (In USD)",
                //Showing the Cumulative Sum of stacked data
                "showSum": "1",
                "numberPrefix": "$",
                "theme": "fusion"
            },
            "categories": [{
                "category": [{
                    "label": "Q1"
                },
                {
                    "label": "Q2"
                },
                {
                    "label": "Q3"
                },
                {
                    "label": "Q4"
                }
                ]
            }],
            "dataset": [{
                "seriesname": "Food Products",
                "data": [{
                    "value": "11000"
                },
                {
                    "value": "15000"
                },
                {
                    "value": "13500"
                },
                {
                    "value": "15000"
                }
                ]
            },
            {
                "seriesname": "Non-Food Products",
                "data": [{
                    "value": "11400"
                },
                {
                    "value": "14800"
                },
                {
                    "value": "8300"
                },
                {
                    "value": "11800"
                }
                ]
            }
            ]
        }
    }).render();
});
