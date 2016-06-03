import { User } from './user.model';
import { Track } from '../tracks/track.model';
import { Album } from '../tracks/album.model';
import { Playlist } from '../tracks/playlist.model';

export class Comment {
	
	user: User;
	track: Track;
	album: Album;
	playlist: Playlist;
	profile: User;
	
}
