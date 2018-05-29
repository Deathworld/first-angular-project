import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my awesome blog';

  postsList = [
    {
      title: 'Lorem ipsum dolor sit amet #1',
      content: 'Praesent nec rhoncus odio, quis feugiat eros. Suspendisse fermentum lorem facilisis, mollis orci sit amet, sagittis ipsum.',
      likesAmount: 12,
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


}
