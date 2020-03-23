import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsInfoComponent } from './events-info.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { SeminarComponent } from './seminar/seminar.component';
import { WeddingComponent } from './wedding/wedding.component';
import { HomeComponent } from './home/home.component';
import { WeddingFormComponent } from '../forms/wedding-form/wedding-form.component';




const routes: Routes = [
  {
    path: 'weddingForm',
    component: WeddingFormComponent,
  },
    {
        path: 'events-info',
        component: EventsInfoComponent,
    
    children:[
        {
        path:'birthday',
        component:BirthdayComponent
        },
        {
            path:'seminar',
            component:SeminarComponent
            },
         {
          path:'wedding',
          component:WeddingComponent
            },
            {
              path:'home',
              component:HomeComponent
                },
            
            
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsinfoRoutingModule { }