import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestByDestinationComponent } from './request-byDestination/request-byDestination';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/requests',
    pathMatch: 'full'
  },  
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'new-request',
    component: NewRequestComponent
  },
  {
    path: 'requests/:id',
    component: RequestDetailComponent
  },
  {
    path: 'requestsByDestination',
    component: RequestByDestinationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
