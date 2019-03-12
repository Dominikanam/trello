import Board from './board';
import data from '../data/columns';

document.addEventListener('DOMContentLoaded', function() {
	// INITIALIZING BOARD
	new Board(data);
});