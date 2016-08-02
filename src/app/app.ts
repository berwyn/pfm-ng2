import { Component, ViewChild } from '@angular/core';
import { RouteConfig, RouterOutlet, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';

import { SidebarComponent } from './navigation/sidebar.component';

import { HomePage } from './core/home.component';
import { DiscoverPage } from './core/discover.component';
import { AboutPage } from './core/about.component';

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
	directives: [SidebarComponent, RouterOutlet, MD_SIDENAV_DIRECTIVES],
	providers: [TrackStore, ROUTER_PROVIDERS]
})
@RouteConfig([
	{path: '/', 			name: 'Home', 		component: HomePage},
	{path: '/discover/...', name: 'Discover', 	component: DiscoverPage},
	{path: '/about',		name: 'About',		component: AboutPage},
])
export class AppComponent {

	@ViewChild('start') sideNav: MdSidenav;

}
