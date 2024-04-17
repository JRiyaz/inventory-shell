import { Component, HostBinding, OnInit, effect, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { initFlowbite } from "flowbite";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: "./app.component.html",
  styles: [
    `
      input:checked {
        background-color: #22c55e; /* bg-green-500 */
      }

      input:checked ~ span:last-child {
        --tw-translate-x: 1.75rem; /* translate-x-7 */
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = "shell";
  themeSelected = false;
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem("darkMode") || "false"),
  );

  @HostBinding("class.dark") get mode() {
    return this.darkMode();
  }

  @HostBinding("class.green") get theme() {
    return this.themeSelected;
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem("darkMode", JSON.stringify(this.darkMode()));
    });
    console.log(this.themeSelected);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
