import { Component, OnInit } from '@angular/core';
import {ITunesService} from "../../../services/i-tunes.service";



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  constructor(public iTunesService: ITunesService) {

  }

}

