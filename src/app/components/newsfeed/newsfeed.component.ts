import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../services/newsfeed.service';
import { IPost } from '../../interfaces/newsfeed.interface';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  public posts: IPost[] = [];

  public title: String = '';
  public body: String = '';
  constructor(private newsFeedService: NewsFeedService) {
    this.getPostsFromService();
  }

  ngOnInit() {
  }

  getPostsFromService() {
    this.newsFeedService.getPosts().subscribe((data: IPost[]) => {
      this.posts = data;
    }, (err) => {
      console.log('posts error', err);
    });
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
    }, (err) => {
      console.log('error post', err);
    });
  }
}
