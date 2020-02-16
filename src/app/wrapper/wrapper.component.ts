import { Component, OnInit, ContentChild, TemplateRef, ContentChildren } from '@angular/core';

export interface Item {
  label:string;
}

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  items: Item[] = [
    {
      label: 'one'
    },
    {
      label: 'two'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
