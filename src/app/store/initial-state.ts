import { IAppState } from './store';

export const INITIAL_STATE: IAppState = {
  trackList: {
    tracks: [
      {id: 1, title: 'First track', description: 'First track description', favorite: true},
      {id: 2, title: 'Second track', description: 'Second track description', favorite: true},
      {id: 3, title: 'Third track', description: 'Third track description'}
    ]
  },
};
