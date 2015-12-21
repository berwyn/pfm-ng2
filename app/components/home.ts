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
	
}