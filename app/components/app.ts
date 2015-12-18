import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { SidebarComponent } from './sidebar';
import { HomePage } from './home';
import { DiscoverPage } from './discover';

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
	{path: '/', 		name: 'Home', 		component: HomePage},
	{path: '/discover', name: 'Discover', 	component: DiscoverPage}
])
export class AppComponent{}