import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-alumnhistory',
  templateUrl: './alumnhistory.component.html',
  styleUrls: ['./alumnhistory.component.css']
})
export class AlumnhistoryComponent implements OnInit {
  student: any = [];
  asignature: any = []
  title = 'frontapllication';
  constructor(
    protected restService: RestService,private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    
    this.restService.getRecord(this.route.snapshot.paramMap.get("id"))
    .subscribe(
      (data) => { // Success
        console.log(data);
        this.student = data;
        this.restService.getMateriaName(data[0].Asignaturaid).subscribe(
          (name) => { // Success
            console.log(name);
            this.asignature = name;            
          },
          (error) => {
            console.error(error);
          }
        );

      },
      (error) => {
        console.error(error);
      }
    );
  }

}
