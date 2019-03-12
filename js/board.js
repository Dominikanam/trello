import Sortable from 'sortablejs';
import Column from './column';

export default class Board {
	constructor(data) {
		this.name = 'Kanban Board';

		this.addColumn = this.addColumn.bind(this);

		this.element = document.querySelector('#board .column-container');
		document.querySelector('#board .create-column').addEventListener('click', this.addColumn);

		if (data && data.length) {
			data.forEach(this.addColumn);
		}
	}

	addColumn(data) {
		const column = new Column(data || prompt('Enter a column name'));
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