import { User } from './user';
import { CoverSet } from './image';

export class Track{
    
    title: string;
    user: User;
    stats: {
        views: number;
        plays: number;
        downloads: number;
        comments: number;
        favourites: number;
    };
    url: string;
    is_vocal: boolean;
    is_explicit: boolean;
    is_downloadable: boolean;
    is_published: boolean;
    covers: CoverSet;
    streams: {
        mp3: string;
        aac: string;
        ogg: string;
    };
    
}

export class TrackFile{}