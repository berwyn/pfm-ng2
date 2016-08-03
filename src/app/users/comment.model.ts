import { User } from './user.model';
import { Track } from '../track/track.model';
import { Album } from '../track/album.model';
import { Playlist } from '../track/playlist.model';

export class Comment {
	
	user: User;
	track: Track;
	album: Album;
	playlist: Playlist;
	profile: User;
	
}
