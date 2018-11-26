import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Service } from './Service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  servicos: Service[];

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.loadServicos();
  }

  loadServicos() {
    this.servicos = [];
    
    this.serviceService.getListServicos().subscribe(data =>{
      const obj = Object(data);
    
      this.servicos = obj;
      this.servicos.forEach(servico => {
        servico.cols = 1;
        servico.rows = 1;
      });
    });
  }

}
