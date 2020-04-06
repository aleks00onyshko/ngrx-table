import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [MatInputModule, MatSelectModule, MatButtonModule];

const COMMON_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...COMMON_MODULES, ...MAT_MODULES],
  exports: [...COMMON_MODULES, ...MAT_MODULES]
})
export class SharedModule {}
