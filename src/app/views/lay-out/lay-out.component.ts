import {Component, Input, OnInit} from '@angular/core';
import {ITunesService} from "../../services/i-tunes.service";
import {iSong} from "../../types/models/song.model";
import {SongListComponent} from "../song-list/song-list.component";

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.css']
})
export class LayOutComponent implements OnInit {
searchSong;
song:iSong;
color;
borderRadius;
  constructor(public iTunesService:ITunesService) {


}
  ngOnInit(): void {

  }
  // receiveSong(){
  //   this.iTunesService.getSongs
  // }

}
