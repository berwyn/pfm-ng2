import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { SidebarComponent } from './sidebar';
import { HomePage } from './home';
import { DiscoverPage } from './discover';
import { AboutPage } from './about';

@Component({
	selector: 'pfm-app',
	template: `
		<div class="pfm-app">
			<pfm-sidebar></pfm-sidebar>
			<div class="content-area">
				<router-outlet></router-outlet>
			</div>
		</div>
	`,
	styles: [
		`.pfm-app {
			display: flex;
			flex-direction: row;
		}
		
		.content-area {
			margin-left: 285px;,
		}
		
		@media screen and (max-width: 900px) {
			.content-area {
				margin-left: 48px;
			}
		}`,
	],
	directives: [SidebarComponent, RouterOutlet]
})
@RouteConfig([
	{path: '/', 		name: 'Home', 		component: HomePage},
	{path: '/discover', name: 'Discover', 	component: DiscoverPage},
	{path: '/about',	name: 'About',		component: AboutPage},
])
export class AppComponent{}