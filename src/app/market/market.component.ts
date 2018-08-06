import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-market",
  templateUrl: "./market.component.html",
  styleUrls: ["./market.component.scss"]
})
export class MarketComponent implements OnInit {
  rows = [{ id: "Austin", entity: "Male", category: "Swimlane" }];

  columns = [
    { name: "ID" },
    { name: "Entity" },
    { name: "Category" },
    { name: "Type" },
    { name: "Referrer" },
    { name: "Jurisdiction" },
    { name: "Region" },
    { name: "Potential Deal Size" },
    { name: "Potential GCI" },
    { name: "Award Method" },
    { name: "Interest/Bids" },
    { name: "Action" }
  ];
  //columns = [{ prop: "name" }, { name: "Gender" }, { name: "Company" }];

  constructor() {}

  ngOnInit() {}
}
