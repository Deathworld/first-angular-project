import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostItemComponent} from './post-item/post-item.component';
import {PostListComponent} from './post-list/post-list.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {PostFormComponent} from './post-form/post-form.component';


const appRoutes: Routes = [
    {path: 'posts', component: PostListComponent},
    {path: 'add', component: PostFormComponent},
    {path: '**', redirectTo: 'posts'},

];

@NgModule({
    declarations: [
        AppComponent,
        PostItemComponent,
        PostListComponent,
        HeaderComponent,
        PostFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
