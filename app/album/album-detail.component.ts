import {Subscription} from 'rxjs/Subscription';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from './album.service';

@Component({
    selector: 'album-detail',
    templateUrl: '../app/album/album-detail.component.html'
})

export class AlbumDetailComponent implements OnInit, OnDestroy {


    album = {
        artist: {}
    };


    paramsSubscription:Subscription;

    constructor(private route:ActivatedRoute, private albumService:AlbumService) {
    }

    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(params => {
            //this.album = this.albumService.getAlbum(params['albumId']);
            this.albumService.getAlbum(params['albumId'])
                .subscribe(p => {
                        this.album = p[params['albumId']];
                        console.log(' this.album =', this.album);
                    }
                    , err => {
                        console.log(err);
                    });
        });
    }


    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

}
