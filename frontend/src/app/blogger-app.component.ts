import { Component, OnInit } from '@angular/core';
import axios  from 'axios';

@Component({
  selector: 'blogger-app-root',
  templateUrl: './blogger-app.component.html',
  styleUrls: ['./blogger-app.component.scss']
})
export class BloggerAppComponent implements OnInit{
  title = 'app-client';

  ngOnInit() {
    // axios.get("http://localhost:8080").then(resp => {
    //   console.log('Resp :', resp.data);
    // });
  }
}
