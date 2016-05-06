import { Component, Input, OnInit } from '@angular/core';
import { Track } from './track.model';

@Component({
	selector: 'pfm-track-card',
	template: `
		<div class="card">
			<img class="cover-art" [src]="track.covers.normal" />
			<div>
				<span>{{ track.title }}</span>
				<span>{{ track.artist }}</span>
			</div>
		</div>
	`
})
export class TrackCardComponent implements OnInit {
	
	@Input() track: Track;
	
	ngOnInit() {
		console.log(this.track);
	}
	
}
