import { Routes } from "@angular/router";
//Layouts
import { ExecutiveLayout } from "./@pages/layouts";
import { MarketComponent } from "./market/market.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InboundComponent } from "./inbound/inbound.component";
import { OutboundComponent } from "./outbound/outbound.component";
import { AlertComponent } from "ngx-bootstrap";
import { MyDealsComponent } from "./my-deals/my-deals.component";
import { ReportsComponent } from "./reports/reports.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: ExecutiveLayout,
    children: [
      {
        path: "market",
        component: MarketComponent,
        data: {
          title: "Marketzzz"
        }
      }
    ]
  },
  {
    path: "",
    component: ExecutiveLayout,
    children: [
      {
        path: "",
        component: DashboardComponent,
        data: {
          title: "Dashboard"
        }
      }
    ]
  },
  {
    path: "",
    component: ExecutiveLayout,
    children: [
      {
        path: "inbound",
        component: InboundComponent,
        data: {
          title: "Inbound"
        }
      }
    ]
  },
  {
    path: "",
    component: ExecutiveLayout,
    children: [
      {
        path: "outbound",
        component: OutboundComponent,
        data: {
          title: "Outbound"
        }
      }
    ]
  },
  {
    path: "",
    component: ExecutiveLayout,
    children: [
      {
        path: "alerts",
        component: AlertComponent,
        data: {
          title: "Alerts"
        }
      }
    ]
  },
  {
    path: "",
    component: ExecutiveLayout,
    children: [
      {
        path: "deals",
        component: MyDealsComponent,
        data: {
          title: "My Deals"
        }
      }
    ]
  },
  {
    path: "",
    component: ExecutiveLayout,
    children: [
      {
        path: "reports",
        component: ReportsComponent,
        data: {
          title: "Reports"
        }
      }
    ]
  }
];
