import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Track } from './track.model';
import { TrackCardComponent } from './card.component';
import { TrackStore } from './track.store';

@Component({
	selector: 'pfm-track-grid',
	template: `
		<div>
			<span class="title">{{ title }}</span>
			<button role="button" *ngIf="tracks?.length > max">More</button>
		</div>
		<ul class="track-list">
			<li *ngFor="let track of tracks">
				<pfm-track-card [track]="track"></pfm-track-card>
			</li>
		</ul>
	`,
	directives: [NgFor, NgIf, TrackCardComponent]
})
export class TrackGridComponent implements OnInit {
	
	@Input() category: Categories;
	@Input() title: string;
	@Input() max: number;
	
	tracks: Track[];
	
	constructor(private _store: TrackStore) {}
	
	ngOnInit() {
		switch(this.category) {
			case Categories.Hot:
				this._store.getHot().subscribe(tracks => this.tracks = tracks);
				break;
			case Categories.Latest:
				this._store.getLatest().subscribe(tracks => this.tracks = tracks);
				break;
		}
	}
	
	loadCover(track: Track): string {
		if(track.covers && track.covers.small) {
			return track.covers.small
		} else {
			return '/images/logo-white.svg'
		}
	}
	
}

export enum Categories {
	Hot,
	Latest
}
