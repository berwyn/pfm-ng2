import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

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
			<a routerLink="sub1">Foo</a>
			<a routerLink="sub2">Bar</a>
			<a routerLink="sub3">Baz</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ]
})
export class DiscoverPage{}
