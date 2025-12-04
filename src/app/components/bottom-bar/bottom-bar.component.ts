import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  imports: [RouterLink]
})
export class BottomBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
