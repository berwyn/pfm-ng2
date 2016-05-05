import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Track } from './track.model';

@Component({
	selector: 'pfm-track-grid',
	template: `
		<div>
			<span class="title">{{ title }}</span>
			<button role="button" *ngIf="tracks.length > max">More</button>
		</div>
		<ul class="track-list">
			<li *ngFor="#track of tracks">
				<pfm-track-card [track]="track" />
			</li>
		</ul>
	`,
	directives: [NgFor, NgIf]
})
export class TrackGridComponent{
	
	@Input() tracks: Track[];
	@Input() title: string;
	@Input() max: number;
	
	loadCover(track: Track): string {
		if(track.covers && track.covers.small) {
			return track.covers.small
		} else {
			return '/images/logo-white.svg'
		}
	}
	
}
