import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TasksComponent } from './tasks/tasks.component';
import {MatCardModule} from '@angular/material/card';

import { LayoutModule } from '@angular/cdk/layout';
import { PostsComponent } from './posts/posts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomepageComponent } from './homepage/homepage.component';
import { TasksAndPostsComponent } from './tasks-and-posts/tasks-and-posts.component';
import { NewusrComponent } from './newusr/newusr.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TasksComponent,
    PostsComponent,
    HomepageComponent,
    TasksAndPostsComponent,
    NewusrComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
