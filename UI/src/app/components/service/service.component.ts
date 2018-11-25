import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Service } from './Service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  servicos: Service[];
  cards;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.loadServicos();
    this.cards = this.servicos;
    this.cards = this.cards.forEach(servico => {servico.cols = 2, servico.rows = 1});
  }

  loadServicos() {
    this.servicos = [];
    
    this.serviceService.getListServicos().subscribe(data =>{
      const obj = Object(data);
    
      this.servicos = obj;
    })
  }

}
