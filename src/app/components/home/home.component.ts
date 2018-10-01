import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Imagem', cols: 1, rows: 1, image: "assets/images/camisa.jpg" }
        ];
      }
  
      return [
        { title: 'Imagem', cols: 2, rows: 1, image: "assets/images/camisa.jpg" }
      ];
    })
  );
  
    constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
