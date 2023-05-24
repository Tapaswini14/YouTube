import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LikedvideosComponent } from './likedvideos/likedvideos.component';
import { ShortsComponent } from './shorts/shorts.component';
import { ShowmoreComponent } from './showmore/showmore.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import { YourvideosComponent } from './yourvideos/yourvideos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'likedvideos',
    component: LikedvideosComponent,
  },
  {
    path: 'shorts',
    component: ShortsComponent,
  },
  {
    path: 'showmore',
    component: ShowmoreComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
  },
  {
    path: 'watchlater',
    component: WatchlaterComponent,
  },
  {
    path: 'yourvideos',
    component: YourvideosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
