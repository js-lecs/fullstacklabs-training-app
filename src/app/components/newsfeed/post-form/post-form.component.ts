import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsFeedService } from '../../../services/newsfeed.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  public title: String = '';
  public body: String = '';
  @Output() success: EventEmitter<any> = new EventEmitter();

  constructor(private newsFeedService: NewsFeedService) { }

  ngOnInit() {
  }
  insertPost() {
    this.newsFeedService.insertPost(
      {
        title: this.title,
        body: this.body,
        userId: 1
      }
    ).subscribe((data) => {
      console.log('success post', data);
      this.success.emit(data);
    }, (err) => {
      console.log('error post', err);
    });
  }

}
