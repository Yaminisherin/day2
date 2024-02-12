class Circle {
      private _radius: number; 
      private _color: string; 
     constructor(radius: number, color: string) {
         this._radius = radius;
          this._color = color; 
        }
         get radius(): number {
             return this.radius; 
            } 
        set radius(value: number) {
             this._radius = value;
             }
              get color(): string { 
                return this._color;
             }
              set color(value: string) {
                 this._color = value;
                 }
                  get area(): number {
                     return Math.PI * this._radius ** 2; 
                    }
                 get circumference(): number {
                     return 2 * Math.PI * this._radius;
                     } 
                     toString(): string {
                         return `Circle[radius=${this._radius},color=${this._color}]`;
                         }
                         }
         const myCircle = new Circle(0.0, ""); 
          myCircle.radius = 1.0; 
          myCircle.color = "red"; 
          console.log(myCircle.toString()); 
//---------------------------------------------------------------------------------
output:
Circle[radius=1,color=red]
