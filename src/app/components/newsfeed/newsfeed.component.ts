import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsFeedService } from '../../services/newsfeed.service';
import { IPost } from '../../interfaces/newsfeed.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit, OnDestroy {


  public posts: IPost[] = [];
  public postSubcription$: Subscription;

  public search: String = '';

  constructor(private newsFeedService: NewsFeedService) {
    this.getPostsFromService();
  }

  ngOnInit() {
  }

  getPostsFromService() {
    this.postSubcription$ = this.newsFeedService.getPosts().subscribe((data: IPost[]) => {
      this.posts = data;
    }, (err) => {
      console.log('posts error', err);
    });
  }

  ngOnDestroy(): void {
    if (this.postSubcription$) {
      this.postSubcription$.unsubscribe();
    }
  }

  postSuccess(data: IPost) {
    alert(` Post  ${data.title} successfully Inserted`);
  }
}
