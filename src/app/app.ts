import { Component, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';

import { SidebarComponent } from './navigation/sidebar.component';
import { TrackStore } from './tracks/track.store';

@Component({
	selector: 'pfm-app',
	template: `
		<md-sidenav-layout>
			<md-sidenav #start mode="side" [opened]="true">
				<pfm-sidebar></pfm-sidebar>
			</md-sidenav>
			<router-outlet></router-outlet>
		</md-sidenav-layout>
	`,
	styles: [require('./app.css')],
	directives: [SidebarComponent, ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES],
	providers: [TrackStore]
})
export class AppComponent {

	@ViewChild('start') sideNav: MdSidenav;

}
