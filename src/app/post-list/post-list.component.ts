import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  constructor() { }

  postsList = [
    {
      title: 'Lorem ipsum dolor sit amet #1',
      content: 'Praesent nec rhoncus odio, quis feugiat eros. Suspendisse fermentum lorem facilisis, mollis orci sit amet, sagittis ipsum.',
      likesAmount: -12,
      created_at: new Date(2018, 11, 17, 3, 17, 0)
    },

    {
      title: 'Lorem ipsum dolor sit amet #2',
      content: 'Praesent nec rhoncus odio, quis feugiat eros. Suspendisse fermentum lorem facilisis, mollis orci sit amet, sagittis ipsum.',
      likesAmount: 12,
      created_at: new Date(2018, 11, 17, 3, 17, 0)
    },

    {
      title: 'Lorem ipsum dolor sit amet #3',
      content: 'Praesent nec rhoncus odio, quis feugiat eros. Suspendisse fermentum lorem facilisis, mollis orci sit amet, sagittis ipsum.',
      likesAmount: 12,
      created_at: new Date(2018, 11, 17, 3, 17, 0)
    }
  ];

  ngOnInit() {
  }

}
