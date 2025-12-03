import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { FooterComponent } from "../../componentes/footer/footer.component";
import { SolucoesComponent } from "../../componentes/solucoes/solucoes.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, SolucoesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
