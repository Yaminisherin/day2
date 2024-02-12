class Person {
     constructor(name, age) {
         this.name = name;
          this.age = age;
         } 
         getDetails() {
             console.log(`Name: ${this.name}, Age: ${this.age}`);
             } 
            } 
            const person1 = new Person("Alice", 30);
             const person2 = new Person("Bob", 25);
              person1.getDetails(); 
              person2.getDetails();
//------------------------------------------------------------------
output:
Name: Alice, Age: 30
Name: Bob, Age: 25
