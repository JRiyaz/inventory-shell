// declare module 'mfe1/Module';
// "flight": {
//     "projectType": "application",
//     "schematics": {},
//     "root": "projects/flight",
//     "sourceRoot": "projects/flight/src",
//     "prefix": "app",
//     "architect": {
//         "build": {
//             "builder": "ngx-build-plus:browser",
//             "options": {
//                 "outputPath": "dist/flight",
//                 "index": "projects/flight/src/index.html",
//                 "main": "projects/flight/src/main.ts",
//                 "polyfills": "projects/flight/src/polyfills.ts",
//                 "tsConfig": "projects/flight/tsconfig.app.json",
//                 "assets": [
//                     "projects/flight/src/favicon.ico",
//                     "projects/flight/src/assets"
//                 ],
//                 "styles": [
//                     "projects/flight/src/styles.css"
//                 ],
//                 "scripts": [],
//                 "extraWebpackConfig": "projects/flight/webpack.config.js",
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
//                             "replace": "projects/flight/src/environments/environment.ts",
//                             "with": "projects/flight/src/environments/environment.prod.ts"
//                         }
//                     ],
//                     "outputHashing": "all",
//                     "extraWebpackConfig": "projects/flight/webpack.prod.config.js"
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
//                     "extraWebpackConfig": "projects/flight/webpack.prod.config.js"
//                 },
//                 "development": {
//                     "browserTarget": "flight:build:development"
//                 }
//             },
//             "defaultConfiguration": "development",
//             "options": {
//                 "port": 4201,
//                 "publicHost": "http://localhost:4201",
//                 "extraWebpackConfig": "projects/flight/webpack.config.js"
//             }
//         },
//         "extract-i18n": {
//             "builder": "ngx-build-plus:extract-i18n",
//             "options": {
//                 "browserTarget": "flight:build",
//                 "extraWebpackConfig": "projects/flight/webpack.config.js"
//             }
//         },
//         "test": {
//             "builder": "@angular-devkit/build-angular:karma",
//             "options": {
//                 "main": "projects/flight/src/test.ts",
//                 "polyfills": "projects/flight/src/polyfills.ts",
//                 "tsConfig": "projects/flight/tsconfig.spec.json",
//                 "karmaConfig": "projects/flight/karma.conf.js",
//                 "assets": [
//                     "projects/flight/src/favicon.ico",
//                     "projects/flight/src/assets"
//                 ],
//                 "styles": [
//                     "projects/flight/src/styles.css"
//                 ],
//                 "scripts": []
//             }
//         }
//     }
// }