import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../interfaces/newsfeed.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], search: String): any {
    if (!arr) {
      return;
    }

    const result = arr.filter((post: IPost) => {
      return post.title.match('^.*' + search + '.*$');
    });

    return result;
  }

}
