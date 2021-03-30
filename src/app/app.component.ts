import { Component, OnInit } from '@angular/core';
import sigma from 'sigma';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'sigma-test';
  s!: any;

  data = {
    "nodes": [
      {
        "id": "n0",
        "label": "A node",
        "x": 0,
        "y": 0,
        "size": 3
      },
      {
        "id": "n1",
        "label": "Another node",
        "x": 3,
        "y": 1,
        "size": 2
      },
      {
        "id": "n2",
        "label": "And a last one",
        "x": 1,
        "y": 3,
        "size": 1
      }
    ],
    "edges": [
      {
        "id": "e0",
        "source": "n0",
        "target": "n1"
      },
      {
        "id": "e1",
        "source": "n1",
        "target": "n2"
      },
      {
        "id": "e2",
        "source": "n2",
        "target": "n0"
      }
    ]
  }
  ngOnInit(): void {
   this.s = new sigma({
      graph: this.data,
      container: 'container',
      settings: {
          defaultNodeColor: '#ec5148'
      }
    });
    this.s.refresh();
  }


}
