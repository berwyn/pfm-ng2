import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { NgFor } from '@angular/common';

import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
	selector: 'pfm-sidebar',
	template: require('./sidebar.component.html'),
	styles: [require('./sidebar.component.css')],
	directives: [RouterLink, MD_ICON_DIRECTIVES, MD_LIST_DIRECTIVES],
	providers: [MdIconRegistry]
})
export class SidebarComponent{

	navItems: any[] = [
		{ title: 'Home', icon: 'home', routerLink: 'Home' },
		{ title: 'Discover', icon: 'library_music', routerLink: 'Discover' },
		{ title: 'About', icon: 'info', routerLink: 'About' },
	];

}
