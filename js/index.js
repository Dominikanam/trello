import Board from './board';
import data from '../data/columns';

var myHeaders = {
	'Content-Type': 'application/json',
	'X-Client-Id': '3701',
	'X-Auth-Token': 'dc034be924f754702e8307cb7b884558'
};

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';

document.addEventListener('DOMContentLoaded', function() {
	fetch(baseUrl + '/board', { headers: myHeaders })
		.then(function(resp) {
			return resp.json();
		})
		.then(function(resp) {
			// INITIALIZING BOARD
			new Board(resp.columns);
		});
});