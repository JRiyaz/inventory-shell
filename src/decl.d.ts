// declare module 'mfe1/Module';

// "flight": "http://localhost:4500/remoteEntry.js"
// "flight": {
//     "projectType": "application",
//     "schematics": {},
//     "root": "projects/flight",
//     "sourceRoot": "projects/flight/ui/src",
//     "prefix": "app",
//     "architect": {
//         "build": {
//             "builder": "ngx-build-plus:browser",
//             "options": {
//                 "outputPath": "dist/flight/ui",
//                 "index": "projects/flight/ui/src/index.html",
//                 "main": "projects/flight/ui/src/main.ts",
//                 "polyfills": "projects/flight/ui/src/polyfills.ts",
//                 "tsConfig": "projects/flight/ui/tsconfig.app.json",
//                 "assets": [
//                     "projects/flight/ui/src/favicon.ico",
//                     "projects/flight/ui/src/assets"
//                 ],
//                 "styles": [
//                     "projects/flight/ui/src/styles.css"
//                 ],
//                 "scripts": [],
//                 "extraWebpackConfig": "projects/flight/ui/webpack.config.js",
//                 "commonChunk": false
//             },
//             "configurations": {
//                 "production": {
//                     "budgets": [
//                         {
//                             "type": "initial",
//                             "maximumWarning": "500kb",
//                             "maximumError": "1mb"
//                         },
//                         {
//                             "type": "anyComponentStyle",
//                             "maximumWarning": "2kb",
//                             "maximumError": "4kb"
//                         }
//                     ],
//                     "fileReplacements": [
//                         {
//                             "replace": "projects/flight/ui/src/environments/environment.ts",
//                             "with": "projects/flight/ui/src/environments/environment.prod.ts"
//                         }
//                     ],
//                     "outputHashing": "all",
//                     "extraWebpackConfig": "projects/flight/ui/webpack.prod.config.js"
//                 },
//                 "development": {
//                     "buildOptimizer": false,
//                     "optimization": false,
//                     "vendorChunk": true,
//                     "extractLicenses": false,
//                     "sourceMap": true,
//                     "namedChunks": true
//                 }
//             },
//             "defaultConfiguration": "production"
//         },
//         "serve": {
//             "builder": "ngx-build-plus:dev-server",
//             "configurations": {
//                 "production": {
//                     "browserTarget": "flight:build:production",
//                     "extraWebpackConfig": "projects/flight/ui/webpack.prod.config.js"
//                 },
//                 "development": {
//                     "browserTarget": "flight:build:development"
//                 }
//             },
//             "defaultConfiguration": "development",
//             "options": {
//                 "port": 4500,
//                 "publicHost": "http://localhost:4500",
//                 "extraWebpackConfig": "projects/flight/ui/webpack.config.js"
//             }
//         },
//         "extract-i18n": {
//             "builder": "ngx-build-plus:extract-i18n",
//             "options": {
//                 "browserTarget": "flight:build",
//                 "extraWebpackConfig": "projects/flight/ui/webpack.config.js"
//             }
//         },
//         "test": {
//             "builder": "@angular-devkit/build-angular:karma",
//             "options": {
//                 "main": "projects/flight/ui/src/test.ts",
//                 "polyfills": "projects/flight/ui/src/polyfills.ts",
//                 "tsConfig": "projects/flight/ui/tsconfig.spec.json",
//                 "karmaConfig": "projects/flight/ui/karma.conf.js",
//                 "assets": [
//                     "projects/flight/ui/src/favicon.ico",
//                     "projects/flight/ui/src/assets"
//                 ],
//                 "styles": [
//                     "projects/flight/ui/src/styles.css"
//                 ],
//                 "scripts": []
//             }
//         }
//     }
// }