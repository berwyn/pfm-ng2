import { User } from './user';
import { Track } from './track';
import { Album } from './album';
import { Playlist } from './playlist';

export class Comment{
    
    user: User;
    track: Track;
    album: Album;
    playlist: Playlist;
    profile: User;
    
}