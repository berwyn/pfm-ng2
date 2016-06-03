import { Component } from '@angular/core';
import { RouteConfig, RouterLink, RouterOutlet } from '@angular/router-deprecated';

@Component({
	template: `
		<h3>Sub1</h3>
	`
})
export class DiscoverSub1{}

@Component({
	template: `
		<h3>Sub2</h3>
	`
})
export class DiscoverSub2{}

@Component({
	template: `
		<h3>Sub3</h3>
	`
})
export class DiscoverSub3{}

@Component({
	template: `
		<h1>Discover</h1>
		<nav>
			<a [routerLink]="['Sub1']">Foo</a>
			<a [routerLink]="['Sub2']">Bar</a>
			<a [routerLink]="['Sub3']">Baz</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ RouterLink, RouterOutlet ]
})
@RouteConfig([
	{ path: '/sub1', name: 'Sub1', component: DiscoverSub1, useAsDefault: true },
	{ path: '/sub2', name: 'Sub2', component: DiscoverSub2 },
	{ path: '/sub3', name: 'Sub3', component: DiscoverSub3 }
])
export class DiscoverPage{}
