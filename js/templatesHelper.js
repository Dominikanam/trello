import Mustache from 'mustache';

export const generateTemplate = (template, data, basicElement) => {
	var element = document.createElement(basicElement || 'div');

	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);

	return element;
};