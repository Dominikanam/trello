import { randomString } from './stringHelper';
import { generateTemplate } from './templatesHelper';
import CardTemplate from '../templates/card.mustache';

export default class Card {
	constructor(data) {
		this.id = randomString();
		this.description = data.description || data;
		this.element = generateTemplate(CardTemplate, { description: this.description }, 'li');

		this.removeCard = this.removeCard.bind(this);

		const card = this.element.querySelector('.card');
		card.querySelector('.btn-delete').addEventListener('click', this.removeCard);
	}

	removeCard() {
		this.element.parentNode.removeChild(this.element);
	}
}