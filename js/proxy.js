import config from './config.js';

class Proxy {
	constructor() {
		this.headers = {
			'X-Client-Id': config.clientId,
			'X-Auth-Token': config.authToken
		};
	}

	async sendRequest(url, method, body) {
		const options = {
			body,
			headers: this.headers,
			method,
		};

		console.log(options);

		try {
			const response = await fetch(url, options);
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	}

	async getBoard() {
		return await this.sendRequest(config.boardGet);
	}

	async createColumn(name) {
		const data = new FormData();
		data.append('name', name);
		return await this.sendRequest(config.columnPost, 'POST', data);
	}

	async removeColumn(id) {
		const url = config.columnDelete.replace('<columnId>', id);
		return await this.sendRequest(url, 'DELETE');
	}

	async createCard(name, columnId) {
		console.log(name, columnId);
		const data = new FormData();
		data.append('name', name);
		data.append('bootcamp_kanban_column_id', columnId);
		return await this.sendRequest(config.cardPost, 'POST', data);
	}

	async removeCard(id) {
		const url = config.cardDelete.replace('<cardId>', id);
		return await this.sendRequest(url, 'DELETE');
	}
}

export default new Proxy();