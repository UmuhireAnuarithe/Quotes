import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  Quote: string[];

  constructor(){

    this.Quote = ["title","author"," user","quote","date","number","number"];
}
}