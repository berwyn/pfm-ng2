import { Track } from '../models/track';

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
	
    getLatest(): Track[] {
        return this.trackStore
			.sort(() => (Math.random() * -2) + 1)
			.slice(0, 19);
    }
    
}