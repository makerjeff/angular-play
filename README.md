#Angular Play v0.0.2
Last Update: 2016.JAN.12 4:25pm
Angular Experiments, UI-Router, custom Directives, etc.

###Tutorials Base:
[Angular UI-Router](https://scotch.io/tutorials/angular-routing-using-ui-router)
[Custom Directives](http://www.ng-newsletter.com/posts/directives.html)

###Start-up Instructions:
1. Installed nodemon with ```npm install -g nodemon``` (-g means 'globally').
2. Run ```server.js``` in Nodemon with ```nodemon server.js <port>```. Without the port argument, it'll default to 8000.

###Custom Directive Notes

*Restrict Option* 

You can restrict the method of invoking a directive to:

- Attribute
- Class
- Element
- Comment

*Require Option*

You can specify dependencies. Using ```^ngModel``` and the browser will expect an ```ng-model=""``` to be part of your custom directive.

```^``` -- Look for the controller on parent elements, not just the local scope <br>
```?``` -- Don't raise an error if the controller isn't found<br>

*Scope*

```scope: true``` will enable a new scope for the directive. It's off by default. <br>
```scope: {}``` without any key/value pairs will create an ```isolate``` scope for the directive.  It ensures that your directive doens't mess with the controller's scope.

Pass in one of these for the respective effect:

```@``` or ```@attr```: Binds the local scope to your directive. You'd be able to use the outer scope inside your directive's scope. <br>
```=``` or ```=attr```: Bi directional binding: If the parent model changes, so does the local variable. <br>
```&``` or ```&attr```: Parent execution binding: when setting a value, it'll affect the parent scope.

*Link*

The ```link:``` option is a function that will run as soon as the directive is linked to the DOM. 