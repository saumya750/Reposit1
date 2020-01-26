import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsInfoComponent } from './events-info.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { SeminarComponent } from './seminar/seminar.component';


const routes: Routes = [
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
            }
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsinfoRoutingModule { }