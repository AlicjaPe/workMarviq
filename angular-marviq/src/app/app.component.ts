import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { Fabryka } from "./fabryka";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angular-marviq";

  fabryka: Fabryka[] = [];
  // fabryka: any = [];
  headers: any;
  spresp: any;
  postdata: Fabryka;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getFabryki();
  }

  // Get full response

  // getFabryki() {
  //   this.api.getFabryka()
  //   .subscribe(resp => {
  //     console.log(resp);
  //     const keys = resp.headers.keys();
  //     this.headers = keys.map((key: any) =>
  //       `${key}: ${resp.headers.get(key)}`);

  //     for (const data of resp.body) {
  //       this.fabryka.push(data);
  //     }
  //     console.log(this.fabryka);
  //   });
  // }

  // Get specific fields response

  // getFabryki() {
  //   this.api.getFabryka()
  //     .subscribe(data => {
  //       console.log(data);
  //       for (const d of (data as any)) {
  //         this.fabryka.push({
  //           MACHINE: d.MACHINE,
  //           PRODUCTION: d.PRODUCTION
  //         });
  //       }
  //       console.log(this.fabryka);
  //     });
  // }

  getFabryki() {
    this.api.getFabryka().subscribe(data => {
      console.log(data);
    });
  }

  getFabrykaById(id: any) {
    this.api.getFabrykaById(id).subscribe(data => {
      console.log(data);
    });
  }

  addFabryka() {
    this.api.addFabryka(this.postdata).subscribe(resp => {
      return this.spresp.push(resp);
    });
  }

  updateFabryka(id: any) {
    this.api.updateFabryka(id, this.postdata).subscribe(resp => {
      return this.spresp.push(resp);
    });
  }

  deleteFabryka(id: any) {
    this.api.deleteFabryka(id).subscribe(resp => {
      return this.spresp.push(resp);
    });
  }
}

