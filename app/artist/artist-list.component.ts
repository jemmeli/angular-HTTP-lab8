import {Component} from '@angular/core';
import {ArtistService} from './artist.service';


@Component({
    selector: 'artist-list',
    templateUrl: '../app/artist/artist-list.component.html'
})

export class ArtistListComponent {
    artists = [];

    constructor(private artistService:ArtistService) {
        this.artistService.getArtists()
            .subscribe(
                artists => {
                    this.artists = Object.keys(artists).map(id => {
                        const artist = artists[id];
                        return {
                            id: artist.id,
                            name: artist.name
                        }
                    });
                },
                error => console.error('Error: ' + error),
                () => console.log('Completed!')
            );
    }
}
