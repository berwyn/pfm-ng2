import { Component, Input } from '@angular/core';
import { NgFor, NgIf }  from '@angular/common';

export enum TabType {
	Standard,
	Sidebar
}

@Component({
	selector: 'pfm-tabs',
	template: `
		<ul class="pfm-tabs" [style]="{{type | lowercase}}">
			<li *ngFor="#tab of tabs" (click)="selectTab(tab)">
				{{ tab.title }}
			</li>
		</ul>
		<ng-content *ngIf="shouldShowContent()"></ng-content>
	`,
	directives: [NgFor, NgIf]
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
	
	shouldShowContent(): boolean {
		return this.type === TabType.Standard;
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
