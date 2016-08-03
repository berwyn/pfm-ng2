import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgFor } from '@angular/common';

import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
	selector: 'pfm-sidebar',
	template: require('./sidebar.component.html'),
	styles: [require('./sidebar.component.css')],
	directives: [ROUTER_DIRECTIVES, MD_ICON_DIRECTIVES, MD_LIST_DIRECTIVES],
	providers: [MdIconRegistry]
})
export class SidebarComponent{

	navItems: any[] = [
		{ title: 'Home', icon: 'home', routerLink: '/' },
		{ title: 'Discover', icon: 'library_music', routerLink: '/discover' },
		{ title: 'About', icon: 'info', routerLink: '/about' },
	];

}
