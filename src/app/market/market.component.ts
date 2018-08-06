import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-market",
  templateUrl: "./market.component.html",
  styleUrls: ["./market.component.css"]
})
export class MarketComponent implements OnInit {
  rows = [
    { id: "Austin", entity: "Male", category: "Swimlane" },
    { id: "Austin", entity: "Male", category: "DDD" },
    { id: "Austin", entity: "Male", category: "XX" },
    { id: "Austin", entity: "Male", category: "ZZ" },
    { id: "ddd", entity: "Male", category: "XX" },
    { id: "xxx", entity: "Male", category: "XX" },
    { id: "qq", entity: "Male", category: "XX" },
    { id: "rr", entity: "Male", category: "XX" },
    { id: "tt", entity: "Male", category: "XX" },
    { id: "nnn", entity: "Male", category: "XX" },
    { id: "uuu", entity: "Male", category: "XX" },
    { id: "ttt", entity: "Male", category: "XX" },
    { id: "eee", entity: "Male", category: "XX" },
    { id: "ooo", entity: "Male", category: "XX" },
    { id: "qqq", entity: "Male", category: "XX" },
    { id: "yy", entity: "Male", category: "XX" },
    { id: "nnn", entity: "Male", category: "XX" }
  ];

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

  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? "standard" : "force";

  //columns = [{ prop: "name" }, { name: "Gender" }, { name: "Company" }];

  constructor() {}

  ngOnInit() {}
}
