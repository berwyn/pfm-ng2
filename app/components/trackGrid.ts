import { Component, Optional, Input } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { PfmCard } from './card';
import { Track } from '../models/track';

@Component({
	selector: 'pfm-track-grid',
	template: `
		<div class="pfm-track-grid">
			<h5 class="material-primary material-display-1">{{ title }}</h5>
			<pfm-card *ngFor="#track of tracks" [title]="track.title" inline="true" width="200px">
				<img image [src]="loadCover(track)" />
				<span overlay>
					<i class="material-icons">favorite</i>
					{{ track.stats.favourites }}
					<i class="material-icons">file_download</i>
					{{ track.stats.downloads }}
				</span>
			</pfm-card>
		</div>
	`,
	styles: [`
		.pfm-track-art:before {
			content: '';
			display: inline-block;
			height: 100%;
			margin-left: -0.25em;
			vertical-align: middle;
		}
	
		.pfm-track-art {
			background-color: #84528A;
			height: 200px;
			width: 200px;
		}
		
		.pfm-track-art img {
			display: inline-block;
			max-height: 100%;
			max-width: 100%;
			vertical-align: middle;
		}
	`],
	directives: [NgFor, PfmCard]
})
export class TrackGridComponent{
	
	@Input() tracks: Track[];
	@Input() title: String;
	
	constructor() {
		console.log(this.title);
	}
	
	loadCover(track: Track): string {
		if(track.covers && track.covers.small) { return track.covers.small }
		else { return '/images/logo-white.svg' }
	}
	
}
