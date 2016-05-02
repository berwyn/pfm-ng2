import { Component, Input } from 'angular2/core';
import { Track } from './track.model';

@Component({
	selector: 'pfm-track-card',
	template: `
		<div class="card">
			<img class="cover-art" [src]="track.covers.normal" />
			<div class="">
				<span>{{ track.title }}</span>
				<span>{{ track.artist }}</span>
			</div>
		</div>
	`
})
export class TrackCardComponent {
	
	@Input() track: Track;
	
}
