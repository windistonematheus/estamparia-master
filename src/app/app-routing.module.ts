import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BabyLookComponent } from './components/baby-look/baby-look.component';
import { BudgetComponent } from './components/budget/budget.component';
import { MugComponent } from './components/mug/mug.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'baby-look', component: BabyLookComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'mug', component: MugComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
