import Board from './board';
import Proxy from './proxy';

document.addEventListener('DOMContentLoaded', async function() {
	const data = await Proxy.getBoard();
	console.log(data);
	new Board(data.columns);
});