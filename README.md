Command:
- ng new my-app
- cd my-app
- ng serve --open

src folder -> write code here
app.component.html -> index.html <app-root> content's

npm i bootstrap
node-modules/bootstrap/dist/css/bootstrap-min -> relative path TO
- angular-cli.json

tsconfig.json -> app starting

main.ts 
- typescript file
- these files compile to javascript, when the app runs

main.ts RUN app.module RUN app.component(this contains the html selector name ex. <app-route>)

spec.ts -> test components

Command: ng g c component-name
- create new component
- How to paste this component to the index.html? -> header.component.ts selector's name? -> <app-header>
- copy-paste in the app.component.html file


Communicate with events between components:
- if we click the about link, the content have change
- *ngIf="condition" in html and declare neccessary variable in .ts file
- native click event for the link
- create method in .ts file for the click event
- create event listener: EventEmitter
- subscribe for the event in app.component.html



# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
