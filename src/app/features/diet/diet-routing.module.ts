import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { AddEditDietComponent } from './add-edit-diet/add-edit-diet.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    title: 'LABMedical - Cadastrar Dieta',
    children: [
      { path: '', component: AddEditDietComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietRoutingModule {}
