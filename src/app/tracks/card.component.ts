import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { Track } from './track.model';

@Component({
	selector: 'pfm-track-card',
	template: `
		<div class="card">
			<img class="cover-art qa-cover" [src]="loadArtwork()" />
			<div class="card-text">
				<div class="title qa-title">{{ track.title }}</div>
				<div class="artist qa-artist">{{ track.user?.name }}</div>
			</div>
		</div>
	`,
	styles: [`
		.card {
			background-color: white;
			border-radius: 2px;
			display: flex;
			flex-direction: row;
		}
		
		.cover-art {
			background: #E8E8E8;
			height: 96px;
			width: 96px;
		}
		
		.card-text {
			display: flex;
			flex: 1;
			flex-direction: column;
			margin: 8px;
		}
	`]
})
export class TrackCardComponent {
	
	@Input() track: Track;
	
	private loadArtwork(): string {
		if(this.track.covers && this.track.covers.normal) {
			return this.track.covers.normal;
		} else {
			return require('../../images/logo-white.svg');
		}
	}
	
}
