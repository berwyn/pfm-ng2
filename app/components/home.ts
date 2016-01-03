import { Component } from 'angular2/core';
import { TrackGridComponent } from './trackGrid';
import { Track } from '../models/track';

@Component({
	template: `
		<div>
			<pfm-track-grid [tracks]="tracks">
			</pfm-track-grid>
		</div>
	`,
	directives: [TrackGridComponent]
})
export class HomePage {
	
	tracks: Track[];
	
	constructor() {
		this.tracks = [
			<Track>{title: 'track1', stats:{ plays: 2 }},
			<Track>{title: 'track2', stats:{ plays: 3 }}
		];
	}
	
}