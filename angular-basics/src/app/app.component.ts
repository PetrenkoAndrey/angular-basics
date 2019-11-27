import { Component } from '@angular/core';
import { post } from 'selenium-webdriver/http';

export interface Post{
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Учу ангулар компоненты', text: 'Я учу компоненты', id: 1},
    {title: 'Следущий блок', text: 'Будет про пайпы', id: 2}
  ]

  updatePosts(post: Post){
    this.posts.unshift(post)
    console.log('Post ', post)
  }

}
