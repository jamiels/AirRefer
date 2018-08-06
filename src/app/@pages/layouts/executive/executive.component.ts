import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RootLayout } from "../root/root.component";
declare var pg: any;
@Component({
  selector: "executive-layout",
  templateUrl: "./executive.component.html",
  styleUrls: ["./executive.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ExecutiveLayout extends RootLayout implements OnInit {
  menuItems = [
    {
      label: "Dashboard",
      details: "12 New Updates",
      routerLink: "/",
      iconType: "pg",
      iconName: "home"
    },
    {
      label: "Market",
      details: "12 New Updates",
      routerLink: "/market",
      iconType: "pg",
      iconName: "home"
    },
    {
      label: "Inbound",
      routerLink: "/inbound",
      iconType: "pg",
      iconName: "social"
    },
    {
      label: "Outbound",
      routerLink: "/outbound",
      iconType: "pg",
      iconName: "layouts"
    },
    {
      label: "Deals",
      routerLink: "/deals",
      iconType: "pg",
      iconName: "grid"
    },
    {
      label: "Reports",
      routerLink: "/reports",
      iconType: "pg",
      iconName: "grid"
    },
    {
      label: "Back Office",
      routerLink: "/reports",
      iconType: "pg",
      iconName: "grid"
    }

    /*
    {
      label: "Views",
      routerLink: "views",
      iconType: "pg",
      iconName: "ui"
    },
    {
      label: "Tables",
      iconType: "pg",
      iconName: "tables",
      toggle: "close",
      mToggle: "close",
      submenu: [
        {
          label: "Basic Tables",
          routerLink: "tables/basic",
          iconType: "letter",
          iconName: "bt"
        },
        {
          label: "Advance Tables",
          routerLink: "tables/advance",
          iconType: "letter",
          iconName: "dt"
        }
      ]
    },
    {
      label: "Maps",
      iconType: "pg",
      iconName: "map",
      toggle: "close",
      mToggle: "close",
      submenu: [
        {
          label: "Google Maps",
          routerLink: "maps/google/with-header",
          iconType: "letter",
          iconName: "gm"
        }
      ]
    },
    {
      label: "Charts",
      routerLink: "charts",
      iconType: "pg",
      iconName: "charts"
    },
    {
      label: "Extra",
      iconType: "pg",
      iconName: "bag",
      toggle: "close",
      mToggle: "close",
      submenu: [
        {
          label: "Invoice",
          routerLink: "extra/invoice",
          iconType: "letter",
          iconName: "in"
        },
        {
          label: "404 Page",
          routerLink: "session/error/404",
          iconType: "letter",
          iconName: "pg"
        },
        {
          label: "500 Page",
          routerLink: "session/error/500",
          iconType: "letter",
          iconName: "pg"
        },
        {
          label: "Login",
          routerLink: "session/login",
          iconType: "letter",
          iconName: "l"
        },
        {
          label: "Register",
          routerLink: "session/register",
          iconType: "letter",
          iconName: "re"
        },
        {
          label: "Lockscreen",
          routerLink: "session/lock",
          iconType: "letter",
          iconName: "ls"
        },
        {
          label: "Gallery",
          routerLink: "extra/gallery",
          iconType: "letter",
          iconName: "gl"
        },
        {
          label: "Timeline",
          routerLink: "extra/timeline/container",
          iconType: "letter",
          iconName: "t"
        }
      ]
    },
    {
      label: "Docs",
      externalLink: "https://docs.pages.revox.io/v/angular/",
      target: "_blank",
      iconType: "pg",
      iconName: "note"
    },
    {
      label: "Changelog",
      externalLink: "http://changelog.pages.revox.io/",
      target: "_blank",
      iconType: "letter",
      iconName: "Cl"
    }*/
  ];
  ngOnInit() {
    pg.isHorizontalLayout = true;
    this.changeLayout("horizontal-menu");
    this.changeLayout("horizontal-app-menu");
  }
}
