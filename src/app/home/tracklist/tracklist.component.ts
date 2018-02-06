import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';

@Component({
  selector: 'sc-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent implements OnInit, OnDestroy {
  public subscription;
  public trackList;

  constructor (private store: NgRedux<IAppState>) {
    this.subscription = this.store.select(['trackList','tracks'])
      .subscribe(trackList => {
        this.trackList = trackList;
      });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
