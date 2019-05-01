const baseUrl = 'https://cors-anywhere.herokuapp.com/https://kodilla.com/pl/bootcamp-api';

export default {
	clientId: '3701',
	authToken: 'dc034be924f754702e8307cb7b884558',
	baseUrl,
	boardGet: `${baseUrl}/board`,
	columnPost: `${baseUrl}/column`,
	columnDelete: `${baseUrl}/column/<columnId>`,
	cardPost: `${baseUrl}/card`,
	cardDelete: `${baseUrl}/card/<cardId>`
};