import { Track, TrackFile } from './track.model';

import { User, ResourceUser } from '../users/user.model';
import { Favourite } from '../users/favourite.model';
import { Comment } from '../users/comment.model';

import { Image } from '../common/image.model';

export class Album{
	
	user: User;
	users: ResourceUser[];
	cover: Image;
	tracks: Track[];
	trackFiles: TrackFile[];
	comments: Comment[];
	
}
