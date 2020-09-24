import {Injectable} from '@angular/core';
import {HttpAdapter} from "../adapters/http-adapter";
import {MockSongs} from "../data/mock-songs";
import {iSong} from "../types/models/song.model";
import {songResults} from "../types/models/song.results";



@Injectable({
  providedIn: 'root'
})
export class ITunesService {
  use_mocks: boolean = false;
  songs: iSong[]=[];
  iTunesApiUrl = "https://itunes.apple.com/search?term=";
  songSelected:iSong;




  constructor(public httpAdapter: HttpAdapter) {
    window['iTunesService'] = this;
    // this.getSongs().then(songs => {
    //   // debugger;
    //   this.songs = songs;
    //   console.log(songs)
    //
    // })
  }



  async getSongs<T>(url:string, search:string): Promise<songResults> {
    if (this.use_mocks) {
      return MockSongs;
    }
    return  this
      .httpAdapter
      .get<songResults>(url+search);

    // console.log(this.songs);
    // return this.songs

  }
  saveSongs(searchSong):void{
    this.getSongs<songResults>(this.iTunesApiUrl, searchSong)
      .then(songs=>{
        console.log ('get working');
        this.songs=songs.results
      })
  }



}




