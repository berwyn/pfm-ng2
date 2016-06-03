import { User, ResourceUser } from '../users/user.model';
import { Favourite } from '../users/favourite.model';
import { Image } from '../common/image.model';
import { Track, TrackFile } from '../tracks//track.model';
import { Comment } from '../users/comment.model';

export class Album{
	
	user: User;
	users: ResourceUser[];
	cover: Image;
	tracks: Track[];
	trackFiles: TrackFile[];
	comments: Comment[];
	
}
