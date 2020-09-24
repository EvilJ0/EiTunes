import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITunesService} from "../../services/i-tunes.service";
import {iSong} from "../../types/models/song.model";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  @Output() eventItem= new EventEmitter();

  constructor(public iTunesService:ITunesService) {

  }

  ngOnInit(): void {

  }
  songClick(value: iSong){
    this.eventItem.emit(value);
    this.iTunesService.songSelected=value;
    console.log("Song click work")
  }
}

