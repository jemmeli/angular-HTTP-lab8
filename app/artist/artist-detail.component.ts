import {Subscription} from 'rxjs/Subscription';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtistService} from './artist.service';

@Component({
    selector: 'artist-detail',
    templateUrl: '../app/artist/artist-detail.component.html'
})

export class ArtistDetailComponent implements OnInit {
    artist = {};

    constructor(private route:ActivatedRoute, private artistService:ArtistService) {
    }

    ngOnInit() {
        let artistId = this.route.snapshot.params["artistId"];
        // this.artist = this.artistService.getArtist(artistId);
        this.artistService.getArtist(this.route.snapshot.params["artistId"])
            .subscribe(
                artist => this.artist = artist[artistId],
                error => console.error('Error: ' + error),
                () => console.log('Completed!')
            );
    }
}