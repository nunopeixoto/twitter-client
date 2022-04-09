import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FakeTweetComponent } from './tweets/components/fake-tweet/fake-tweet.component';
import { FeedComponent } from './tweets/components/feed/feed.component';
import { FollowersComponent } from './tweets/components/followers/followers.component';
import {AuthGuard} from './shared/auth.guard';
import { AdminAuthGuard } from './shared/admin-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',   redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/tweets/tweet.module').then(m => m.TweetModule)
  },
  {
    path: 'fake-tweet',
    component: FakeTweetComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'followers',
    component: FollowersComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
