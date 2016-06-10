import {
	beforeEach,
	beforeEachProviders,
	describe,
	inject,
	it,
} from '@angular/core/testing';
import { Track } from './track.model';
import { TrackStore } from './track.store';

export const EXPECTED_TRACKS: Track[] = [
	{
		title: 'Test Track 1',
		is_downloadable: false,
		is_explicit: false,
		is_published: true,
		is_vocal: true,
		url: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6',
		covers: {
			thumbnail: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/thumbnail.png',
			small: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/small.png',
			normal: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/normal.png',
			original: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/original.png',
		},
		stats: {
			views: 43,
			plays: 45,
			downloads: 0,
			comments: 3,
			favourites: 5,
		},
		streams: {
			mp3: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6/stream/mp3',
			aac: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6/stream/aac',
			ogg: '/track/dbbc791c-7361-414a-8399-d89e548ed7e6/stream/ogg',
		},
		user: {
			name: 'aa1cf592-03df-4575-acea-130ec076cb95',
		},
	},
	{
		title: 'Test Track 2',
		is_downloadable: false,
		is_explicit: false,
		is_published: true,
		is_vocal: true,
		url: '/track/1792b2ff-9e69-4629-8824-12ac4ff9c64b',
		covers: {
			normal: '/track/1792b2ff-9e69-4629-8824-12ac4ff9c64b/cover/normal.png',
			original: '/track/1792b2ff-9e69-4629-8824-12ac4ff9c64b/cover/original.png',
			thumbnail: null,
			small: null,
		},
		stats: {
			views: 43,
			plays: 45,
			downloads: 0,
			comments: 3,
			favourites: 5,
		},
		streams: {
			mp3: '/track/1792b2ff-9e69-4629-8824-12ac4ff9c64b/stream/mp3',
			aac: '/track/1792b2ff-9e69-4629-8824-12ac4ff9c64b/stream/aac',
			ogg: '/track/1792b2ff-9e69-4629-8824-12ac4ff9c64b/stream/ogg',
		},
		user: {
			name: 'c066cef1-baa5-4814-bea8-65289d7b95c3',
		},
	}
]

describe('Track Store', () => {
	let store: TrackStore;

	beforeEachProviders(() => [TrackStore]);

	beforeEach(inject([TrackStore], (_store: TrackStore) => {
		store = _store;
	}));

	it('should provide the latest tracks', (done: any) => {
		let latest = store.getLatest();
		expect(latest).not.toEqual(null);
		done();
	});

});
