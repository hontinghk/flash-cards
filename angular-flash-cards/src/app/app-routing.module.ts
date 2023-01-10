import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardManagementComponent } from './components/card-management/card-management.component';


const routes: Routes = [
  {path: 'card-content', component: CardContentComponent},
  {path: 'card-management', component: CardManagementComponent},
  {path: '', redirectTo: 'card-content', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
