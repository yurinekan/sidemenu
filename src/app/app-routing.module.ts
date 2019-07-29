import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'instalacao',
    loadChildren: './instalacao/instalacao.module#InstalacaoPageModule'
  },
  {
    path: 'grupos',
    loadChildren: './grupos/grupos.module#GruposPageModule'
  },
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutPageModule'
  },
  {
    path: 'lay-header-footer',
    loadChildren: './lay-header-footer/lay-header-footer.module#LayHeaderFooterPageModule'
  },
  {
    path: 'laytabs',
    loadChildren: './laytabs/laytabs.module#LaytabsPageModule'
  },
  {
    path: 'laymenu',
    loadChildren: './laymenu/laymenu.module#LaymenuPageModule'
  },
  {
    path: 'laysplit',
    loadChildren: './laysplit/laysplit.module#LaysplitPageModule'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
