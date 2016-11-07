Chart.pluginService.register({
    beforeRender: function (chart) {
        if (chart.config.options.showAllTooltips) {
            // create an array of tooltips
            // we can't use the chart tooltip because there is only one tooltip per chart
            chart.pluginTooltips = [];
            chart.config.data.datasets.forEach(function (dataset, i) {
                chart.getDatasetMeta(i).data.forEach(function (sector, j) {
                    chart.pluginTooltips.push(new Chart.Tooltip({
                        _chart: chart.chart,
                        _chartInstance: chart,
                        _data: chart.data,
                        _options: chart.options.tooltips,
                        _active: [sector]
                    }, chart));
                });
            });

            // turn off normal tooltips
            chart.options.tooltips.enabled = false;
        }
    },
    afterDraw: function (chart, easing) {
        if (chart.config.options.showAllTooltips) {
            // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
            if (!chart.allTooltipsOnce) {
                if (easing !== 1)
                    return;
                chart.allTooltipsOnce = true;
            }

            // turn on tooltips
            chart.options.tooltips.enabled = true;
            Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
                tooltip.initialize();
                tooltip.update();
                // we don't actually need this since we are not animating tooltips
                tooltip.pivot();
                tooltip.transition(easing).draw();
            });
            chart.options.tooltips.enabled = false;
        }
    }
})

/**************************
* Datasets
**************************/

// YPCCC Climate Opinion Poll Spring 2016
// Support for upstream revenue-neutral carbon tax among all US voters
var data_ypcc_cfd = {
    labels: ["Strongly Support", "Somewhat Support", "Somewhat Oppose", "Strongly Oppose"],
    datasets: [
        {
            data: [25, 43, 17, 14],
            backgroundColor: [
                'rgba(92, 184, 92, 1.0)',
                'rgba(92, 184, 92, 0.8)',
                'rgba(217, 83, 79, 0.4)',
                'rgba(217, 83, 79, 0.6)'
            ]
        }
    ]
}

var data_ypcc_ghg = {
    labels: ["Regardless of What Other Countries Do", "Only if Other Industrialized Countries Reduce their Emissions", "Only if Other Industrialized Countries and Developing Countries Reduce their Emissions", "The U.S. Should Not Reduce Its Emissions", "Don't Know"],
    datasets: [
        {
            data: [65, 3, 9, 7, 17],
            backgroundColor: [
                'rgba(92, 184, 92, 1.0)',
                'rgba(92, 184, 92, 0.8)',
                'rgba(92, 184, 92, 0.6)',
                'rgba(217, 83, 79, 0.8)'
            ]
        }]
}

// Consensus Among Economists - Fuller and Geide-Stevenson
// Question 29
var data_2 = {
    labels: ["Agree", "Agree with Provisions", "Disagree", "No Response"],
    datasets: [
        {
            data: [59.0, 19.7, 19.4, 1.6],
            backgroundColor: [
                'rgba(92, 184, 92, 1.0)',
                'rgba(92, 184, 92, 0.8)',
                'rgba(217, 83, 79, 0.8)',
            ]
        }
    ]
}

/*
* Chart definitions
*/
var chart_1 = new Chart($('#pie_1'), 
{
    type: 'pie', data: data_ypcc_ghg,
    options: {
        cutoutPercentage: 50,
        legend: {display: false}
    }
});

var chart_2 = new Chart($('#pie_2'),
{
    type: 'pie', data: data_2,
    options: {
        cutoutPercentage: 50,
        legend: {display: false}
    }
});
