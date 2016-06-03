import { User } from './user.model';
import { Track } from '../tracks/track.model';
import { Album } from '../tracks/album.model';
import { Playlist } from '../tracks/playlist.model';

export class Favourite{
	
	user: User;
	track: Track;
	album: Album;
	playlist: Playlist;
	
}
