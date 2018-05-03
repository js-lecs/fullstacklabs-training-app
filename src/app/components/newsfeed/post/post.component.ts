import { Component, OnInit, Input, AfterViewInit, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewInit,
  DoCheck, OnChanges {


  @Input() title: String;
  @Input() body: String;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    // JQUERY codes insert here
  }

  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnChanges() {
  }
}
