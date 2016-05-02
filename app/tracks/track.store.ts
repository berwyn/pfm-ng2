import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Track } from './track.model';

@Injectable()
export class TrackStore {

	private trackStore: Track[] = [];
	
	constructor() {
		for(let i = 0; i < 100; i++) {
			this.trackStore.push({
				title: `track${i}`,
				stats: {
					plays: (Math.random() * 100 | 0),
					favourites: (Math.random() * 100 | 0),
					downloads: (Math.random() * 100 | 0)
				}
			} as Track)
		}
	}
	
	getLatest(): Observable<Track[]> {
		return Observable.create((observer: Observer<Track[]>)  => {
			let tracks = this.trackStore
				.sort(() => (Math.random() * -2) + 1)
				.slice(0, 10);
			observer.next(tracks);
		});
	}

}
