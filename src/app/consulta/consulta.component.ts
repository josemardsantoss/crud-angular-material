import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table'
import {FormsModule} from '@angular/forms'
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-consulta',
  imports: [MatInputModule, MatCardModule, MatIconModule, MatTableModule, FormsModule, MatButton],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {

}
