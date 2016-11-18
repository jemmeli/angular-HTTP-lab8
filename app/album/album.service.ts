import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AlbumService {
  private albums = [];

  constructor(private http:Http) {
  }

  //get send an observable instead of object in the "angular-labRouter-lab5"
  //make sure the component accept the output with the "subscribe" methode
  getAlbums()
  {
    return this.http
            .get("http://localhost:3000/album.json")
            .map(response => response.json());
  }


  //get send an observable instead of object in the "angular-labRouter-lab5"
  //make sure the component accept the output with the "subscribe" methode
  getAlbum(id)
  {
    return this.http
            .get("http://localhost:3000/album.json#" + id)
            .map(response => response.json());
  }

}
