import { Component, OnInit } from '@angular/core';
import { Tshirt } from './t-shirt';
import { TshirtService } from './t-shirt.service';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css']
})
export class TShirtComponent implements OnInit {

tshirts: Tshirt[];

 constructor(private country: TshirtService) {}

ngOnInit(): void {
  this.loadTshirt();
}

loadTshirt(){
this.tshirts = [];

this.country.getListTshirt().subscribe(data =>{
  const obj = Object(data);

  this.tshirts = obj;
})
}

}
