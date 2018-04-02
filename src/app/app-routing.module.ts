import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MementosComponent } from './mementos/mementos.component';
import { VlogsComponent } from './vlogs/vlogs.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'mementos',
		component: MementosComponent
	},
	{
		path: 'vlogs',
		component: VlogsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
