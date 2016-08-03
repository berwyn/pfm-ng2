import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { Track } from '../track.model';

@Component({
	selector: 'pfm-track-card',
	template: require('./card.component.html'),
	styles: [require('./card.component.css')],
	directives: [MD_CARD_DIRECTIVES],
})
export class TrackCardComponent {
	
	@Input() track: Track;
	
	private loadArtwork(): string {
		if(this.track.covers && this.track.covers.normal) {
			return this.track.covers.normal;
		} else {
			return require('../../../images/logo-white.svg');
		}
	}
	
}
