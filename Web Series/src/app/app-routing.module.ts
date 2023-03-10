import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SerDetComponent } from './ser-det/ser-det.component';

const routes: Routes = [
  {path:'series',component:HomeComponent},
  {path:'series/:image/:Series_name/:Streaming_Partner/:director/:seasons/:ep_count/:genre/:imdb_rating/:desc/:airing_date',component:SerDetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
