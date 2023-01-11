import { Component } from '@angular/core';
import {Time} from "@angular/common";

const cors = require('cors');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  value = "some text"
  date:Date = new Date()
  title = 'lrn.angular';



}
