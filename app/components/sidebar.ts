import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';

@Component({
	selector: 'pfm-sidebar',
	template: `
		<div class="pfm-sidebar">
			<div class="pfm-logo">
				<img class="pfm-logo-image" src="/images/logo-white.svg" alt="Pony.fm" />
				<i class="material-icons pfm-menu">menu</i>
			</div>
			<nav role="nav" class="pfm-sidebar-nav">
				<ul class="pfm-sidebar-navlist">
					<li>
						<a class="nav-item" [routerLink]="['Home']">
							<i class="material-icons nav-icon">home</i>
							<span class="material-title nav-text">Home</span>
						</a>
					</li>
					<li>
						<a class="nav-item" [routerLink]="['Discover']">
							<i class="material-icons nav-icon">library_music</i>
							<span class="material-title nav-text">Discover</span>
						</a>
					</li>
					<li>
						<a class="nav-item" [routerLink]="['About']">
							<i class="material-icons nav-icon">info</i>
							<span class="material-title nav-text">About</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	`,
	styles: [`
		.pfm-sidebar {
			background-color: #515151;
			color: rgba(255,255,255,0.87);
			height: 100vh;
			width: 280px;
			position: fixed;
		}
		
		.pfm-logo {
			background-color: #84528A;
			text-align: center;
		}
		
		.pfm-menu {
			display: none;
			font-size: 32px;
			height: 48px;
			vertical-align: middle;
			width: 48px;
		}
		
		.pfm-logo::before {
			content: '';
			display: inline-block;
			height: 100%;
			margin-left: -0.25em;
			vertical-align: middle;
		}
		
		.pfm-logo-image {
			display: inline-block;
			padding: 2em 1em 3em;
			vertical-align: middle;
			width: 100%;
		}
		
		.pfm-sidebar-navlist {
			font-size: 1.25em;
			list-style-type: none;
			padding: 1em;
		}
		
		.pfm-sidebar-navlist .nav-item {
			color: rgba(255,255,255,0.87);
			text-decoration: none;
		}
		
		.pfm-sidebar-navlist .nav-item:visited {
			color: rgba(255,255,255,0.87);
		}
		
		.pfm-sidebar-navlist .nav-item:before {
			content: '';
			display: inline-block;
			height: 100%;
			margin-left: -0.25em;
			vertical-align: middle;
		}
		
		.pfm-sidebar-navlist .nav-icon {
			height: 32px;
			font-size: 32px;
			margin: 8px;
			vertical-align: middle;
			width: 32px;
		}
		
		.pfm-sidebar-navlist .nav-text {
			vertical-align: middle;
		}
		
		@media screen and (max-width: 900px) {
			.pfm-sidebar {
				width: 48px;
			}
			
			.pfm-logo {
				height: 48px;
				width: 48px;
			}
			
			.pfm-logo-image {
				display: none;
			}
			
			.pfm-menu {
				display: initial;
			}
			
			.pfm-sidebar-navlist {
				margin: 0;
				padding: 0;
			}
			
			.pfm-sidebar-navlist .nav-text {
				display: none;
			}
		}`,
	],
	directives: [RouterLink]
})
export class SidebarComponent{}