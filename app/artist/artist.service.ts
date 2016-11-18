import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
// Operators
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {

    constructor(private http:Http) {
    }

    getArtists() {
        return this.http
            .get("http://localhost:3000/artist.json")
            .map((response:Response) => response.json());
    }

    getArtist(id) {
        return this.http
            .get("http://localhost:3000/artist.json#" + id)
            .map(response => response.json());
    }

    private artists = {};
}