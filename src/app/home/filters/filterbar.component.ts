import { Component, OnDestroy, OnInit } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { TrackListActions } from './../../store/actions';
import { IAppState } from './../../store/store';

@Component({
  selector: 'sc-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit, OnDestroy {
  private subscription;
  public trackList;

  constructor(
    private store: NgRedux<IAppState>,
    private actions: TrackListActions) {

    this.subscription = store.select('trackList')
      .subscribe(trackList => {
        this.trackList = trackList;
      });
  }

  ngOnInit() {
    console.log('Hello filters');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(param: string) {
    this.store.dispatch(this.actions.filter(param));
  }

  showAll() {
    this.store.dispatch(this.actions.showAll());
  }

}
