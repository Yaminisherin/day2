class movie {
     title: string;
      studio: string;
       rating: string;
        constructor(title:string, studio: string, rating: string = "PG") {
             this.title = title; 
             this.studio = studio;
              this.rating = rating;
             }
              getPG(): boolean { 
                return this.rating === "PG";
             }
            }
            const defaultmovie = new movie("Default Movie", "Default Studios");
             console.log(defaultmovie.rating);
               const casinoroyale = new movie("Casino Royale", "Eon Productions", "PG13"); 
               console.log(casinoroyale.title);
                 console.log(casinoroyale.studio);
                console.log(casinoroyale.rating); 
                  console.log(casinoroyale.getPG());
                    console.log(defaultmovie.getPG()); 