import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { TrackGridComponent } from '../tracks/grid.component';
import { Track } from '../tracks/track.model';
import { TrackStore } from '../tracks/track.store';

@Component({
	template: `
		<div>
			<pfm-track-grid *ngFor="#grid of grids" [tracks]="grid.tracks" [title]="grid.title">
			</pfm-track-grid>
		</div>
	`,
	directives: [NgFor, TrackGridComponent]
})
export class HomePage {
	
	tracks: Track[];
	grids = [];
	
	constructor(store: TrackStore) {
		this.grids = [
			{ tracks: this.tracks, title: 'hot' },
			{ tracks: this.tracks, title: 'trending' }
		];
		store.getLatest().subscribe(tracks => this.tracks = tracks);
	}
	
}
