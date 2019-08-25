import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

 export class QuoteComponent implements OnInit {
  Quote = [
      new Quote('Quote about vision','Jimmy Gabriel','your passion determine yuor vision', 'Anuarithe',new Date(2019,1,12),0,0),
      new Quote('Motivation Quote', 'Kofi Mwema','Never giveup ,', 'Umuhire',new Date(1993,8,4),0,0 ),
      new Quote ( 'Courageous Quotes', 'Anne','Try and fail but never fail to try', 'Claire', new Date(2015,9,4),0,0 ),
      new Quote( 'Passion Quotes', 'Anuarithe','Allow your passion to be yuor purpose , one day it will become your proffesion.', 'Mponoyimana',new Date(2018,8,24),0,0),
      new Quote('Success Quotes', 'Alfred','Work hard and smart success will came into your ways','Clemantine' ,new Date(1956,6,14),0,0 ),
      new Quote( 'Quote about believe','lilianne','“Love what you do and do what you love. " ', 'Clarisse', new Date(2017,9,14) ,0,0),
      new Quote( 'Quote about love','lilianne','First Love never die. " ', 'Clarisse', new Date(2017,9,14) ,0,0),
  ]
  addNewQuote(quote){
    let quoteLength = this.Quote.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.Quote.push(quote)

}
  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.Quote[index].quote
        }`)
        
        if(toDelete){
            this.Quote.splice(index,1)
        }
    }
}

  // completeQuote(isComplete,index){
  //   if (isComplete){
  //       this.Quote.splice(index,1);
  //       }
  //       }
        
        toogleDetails(index){
          this.Quote[index].showDescription = !this.Quote[index].showDescription;
      }
constructor(){}
        ngOnInit(){}
      }