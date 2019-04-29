import Sortable from 'sortablejs';
import Column from './column';
import Proxy from './proxy';

export default class Board {
	constructor(data) {
		this.name = 'Kanban Board';

		this.createColumn = this.createColumn.bind(this);
		this.renderColumn = this.renderColumn.bind(this);

		this.element = document.querySelector('#board .column-container');
		document.querySelector('#board .create-column')
			.addEventListener('click', this.createColumn);

		if (data && data.length) {
			data.forEach(this.renderColumn);
		}
	}

	async createColumn() {
		const name = prompt('Enter a column name');
		const id = (await Proxy.createColumn(name)).id;
		this.renderColumn({ id, name });
	}

	renderColumn(data) {
		const column = new Column(data);
      	this.element.appendChild(column.element);
      	this.initSortable(column.id);
	}

	initSortable(id) {
		var el = document.getElementById(id);
		Sortable.create(el, {
		  group: 'kanban',
		  sort: true
		});
	}
}