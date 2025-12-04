import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialPostComponent } from "src/app/components/social-post/social-post.component";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
  imports: [SocialPostComponent, CommonModule],
})
export class ProfileViewComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  photoUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e";
  name = "Venga La Alegría";
  preferredName = "vla_oficial";
  email = "contacto@vla.com";
    bio = "¡Bienvenidos a la cuenta oficial de Venga La Alegría! Aquí compartimos momentos divertidos, noticias y más. ¡Síguenos para no perderte nada!";
  myPosts = [
    {
      time: "hace 1 h",
      text: "¡Qué buen día para compartir!",
      images: [
        "https://picsum.photos/id/22/800/450",
        "https://placekitten.com/500/450"
      ],
      likes: 230,
      comments: 12
    },
    {
      time: "hace 2 días",
      text: "Detrás de cámaras 📸",
      images: ["https://picsum.photos/id/22/800/450"],
      likes: 421,
      comments: 54
    }
  ];


}
