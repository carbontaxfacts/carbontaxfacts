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
                'rgba(217, 83, 79, 0.6)',
                'rgba(217, 83, 79, 0.8)'
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
var data_FandGS_29 = {
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

// Howard and Sylvan - 2015
var data_HandS = {
    labels: [
        "Regardless of the actions other countries have taken thus far",
        "Only if other major emitters enact policies to reduce their emissions",
        "Only if it can enter into a multilateral emissions reduction agreement with some countries",
        "Only if every country commits to reducing emissions through a global agreement",
        "Under no circumstances",
        "No opinion",
        "No response"
    ],
    datasets: [
        {
            data: [77, 6, 10, 2, 1, 3, 1],
            backgroundColor: [
                'rgba(92, 184, 92, 1.0)',
                'rgba(92, 184, 92, 0.8)',
                'rgba(92, 184, 92, 0.6)',
                'rgba(92, 184, 92, 0.4)',
                'rgba(217, 83, 79, 0.8)',
                'rgba(100, 100, 100, 1.0)',
                'rgba(200, 200, 200, 1.0)',
            ]
        }
    ]
};

// Question 29
var data_stanford = {
    labels: ["Support", "Oppose", "No Response"],
    datasets: [
        {
            data: [67, 31, 2],
            backgroundColor: [
                'rgba(92, 184, 92, 1.0)',
                'rgba(217, 83, 79, 0.8)',
            ]
        }
    ]
}

// Question 29
var data_FandGS_29 = {
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

// Global options
Chart.defaults.global.tooltips.bodyFontSize = 18;


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
    type: 'pie', data: data_FandGS_29,
    options: {
        cutoutPercentage: 50,
        legend: {display: false}
    }
});

var chart_3 = new Chart($('#pie_3'),
{
    type: 'pie', data: data_HandS,
    options: {
        cutoutPercentage: 50,
        legend: {display: false}
    }
});

var chart_3 = new Chart($('#pie_4'),
{
    type: 'pie', data: data_stanford,
    options: {
        cutoutPercentage: 50,
        legend: {display: false}
    }
});

var chart_3 = new Chart($('#pie_5'),
{
    type: 'pie', data: data_ypcc_cfd,
    options: {
        cutoutPercentage: 50,
        legend: {display: false}
    }
});
