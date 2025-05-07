import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent, 
    CardComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
