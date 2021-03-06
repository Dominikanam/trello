import { generateTemplate } from './templatesHelper';
import CardTemplate from '../templates/card.mustache';
import Proxy from './proxy';

export default class Card {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.element = generateTemplate(CardTemplate, { name: this.name }, 'li');

		this.removeCard = this.removeCard.bind(this);

		const card = this.element.querySelector('.card');
		card.querySelector('.btn-delete').addEventListener('click', this.removeCard);
	}

	async removeCard() {
		await Proxy.removeCard(this.id);
		this.element.parentNode.removeChild(this.element);
	}
}