import { Component, OnInit } from "@angular/core";
import { rows } from './rows.mockup';

@Component({
  selector: "app-market",
  templateUrl: "./market.component.html",
  styleUrls: ["./market.component.css"]
})
export class MarketComponent implements OnInit {
  rows = rows;

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
    { name: "Interest / Bids" },
    { name: "Action" }
  ];

  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? "standard" : "force";

  //columns = [{ prop: "name" }, { name: "Gender" }, { name: "Company" }];

  constructor() {}

  ngOnInit() {}

  public getCategoryCellClass({ row, column, value }) {
    return {
      'text-green': value === 'Residential',
      'text-blue': value === 'Commercial',
    }
  }

  public getAwardMethodCellClass({ row, column, value }) {
    return {
      'award-green': value === 'Flat Split',
      'award-blue': value === 'Negotiated Split',
    }
  }
}
