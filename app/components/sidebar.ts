import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';

@Component({
	selector: 'pfm-sidebar',
	template: `
		<div class="pfm-sidebar">
			<div class="pfm-logo">
				<img class="pfm-logo-image" src="/images/logo-white.svg" alt="Pony.fm" />
			</div>
			<nav role="nav" class="pfm-sidebar-nav">
				<ul class="pfm-sidebar-navlist">
					<li>
						<a class="nav-item material-title" [routerLink]="['Home']">Home</a>
					</li>
					<li>
						<a class="nav-item material-title" [routerLink]="['Discover']">Discover</a>
					</li>
					<li>
						<a class="nav-item material-title" [routerLink]="['About']">About</a>
					</li>
				</ul>
			</nav>
		</div>
	`,
	styles: [
		`.pfm-sidebar {
			background-color: #515151;
			color: rgba(255,255,255,0.87);
			height: 100vh;
			width: 280px;
			position: fixed;
		}`,
		`.pfm-sidebar .pfm-logo {
			background-color: #84528A;
			text-align: center;
		}`,
		`.pfm-sidebar .pfm-logo::before {
			content: '';
			display: inline-block;
			height: 100%;
			margin-left: -0.25em;
			vertical-align: middle;
		}`,
		`.pfm-sidebar .pfm-logo-image {
			display: inline-block;
			padding: 2em 1em 3em;
			vertical-align: middle;
			width: 100%;
		}`,
		`.pfm-sidebar-navlist {
			font-size: 1.25em;
			list-style-type: none;
			padding: 1em;
		}`,
		`.pfm-sidebar-navlist .nav-item {
			text-decoration: none;
		}`,
		`.pfm-sidebar-navlist .nav-item:visited {
			color: rgba(255,255,255,0.87);
		}`,
	],
	directives: [RouterLink]
})
export class SidebarComponent{}