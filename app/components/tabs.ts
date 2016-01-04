import { Component, Input } from 'angular2/core';
import { NgFor }  from 'angular2/common';

export enum TabType {
	Standard,
	Sidebar
}

@Component({
	selector: 'pfm-tabs',
	template: `
		<ul>
			<li *ngFor="#tab of tabs" (click)="selectTab(tab)">
				{{ tab.title }}
			</li>
		</ul>
		<ng-content></ng-content>
	`,
	directives: [NgFor]
})
export class TabsComponent {
	
	@Input()
	type: TabType = TabType.Standard;
	tabs: TabComponent[] = [];
	
	addTab(tab: TabComponent) {
		if(this.tabs.length === 0) {
			tab.active = true;
		}
		this.tabs.push(tab);
	}
	
	selectTab(tab: TabComponent) {
		this.tabs.forEach(t => t.active = (t === tab))
	}
}

@Component({
	selector: 'pfm-tab',
	template: `
		<div [hidden]="!active">
			<ng-content></ng-content>
		</div>
	`
})
export class TabComponent {
	
	@Input()
	title: string;
	active: boolean = false;
	
	constructor(tabs: TabsComponent) {
		tabs.addTab(this);
	}
}