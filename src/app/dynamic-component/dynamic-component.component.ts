import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css'],
})
export class DynamicComponentComponent implements OnInit {
  product: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    //console.log(history.state);
    this.product = history.state;
  }
}
