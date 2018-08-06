import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-market",
  templateUrl: "./market.component.html",
  styleUrls: ["./market.component.scss"]
})
export class MarketComponent implements OnInit {
  rows = [
    { name: "Austin", gender: "Male", company: "Swimlane" },
    { name: "Dany", gender: "Male", company: "KFC" },
    { name: "Molly", gender: "Female", company: "Burger King" }
  ];
  columns = [{ prop: "name" }, { name: "Gender" }, { name: "Company" }];

  constructor() {}

  ngOnInit() {}
}
