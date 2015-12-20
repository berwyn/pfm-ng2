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
						<a class="nav-item" [routerLink]="['Home']">Home</a>
					</li>
					<li>
						<a class="nav-item" [routerLink]="['Discover']">Discover</a>
					</li>
					<li>
						<a class="nav-item" [routerLink]="['About']">About</a>
					</li>
					<li>Forum</li>
					<li>Login</li>
					<li>Register</li>
				</ul>
			</nav>
		</div>
	`,
	styles: [
		`.pfm-sidebar {
			background-color: #84528A;
			color: rgba(255,255,255,0.7);
			height: 100vh;
			width: 280px;
			position: static;
		}`,
		`.pfm-sidebar .pfm-logo {
			margin: 16px auto;
			text-align: center;
			width: 80%;
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
			vertical-align: middle;
			width: 100%;
		}`,
		`.pfm-sidebar-navlist {
			font-size: 1.25em;
			list-style-type: none;
			padding: 1em;
		}`,
		`.pfm-sidebar-navlist nav-item {
			text-decoration: none;
		}`
	],
	directives: [RouterLink]
})
export class SidebarComponent{}