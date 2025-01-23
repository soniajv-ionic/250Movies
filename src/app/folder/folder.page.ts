import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, 
  IonList, IonLabel, IonImg, IonItem, 
  IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonBadge } from '@ionic/angular/standalone';
import { MoviesManagerService } from '../services/movies-manager.service';
import { IMovie } from '../interfaces/imovie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonButtons, IonMenuButton, 
    IonTitle, IonContent, IonList, IonLabel, IonImg, IonItem, 
    IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonBadge ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  public movies : IMovie[] | undefined;

  moviesManager = inject(MoviesManagerService);
  constructor() {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //***Solución 'fácil'***
    this.movies = this.moviesManager.getMovies();
    //***Fin de solución 'fácil'***

    /*
    //***Solución 'difícil'***
    this.moviesManager.getMovies().subscribe({
      next : data => {
        this.peliculas = data;
      }, 
      complete : () => {
        console.log('Completado');
      }
    });
    //***Fin de solución difícil***
    */
  }
}
