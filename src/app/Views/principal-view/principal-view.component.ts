import { Component, OnInit } from '@angular/core';
import { SocialPostComponent } from "src/app/components/social-post/social-post.component";

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss'],
  imports: [SocialPostComponent]
})
export class PrincipalViewComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
