import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  updateMovie(movie: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  movieList : any[] = [
    {
      id:1,
      movieName:'Aavesham',
      genre:'Action/Comedy',
      duration:'2h 38m',
      description:'Aavesham is a Malayalam movie starring Fahadh Faasil, Sajin Gopu and Mansoor Ali Khan in prominent roles.',
      image:'assets/aavesham.avif',
      bgImage:'assets/aaveshambg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    },
    {
      id:2,
      movieName:'Aadujeevitham',
      genre:'Adventure/Drama',
      duration:'2h 53m',
      description:'A man in the early 1990s travels from the lush green lands of his hometown to a desert country for livelihood. What awaits him and his battle using only hope & faith is a true story stranger than any fiction.',
      image:'assets/aadu.avif',
      bgImage:'assets/aadubg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    },
    {
      id:3,
      movieName:'Varshangalkku Shesham',
      genre:'Comedy/Drama/Romantic',
      duration:'2h 45m',
      description:'Varshangalkku Shesham is a tale about two artistic individuals Murali and Venu, whose dreams and destinies intertwine and bring them together.',
      image:'assets/varsham.avif',
      bgImage:'assets/varshambg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    },
    {
      id:4,
      movieName:'Pavi Care Taker',
      genre:'Comedy/Drama/Romantic',
      duration:'2h 33m',
      description:'Pavi, a caretaker in a residential flat navigates through life and its hurdles, when an unforeseen companionship turns his life around.',
      image:'assets/pavi.avif',
      bgImage:'assets/pavibg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    },
    {
      id:5,
      movieName:'Nadikar',
      genre:'Comedy/Drama',
      duration:'2h 22m',
      description:'Nadikar showcases the journey of an accidental superstar, David Padikkal including the ups and downs of his career and life.',
      image:'assets/nadikar.avif',
      bgImage:'assets/nadikarbg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    },
    {
      id:6,
      movieName:'Malayalee From India',
      genre:'Comedy/Drama',
      duration:'2h 37m',
      description:'Aalparambil Gopi is an unemployed young person who lives his life from the earnings of his mother and younger sister. The story revolves around the Life of Aalparambil Gopi and his dear friend Malgosh. K. P. and the little surprises that life has in store for them.',
      image:'assets/malayali.avif',
      bgImage:'assets/malayalibg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    },
    {
      id:7,
      movieName:'Fall Guy',
      genre:'Action/Comedy',
      duration:'2h 6m',
      description:`He's a stuntman, and like everyone in the stunt community, he gets blown up, shot, crashed, thrown through windows and dropped from the highest of heights, all for our entertainment.

      And now, fresh off an almost career-ending accident, this working-class hero has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job. What could possibly go right?`,
      image:'assets/fallguy.avif',
      bgImage:'assets/fallguybg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    },
    {
      id:8,
      movieName:'Godzilla x Kong',
      genre:'Action/Sci-Fi/Thriller',
      duration:'1h 54m',
      description:'An all-new adventure that pits the almighty Kong and the fearsome Godzilla against a colossal undiscovered threat hidden within our world, challenging their very existence-and our own.',
      image:'assets/godzilla.avif',
      bgImage:'assets/godzillabg.avif',
      date:['01/05/2024','02/05/2024','03/05/2024','04/05/2024','05/05/2024'],
      time:['11.30am','2.30pm','5pm','9pm']
    }
  ]

  getMovieById(id: number): any {
    return this.movieList.find(movie => movie.id === id);
  }
}
