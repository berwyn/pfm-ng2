import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';

@Component({
	selector: 'pfm-sidebar',
	template: `
		<div class="pfm-sidebar">
			<div class="pfm-logo"></div>
			<nav role="nav" class="pfm-sidebar-nav">
				<ul>
					<li>
						<a [routerLink]="['Home']">Home</a>
					</li>
					<li>
						<a [routerLink]="['Discover']">Discover</a>
					</li>
					<li>About</li>
					<li>Forum</li>
					<li>Login</li>
					<li>Register</li>
				</ul>
			</nav>
		</div>
	`,
	styles: [],
	directives: [RouterLink]
})
export class SidebarComponent{}