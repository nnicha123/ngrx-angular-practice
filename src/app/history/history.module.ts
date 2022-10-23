import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleFacade } from './store/module.facade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { HistoryListComponent } from './components/history-list/history-list.component';

const STORE_MODULES = [
  StoreModule.forFeature(fromStore.featureKey, fromStore.moduleReducer),
  EffectsModule.forFeature(fromStore.effects)
];

@NgModule({
  declarations: [
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...STORE_MODULES

  ],
  exports:[HistoryListComponent],
  providers:[ModuleFacade]
})

export class HistoryModule { }
