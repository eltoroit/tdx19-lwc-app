import { LightningElement, track } from 'lwc';

export default class HelloWebComponent extends LightningElement {
	@track greeting = 'Trailblazer';
	currentDate = new Date().toDateString();

	handleGreetingChange(event) {
		this.greeting = event.target.value;
	}
	get capitalizedGreeting() {
		return `Hello ${this.greeting.toUpperCase()}!`;
	}
}