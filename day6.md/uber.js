class UberPriceCalculator {
     constructor(distance, duration, surgeMultiplier = 1) {
         this.distance = distance; 
          this.duration = duration; 
          this.surgeMultiplier = surgeMultiplier; 
        }
         calculatePrice(baseFare, costPerMinute, costPerKilometer) {
             const price = baseFare + (this.duration * costPerMinute) + (this.distance * costPerKilometer);
               const surgePrice = price * this.surgeMultiplier; return surgePrice; 
            }
         } 
          const distance = 10; 
           const duration = 20; 
            const surgeMultiplier = 1.5; 
            const calculator = new UberPriceCalculator(distance, duration, surgeMultiplier); 
            const baseFare = 5;
             const costPerMinute = 0.2; 
             const costPerKilometer = 0.5; 
             const price = calculator.calculatePrice(baseFare, costPerMinute, costPerKilometer);
              console.log("Estimated Uber price: $" + price.toFixed(2));
//-----------------------------------------------------------------------------------------------------------------
output:
Estimated Uber price: $21.00
