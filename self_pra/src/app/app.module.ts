import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsdToInrPipe } from './pipe1/usd-to-inr.pipe';
import { DateAndTimePipe } from './pipe2/date-and-time.pipe';
import { StudentsDataComponent } from './students-data/students-data.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentServiceService } from './service2/student-service.service';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { BookService } from './service3/book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testdata';
import { HeaderComponent } from './includes/header/header.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsdToInrPipe,
    DateAndTimePipe,
    StudentsDataComponent,
    StudentsListComponent,
    StudentComponent,
    StudentDetailsComponent,
    HeaderComponent,
    TdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(TestData)

  ],
  providers: [
    provideClientHydration(),
    StudentServiceService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
