import { Component } from 'angular2/core';
import { NgIf, NgClass } from 'angular2/common';

@Component({
	template: `
		<div class="pfm-about">
			<div class="pfm-tabs">
				<div class="pfm-tab" (click)="setTabIndex(0)" [ngClass]="{ selected: tabIndex === 0 }">About Pony.fm</div>
				<div class="pfm-tab" (click)="setTabIndex(1)" [ngClass]="{ selected: tabIndex === 1 }">FAQ</div>
				<div class="pfm-tab" (click)="setTabIndex(2)" [ngClass]="{ selected: tabIndex === 2 }">MLP Forums Advertising Programme</div>
			</div>
			<div class="about-content" *ngIf="tabIndex === 0">
				<h3 class="pfm-header">What exactly <i>is</i> Pony.fm, anyway?</h3>
				<p class="whitespaced-text">
					Some My Little Pony: Friendship is Magic fans - typically referred to as "bronies" are the musical type, and show their appreciation for the show by pouring their talent into <b>fan music</b>.

					The brony fan music community is diverse, spanning genres from symphonic metal to trance and everything in between. But most importantly, the community creates music.

					A <i>lot</i> of music.

					All this music has to go somewhere. YouTube, SoundCloud, and Bandcamp are popular outlets that many brony musicians use to host their tunes. But no mainstream sites are specifically designed for our fandom's needs, and they're not particularly helpful if, as a listener, you're looking for pony fan music.

					That's where Pony.fm comes in. <b>Pony.fm is a community, hosting service, and music database rolled into one, with a generous dash of pony on top.</b>
				</p>
				<h4 class="pfm-header">So it's SoundCloud with ponies?</h4>
				<p class="whitespaced-text">
					Eenope!

					Pony.fm is an original project. Although it takes inspiration from a number of well-known services for the general public, Pony.fm is not specifically modeled after any one of them. As a fan site itself, Pony.fm is an experience all its own.
				</p>
				<h4 class="pfm-header">What makes Pony.fm special?</h4>
				<p class="whitespaced-text">
					Pony.fm is a service created by bronies, for bronies. Every inch of the Pony.fm experience is crafted with ponies and bronies in mind. Some of the features necessarily resemble what you may find on other sites - lossless uploads, for example - but some features are specific to the pony fan music community.

					Created as a service for the fandom, Pony.fm aims to be the one-stop shop for all things pony music, for artists and listeners alike.
				</p>
				<h4 class="pfm-header">What does MLP Forums have to do with Pony.fm?</h4>
				<p class="whitespaced-text">
					MLP Forums and Pony.fm share an owner, and each encompasses a different segment of the global My Little Pony: Friendship is Magic community. Put together, both sites are able to offer a richer "supercommunity" experience than either site could offer on its own.
				</p>
				<h4 class="pfm-header">Who is behind Pony.fm?</h4>
				<p class="whitespaced-text">
					Pony.fm was created by Feld0, a pony-loving teenager who heard the call of code. Recognizing the need for a true pony-specific music hosting site, and realizing that MLP Forums provided him with the resources he needed to make it happen, he created a blank text file and started pumping code into his computer.

					The site is now maintained by him and Nelson LaQuet as part of the <a href="https://poniverse.net">Poniverse</a> network.
				</p>
			</div>
			<div class="faq-content" *ngIf="tabIndex === 1">
				<h1 class="pfm-header">FAQ</h1>
			</div>
			<div class="advertising-content" *ngIf="tabIndex === 2">
				<h1 class="pfm-header">Advertising</h1>
			</div>
		</div>
	`,
	styles: [
	],
	directives: [NgIf]
})
export class AboutPage {
	
	public tabIndex: number;
	
	constructor() {
		this.tabIndex = 0;
	}
	
	setTabIndex(index: number) {
		this.tabIndex = index;
	}
	
}