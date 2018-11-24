import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
/** Based on the screen size, switch from standard to one column per row */
cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { title: 'Serigrafia', cols: 1, rows: 1, comments: "Impressão de tecidos", image: "assets/images/caneca.jpg" },
        { title: 'Sublimação', cols: 1, rows: 1, comments: "Impressão de acrílico", image: "assets/images/caneca.jpg" }
      ];
    }

    return [
      { title: 'Serigrafia', cols: 2, rows: 1, comments: "Impressão de tecidos", image: "assets/images/caneca.jpg" },
      { title: 'Serigrafia', cols: 2, rows: 1, comments: "Impressão de acrílico", image: "assets/images/caneca.jpg" }
    ];
  })
);

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
