import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-baby-look',
  templateUrl: './baby-look.component.html',
  styleUrls: ['./baby-look.component.css']
})
export class BabyLookComponent implements OnInit {
/** Based on the screen size, switch from standard to one column per row */
cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { title: 'Camisa 1', cols: 1, rows: 1, image: "assets/images/manga-comprida-feminina.jpg" },
        { title: 'Camisa 2', cols: 1, rows: 1, image: "assets/images/manga-curta-feminina.jpg" },
        { title: 'Camisa 3', cols: 1, rows: 1, image: "assets/images/regata-feminina.jpg" }
      ];
    }

    return [
      { title: 'Camisa 1', cols: 2, rows: 1, image: "assets/images/manga-comprida-feminina.jpg" },
      { title: 'Camisa 2', cols: 1, rows: 1, image: "assets/images/manga-curta-feminina.jpg" },
      { title: 'Camisa 3', cols: 1, rows: 1, image: "assets/images/regata-feminina.jpg" }
    ];
  })
);

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
