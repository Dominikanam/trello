import { generateTemplate } from './templatesHelper';
import ColumnTemplate from '../templates/column.mustache';
import Card from './card';
import Proxy from './Proxy';

export default class Column {
	constructor(data) {
		this.id = data.id;
		this.name = data.name || data;
		this.element = generateTemplate(ColumnTemplate, { name: this.name, id: this.id });

		this.removeColumn = this.removeColumn.bind(this);
		this.createCard = this.createCard.bind(this);
		this.renderCard = this.renderCard.bind(this);

		const column = this.element.querySelector('.column');

		column.querySelector('.btn-delete')
			.addEventListener('click', this.removeColumn);
		column.querySelector('.add-card')
			.addEventListener('click', this.createCard);

		if (data && data.cards && data.cards.length) {
			data.cards.forEach(this.renderCard);
		}
	}

	async createCard() {
		const name = prompt("Enter the name of the card");
		const card = await Proxy.createCard(name);
		this.renderCard(card);
	}

	renderCard(data) {
		const card = new Card(data);
		this.element.querySelector('ul').appendChild(card.element);
	}

	async removeColumn() {
		await Proxy.removeColumn(this.id);
		this.element.parentNode.removeChild(this.element);
	}
}