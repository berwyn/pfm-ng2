import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { TrackGridComponent } from '../components/trackGrid';
import { Track } from '../models/track';
import { TrackStore } from '../stores/track';

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
		this.tracks = store.getLatest();
		this.grids = [
			{ tracks: this.tracks, title: 'hot' },
			{ tracks: this.tracks, title: 'trending' }
		];
	}
	
}
