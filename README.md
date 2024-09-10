
# E-commerce

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


```
my-app
├─ .angular
├─ .editorconfig
├─ .git
├─ .gitignore
├─ angular.json
├─ backend
│  ├─ db
│  │  ├─ collection-0--4983969937759806789.wt
│  │  ├─ collection-2--4983969937759806789.wt
│  │  ├─ collection-4--4983969937759806789.wt
│  │  ├─ diagnostic.data
│  │  │  ├─ metrics.2024-09-08T13-55-08Z-00000
│  │  │  └─ metrics.interim
│  │  ├─ index-1--4983969937759806789.wt
│  │  ├─ index-3--4983969937759806789.wt
│  │  ├─ index-5--4983969937759806789.wt
│  │  ├─ index-6--4983969937759806789.wt
│  │  ├─ journal
│  │  │  ├─ WiredTigerLog.0000000001
│  │  │  ├─ WiredTigerPreplog.0000000001
│  │  │  └─ WiredTigerPreplog.0000000002
│  │  ├─ mongod.lock
│  │  ├─ sizeStorer.wt
│  │  ├─ storage.bson
│  │  ├─ WiredTiger
│  │  ├─ WiredTiger.lock
│  │  ├─ WiredTiger.turtle
│  │  ├─ WiredTiger.wt
│  │  ├─ WiredTigerHS.wt
│  │  └─ _mdb_catalog.wt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ productModel.js
│  └─ server.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ server.js
├─ server.ts
├─ src
│  ├─ app
│  │  ├─ app.component.css
│  │  ├─ app.component.html
│  │  ├─ app.component.js
│  │  ├─ app.component.spec.js
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.config.js
│  │  ├─ app.config.server.js
│  │  ├─ app.config.server.ts
│  │  ├─ app.config.ts
│  │  ├─ app.routes.js
│  │  ├─ app.routes.ts
│  │  ├─ auth.guard.spec.ts
│  │  ├─ auth.guard.ts
│  │  ├─ auth.service.spec.ts
│  │  ├─ auth.service.ts
│  │  ├─ cart
│  │  │  ├─ cart.component.css
│  │  │  ├─ cart.component.html
│  │  │  ├─ cart.component.spec.ts
│  │  │  └─ cart.component.ts
│  │  ├─ cart.service.ts
│  │  ├─ checkout
│  │  │  ├─ checkout.component.css
│  │  │  ├─ checkout.component.html
│  │  │  ├─ checkout.component.spec.ts
│  │  │  └─ checkout.component.ts
│  │  ├─ core
│  │  │  ├─ core.module.ts
│  │  │  └─ service
│  │  │     ├─ api.service.spec.ts
│  │  │     └─ api.service.ts
│  │  ├─ customer
│  │  │  └─ customer.module.ts
│  │  ├─ home
│  │  │  ├─ home.component.css
│  │  │  ├─ home.component.html
│  │  │  ├─ home.component.spec.ts
│  │  │  └─ home.component.ts
│  │  ├─ product-detail
│  │  │  ├─ product-detail.component.css
│  │  │  ├─ product-detail.component.html
│  │  │  ├─ product-detail.component.spec.ts
│  │  │  └─ product-detail.component.ts
│  │  ├─ product-list
│  │  │  ├─ product-list.component.css
│  │  │  ├─ product-list.component.html
│  │  │  ├─ product-list.component.spec.ts
│  │  │  └─ product-list.component.ts
│  │  ├─ product-search
│  │  │  ├─ product-search.component.css
│  │  │  ├─ product-search.component.html
│  │  │  ├─ product-search.component.spec.ts
│  │  │  └─ product-search.component.ts
│  │  ├─ product.service.ts
│  │  ├─ product.ts
│  │  ├─ shared
│  │  │  ├─ directives
│  │  │  │  ├─ number-only.directive.spec.ts
│  │  │  │  └─ number-only.directive.ts
│  │  │  ├─ layouts
│  │  │  │  ├─ footer
│  │  │  │  │  ├─ footer.component.css
│  │  │  │  │  ├─ footer.component.html
│  │  │  │  │  ├─ footer.component.spec.ts
│  │  │  │  │  └─ footer.component.ts
│  │  │  │  ├─ header
│  │  │  │  │  ├─ header.component.css
│  │  │  │  │  ├─ header.component.html
│  │  │  │  │  ├─ header.component.spec.ts
│  │  │  │  │  └─ header.component.ts
│  │  │  │  └─ page-not-found
│  │  │  │     ├─ page-not-found.component.css
│  │  │  │     ├─ page-not-found.component.html
│  │  │  │     ├─ page-not-found.component.spec.ts
│  │  │  │     └─ page-not-found.component.ts
│  │  │  └─ shared.module.ts
│  │  ├─ user-registration
│  │  │  ├─ user-registration.component.css
│  │  │  ├─ user-registration.component.html
│  │  │  ├─ user-registration.component.spec.ts
│  │  │  └─ user-registration.component.ts
│  │  ├─ user.service.spec.ts
│  │  ├─ user.service.ts
│  │  └─ user.ts
│  ├─ assets
│  │  └─ .gitkeep
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.js
│  ├─ main.server.js
│  ├─ main.server.ts
│  ├─ main.ts
│  └─ styles.css
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```