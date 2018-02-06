import { Action } from '@ngrx/store';
import { TrackListActions } from './actions';
import { immutablySet } from '../shared/app-state-helper';
import { INITIAL_STATE } from './initial-state';

export interface IAppState {
  trackList: any;
}

export const rootReducer = (state: any, { type, payload }: Action) => {
  switch (type) {
    case TrackListActions.FILTER:
      return immutablySet(['trackList', 'tracks'], state.trackList.tracks.filter( track => (track[payload])), state);

    case TrackListActions.SHOW_ALL:
      return INITIAL_STATE;
  }

  return state;
};
