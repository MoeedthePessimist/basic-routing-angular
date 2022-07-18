import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input-form-component',
  templateUrl: './input-form-component.component.html',
  styleUrls: ['./input-form-component.component.css'],
})
export class InputFormComponentComponent implements OnInit {
  public product = { id: '1', name: 'Angular' };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl('/dynamic', { state: this.product });
  }
}
