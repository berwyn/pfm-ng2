import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Track } from './track.model';
import { TrackCardComponent } from './card.component';
import { TrackStore } from './track.store';

@Component({
	selector: 'pfm-track-grid',
	template: `
		<div class="header">
			<h3 class="title qa-title">{{ title }}</h3>
			<button role="button" *ngIf="tracks?.length > max">More</button>
		</div>
		<ul class="track-list qa-list">
			<li class="list-item qa-item" *ngFor="let track of tracks">
				<pfm-track-card [track]="track"></pfm-track-card>
			</li>
		</ul>
	`,
	styles: [`
		.header {
			margin: 8px;
		}
		
		.track-list {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		
		.track-list > .list-item {
			margin: 8px;
		}
	`],
	directives: [NgFor, NgIf, TrackCardComponent]
})
export class TrackGridComponent implements OnInit {

	@Input() category: Categories;
	@Input() title: string;
	@Input() max: number;

	private tracks: Track[];

	constructor(private _store: TrackStore) { }

	ngOnInit() {
		switch (this.category) {
			case Categories.Hot:
				this._store.getHot().subscribe(tracks => this.tracks = tracks);
				break;
			case Categories.Latest:
				this._store.getLatest().subscribe(tracks => this.tracks = tracks);
				break;
		}
	}
}

export enum Categories {
	Hot,
	Latest
}
