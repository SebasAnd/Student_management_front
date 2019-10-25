import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.css']
})
export class AlumnsComponent implements OnInit {
  alumns: any = [];
  title = 'frontapllication';
  constructor(
    protected restService: RestService,private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    
    this.restService.getAlumns(this.route.snapshot.paramMap.get("id"))
    .subscribe(
      (data) => { // Success
        console.log(data);
        this.alumns = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
