import { generateTemplate } from './templatesHelper';
import { randomString } from './stringHelper';
import ColumnTemplate from '../templates/column.mustache';
import Card from './card';

export default class Column {
	constructor(data) {
		this.id = randomString();
		this.name = data.name || data;
		this.element = generateTemplate(ColumnTemplate, { name: this.name, id: this.id });

		this.removeColumn = this.removeColumn.bind(this);
		this.addCard = this.addCard.bind(this);

		const column = this.element.querySelector('.column');

		column.querySelector('.btn-delete')
			.addEventListener('click', () => this.removeColumn());
		column.querySelector('.add-card')
			.addEventListener('click', () => this.addCard());

		if (data && data.cards && data.cards.length) {
			data.cards.forEach(this.addCard);
		}
	}

	addCard(data) {
		const card = new Card(data || prompt("Enter the name of the card"));
		this.element.querySelector('ul').appendChild(card.element);
	}

	removeColumn() {
		this.element.parentNode.removeChild(this.element);
	}
}