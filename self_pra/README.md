27.02.24
-custom pipes
  ->1.ng g p pipes/pipeName
  ->2.transformation function
  ->3.create a method and in pipe.ts file and call them in main ts file. for view used in the app.comp.html file.
  ->4.use (|) this in the html file(main) with the method made.

-services
 ->1.ng g s services/serviceName
 ->2.use this in the serviceName.ts file 
     (@Injectable({
       providedIn: 'root'
     }))
 ->3.make a variable and assign some value to them and then make a constructor.
 ->4.make a method with return message(with the method name).
 ->5.use this to display the message on the UI :-
     constructor(private _firstserviceService: FirstserviceService){
       this._msg = _firstserviceService.getmessage ();
     }
     ->we have more then one method to display the message on the UI.
 ->6.at last make this [_msg: string = "";] and use in the app.comp.html. like [<h2>Your message: {{_msg}}</h2>]

-Dependency Injection
  Angular facilitates the interaction between dependency consumers and dependency providers using an abstraction called Injector.
  Here's how it works:
  Service Providers: Angular maintains a registry of these materials (services) and knows where to find them.
  Component Consumers: When a component needs a certain service or dependency to perform a task, it doesn't have to go looking for it. Instead, it simply     asks Angular for it.
  Automatic Delivery: Angular's DI system ensures that the required service is provided to the component, whether it's a pre-existing one or a new instance     created on-demand.
  In layman's terms, dependency injection in Angular is like having a reliable delivery system for all the necessary tools and materials your application     needs to function properly, saving you from the hassle of fetching them yourself. It promotes modular and reusable code by making components more self-    sufficient and easier to maintain.

-Resolution Modifier
 ->1.@Optional :- This decorator tells Angular that a dependency is not required. If Angular can't find a provider for a dependency marked as @Optional, it                     will inject null instead of throwing an error. [It's okay if this dependency isn't available; just give me null if it's missing."]
               :- This is useful when you have optional dependencies that may or may not be available.
 ->2.@Self     :- Look for this dependency only within the current component or directive; don't go searching in parent components.
               :- This is helpful when you want to ensure that a dependency is scoped to the current component or directive and doesn't get overridden by a                   parent component.
 ->3.@SkipSelf :- This decorator tells Angular to skip the current component's injector and search for a provider in its parent injectors instead. It's                   useful when you want to access a dependency provided by a parent component rather than the current one.
                  ["Don't look for this dependency here; skip this component and search in its parent components."]
 ->4.@Host     :- When you use @Host, Angular searches for a provider of the dependency starting from the host element of the current component. The host                   element is the element to which the current component is attached. This is typically used with directives that are applied to host                   elements.["Start searching for this dependency from the host element of the current component."]















# SelfPra

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

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
