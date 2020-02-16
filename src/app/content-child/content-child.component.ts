import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit {

  @Input()
  items: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
