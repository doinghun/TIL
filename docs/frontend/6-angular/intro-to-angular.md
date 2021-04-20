---
slug: "intro-to-angular"
title: Introduction to Angular
---

### Benefits of Using Angular

- Gives applications a clean structure
- Re-usable code
- Applications more testable

### Building Blocks of Angular **Components**

- Data
- HTML Template
- Logic

### Components

1. Create a Component
2. Register it in module
3. Add an element in an HTML Markup

#### 1. Create a Component

`courses.component.ts`

```ts
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: "<h2>Courses</h2>",
})
export class CoursesComponent {}
```

#### 2. Register it in module

`app.module.ts`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component''
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 3. Add an element in an HTML Markup

`app.component.html`

```ts
<h1>Angular</h1>
<courses></courses>
```
