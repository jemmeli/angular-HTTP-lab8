import {Component} from '@angular/core';
import {AlbumService} from './album.service';


@Component({
    selector: 'album-list',
    templateUrl: '../app/album/album-list.component.html'
})

export class AlbumListComponent {
    albums = [];

    constructor(albumService:AlbumService) {
        albumService.getAlbums()
            .subscribe(
                abs => {
                    this.albums = Object.keys(abs).map(id => {
                        const album = abs[id];
                        return {
                            id: album.id,
                            title: album.title,
                            year: album.year,
                            artist: album.artist.name
                        }
                    });
                },
                error => console.error('Error: ' + error),
                () => console.log('Completed!')
            );
    }
}
