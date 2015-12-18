import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { SidebarComponent } from './sidebar';
import { HomeComponent } from './home';
import { DiscoverComponent } from './discover';

@Component({
	selector: 'pfm-app',
	template: `
		<div class="pfm-app">
			<pfm-sidebar></pfm-sidebar>
			<router-outlet></router-outlet>
		</div>
	`,
	styles: [`
		.pfm-app {
			display: flex;
			flex-direction: row;
		}
	`],
	directives: [SidebarComponent, RouterOutlet]
})
@RouteConfig([
	{path: '/', 		name: 'Home', 		component: HomeComponent},
	{path: '/discover', name: 'Discover', 	component: DiscoverComponent}
])
export class AppComponent{}