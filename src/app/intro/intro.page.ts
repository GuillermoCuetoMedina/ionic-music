import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      id: 0,
      title: "ARES MUSIC",
      description: "La mejor aplicacin de musica gratis y sin publicidad.",
      image: "assets/images/logo.png",
      alt: "imagen de logo"
    },
    {
      id: 1,
      title: "LISTA DE REPRODUCCION",
      description: "Puedes Crear cientos de lista de reproduccion de acuerdo a tus estados de animo.",
      icon: "",
      image: "assets/images/logo1.png",
      alt: "imagen de musica"
    },
    { 
      id: 2,
      title: "DIVERSIDAD",
      description: "Encontratras miles de canciones y diversos generos musicales",
      icon: "pause-outline",
      image: "assets/images/logo2.png",
      alt: "imagen de musica 2"
    },
  {
    id: 3,
    title: "BIENVENIDO",
    description: "Que esperas, entra y registarte. Disfruta de la evolucion musical",
    icon: "pause-outline",
    image: "assets/images/logo3.png",
    alt: "imagen de musica 2"
  }
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
