import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';

import { SistemaPageRoutingModule } from './sistema-routing.module';

import { SistemaPage } from './sistema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaPageRoutingModule,

    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    FormsModule
  ],
  declarations: [SistemaPage]
})
export class SistemaPageModule {}
