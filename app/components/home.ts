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
			<Track>{title: 'track1', stats:{ plays: 31 }},
			<Track>{title: 'track2', stats:{ plays: 31 }},
			<Track>{title: 'track3', stats:{ plays: 31 }},
			<Track>{title: 'track4', stats:{ plays: 31 }},
			<Track>{title: 'track5', stats:{ plays: 31 }},
			<Track>{title: 'track6', stats:{ plays: 31 }},
			<Track>{title: 'track7', stats:{ plays: 31 }},
			<Track>{title: 'track8', stats:{ plays: 31 }},
			<Track>{title: 'track9', stats:{ plays: 31 }},
			<Track>{title: 'track10', stats:{ plays: 31 }},
		];
	}
	
}