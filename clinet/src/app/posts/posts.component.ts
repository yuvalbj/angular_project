import { Post } from './../post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  @Input()
  postsForUser : Post = new Post();
  
  ngOnInit(): void {
  }

}
