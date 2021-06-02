import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models";
import {PostService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  id: number;

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostsWithUsersId(this.id).subscribe(value => this.posts = value)
  }

}
