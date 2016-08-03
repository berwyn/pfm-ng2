import { Component, Input, OnInit } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import { Track } from '../track.model';
import { TrackCardComponent } from '../card/card.component';
import { TrackStore } from '../track.store';

@Component({
	selector: 'pfm-track-grid',
	template: require('./grid.component.html'),
	styles: [require('./grid.component.css')],
	directives: [TrackCardComponent, MD_GRID_LIST_DIRECTIVES]
})
export class TrackGridComponent implements OnInit {

	@Input() category: string;
	@Input() title: string;
	@Input() max: number;

	private tracks: Track[];

	constructor(private _store: TrackStore) { }

	ngOnInit() {
		switch (this.category) {
			case 'hot':
				this._store.getHot().subscribe(tracks => this.tracks = tracks);
				break;
			case 'latest':
				this._store.getLatest().subscribe(tracks => this.tracks = tracks);
				break;
			default:
				throw(`Invalid category provided to track grid: ${this.category}`)
		}
	}

	getColumnCount() {
		return 1;
	}
}
