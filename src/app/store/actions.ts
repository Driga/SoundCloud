import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class TrackListActions {
  static FILTER = 'FILTER';
  static SHOW_ALL = 'SHOW_ALL';

  filter(param: string): Action {
    return {
      type: TrackListActions.FILTER,
      payload: param
    };
  }

  showAll(): Action {
    return { type: TrackListActions.SHOW_ALL };
  }
}
