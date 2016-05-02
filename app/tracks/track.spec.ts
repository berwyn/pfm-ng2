import { Track } from './track.model';

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
			
		},
	}
]
