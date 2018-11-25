import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { CoutryService } from 'src/app/coutry.service';
import { Categoria } from 'src/app/models/Categorias';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css']
})
export class TShirtComponent implements OnInit {
/** Based on the screen size, switch from standard to one column per row */
// cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
//   map(({ matches }) => {
//     if (matches) {
//       return [
//         { title: 'T-Shirt 1', cols: 1, rows: 1, image: "assets/images/camisa-manga-curta-masculina.jpg" },
//         { title: 'T-Shirt 2', cols: 1, rows: 1, image: "assets/images/camisa-regata-masculina.jpg" },
//         { title: 'T-Shirt 3', cols: 1, rows: 1, image: "assets/images/camisas-esportivas.jpg" }
//       ];
//     }

//     return [
//       { title: 'T-Shirt 1', cols: 2, rows: 1, image: "assets/images/camisa-manga-curta-masculina.jpg" },
//       { title: 'T-Shirt 2', cols: 1, rows: 1, image: "assets/images/camisa-regata-masculina.jpg" },
//       { title: 'T-Shirt 3', cols: 1, rows: 1, image: "assets/images/camisas-esportivas.jpg" }
//     ];
//   })
// );

// constructor(private breakpointObserver: BreakpointObserver) { }
categorias: Categoria[];

 constructor(private country: CoutryService) {}

ngOnInit(): void {
  this.loadCategorias();
}

loadCategorias(){
this.categorias = [];

this.country.getListCategorias().subscribe(data =>{
  const obj = Object(data);

  this.categorias = obj;
})
}

}
