import { Component, OnInit } from '@angular/core';
import { Babylook } from './baby-look';
import { BabyLookService } from './baby-look.service';

@Component({
  selector: 'app-baby-look',
  templateUrl: './baby-look.component.html',
  styleUrls: ['./baby-look.component.css']
})
export class BabyLookComponent implements OnInit {
  babylookList: Babylook[];
  constructor(private babyLookService: BabyLookService) { }

  ngOnInit() {
    this.loadBabylook();
  }

  loadBabylook() {
    this.babyLookService.getListBabylook().subscribe(data => {
      const obj = Object(data);
      this.babylookList = obj;
      //colocar linhas e colunas
      this.babylookList.forEach(babylook => {
        babylook.cols = 1;
        babylook.rows = 1;
      })
    });

  }

}
