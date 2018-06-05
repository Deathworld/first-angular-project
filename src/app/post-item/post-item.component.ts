import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postCreatedAt: Date;

  /* Returns the color depending of likes amount*/
  getColor(){
    if(this.postLikes > 0)
      return ('green');
    else
      return ('red');
  }


  /* Increases likes amount*/
  addLike(){
    this.postLikes++;
  }
  /* Decrese Likes amount */
  removeLike(){
    this.postLikes--;
  }

  deletePost(){

  }

  constructor() { }

  ngOnInit() {
  }

}
