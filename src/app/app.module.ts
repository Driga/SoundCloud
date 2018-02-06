import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { rootReducer, IAppState } from './store/store';
import { INITIAL_STATE } from './store/initial-state';

import { TrackListActions } from './store/actions';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TracklistComponent } from './home/tracklist/tracklist.component';
import { TrackComponent } from './home/track/track.component';
import { FilterbarComponent } from './home/filters/filterbar.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';


const logger = createLogger({
  collapsed: true
});


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgReduxModule,
  ],
  declarations: [
    AppComponent,
    FilterbarComponent,
    HomeComponent,
    TracklistComponent,
    TrackComponent,
    AboutComponent
  ],
  providers: [
    ApiService,
    TrackListActions
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    public store: NgRedux<IAppState>,
    public devTools: DevToolsExtension,
  ) {
    store.configureStore(rootReducer, INITIAL_STATE, [logger], devTools.isEnabled() ? [devTools.enhancer()] : []);
  }


}
