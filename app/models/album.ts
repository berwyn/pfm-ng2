import { User, ResourceUser } from './user';
import { Favourite } from './favourite';
import { Image } from './image';
import { Track, TrackFile } from './track';
import { Comment } from './comment';

export class Album{
	
	user: User;
	users: ResourceUser[];
	cover: Image;
	tracks: Track[];
	trackFiles: TrackFile[];
	comments: Comment[];
	
}