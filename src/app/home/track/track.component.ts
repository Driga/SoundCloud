import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() track: any;

  constructor() {

  }

  ngOnInit() {

  }
}
