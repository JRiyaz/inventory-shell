import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "user",
        loadChildren: () =>
            loadRemoteModule("user-app", "./User-Routes").then((m) => m.USER_ROUTES),
    },
];
