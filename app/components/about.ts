import { Component } from 'angular2/core';
import { NgIf } from 'angular2/common';

@Component({
	template: `
		<div class="pfm-about">
			<div class="pfm-tabs">
				<div class="pfm-tab" (click)="setTabIndex(0)">About Pony.fm</div>
				<div class="pfm-tab" (click)="setTabIndex(1)">FAQ</div>
				<div class="pfm-tab" (click)="setTabIndex(2)">MLP Forums Advertising Programme</div>
			</div>
			<div class="about-content" *ngIf="tabIndex === 0">
				<h1>About</h1>
			</div>
			<div class="faq-content" *ngIf="tabIndex === 1">
				<h1>FAQ</h1>
			</div>
			<div class="advertising-content" *ngIf="tabIndex === 2">
				<h1>Advertising</h1>
			</div>
		</div>
	`,
	styles: [
		`.pfm-tab {
			height: 2em;
			display: inline-block;
		}`,
	],
	directives: [NgIf]
})
export class AboutPage {
	
	public tabIndex: number;
	
	constructor() {
		this.tabIndex = 0;
	}
	
	setTabIndex(index: number) {
		this.tabIndex = index;
	}
	
}