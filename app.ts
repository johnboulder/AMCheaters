/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

@Component({
	selector: 'my-app'
})

@View({
	template: `
	<h1 *ng-if="isSearched">{{ name }}, is a Cheater!!!</h1>
	<input #nametext (keyup)="doneTyping($event)">
	<button (click)="searchName(nametext.value)">Search Name</button>`,
	directives: [NgFor, NgIf]
	// template: '<h1>Hello {{ name }}</h1>' 
})

class CheaterComponent {
	name: string;
	isSearched: boolean;
	
	constructor() {
		this.name = 'Alice';
		this.isSearched = false;
	}
	
	searchName(sName: string) {
		this.name = sName;
		this.isSearched = true;
	}
	
	doneTyping($event) {
		if($event.which === 13) {
			this.searchName($event.target.value);
			$event.target.value = null;
		}
	}
}

bootstrap(CheaterComponent);