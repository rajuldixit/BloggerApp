import { Component, OnInit } from '@angular/core';
import axios  from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-client';

  ngOnInit() {
    axios.get("http://localhost:8080").then(resp => {
      console.log('Resp :', resp.data);
    });
  }
}
