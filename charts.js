/**************************
* Datasets
**************************/

// YPCCC Climate Opinion Poll Spring 2016
// Support for upstream revenue-neutral carbon tax among all US voters
var data_ypcc_cfd = {
	labels: ["Strongly Support", "Somewhat Support", "Somewhat Oppose", "Strongly Oppose"],
	datasets: [
		{
			data: [25, 43, 17, 14]
		}
	]
}

// Stanford / Resources for the Future - January 2015
var data_2 = {
	labels: ["Support", "Oppose", "No Answer"],
	datasets: [
		{
			data: [67, 31, 2]
		}
	]
}

/*
* Chart definitions
*/
var chart_1 = new Chart($('#pie_1'), 
{
	type: 'pie', data: data_ypcc_cfd,
	options: {
		cutoutPercentage: 50,
		legend: {position: 'right'}
	}
})


var chart_2 = new Chart($('#pie_2'), {type: 'pie', data: data_2})