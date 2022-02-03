// Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// Create, using the classes, 3 different objects for each class.

// The results from the methods must be printed on the browser too.


// let person = {
//     name: "John",
//     age: "39",
//     img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
//     hobbies: ["read", "code", "swim"],
//     info: function() {
//         return `<div class="card" style="width: 18rem;">
//         <img src="${this.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${this.name} ${this.age}</h5>
//           <p class="card-text">i like to ${this.hobbies[1]}</p>
//         </div>
//       </div>`;
//     }
// }
// let car = {
//     brand: "Ford",
//     model: "Mustang",
//     type: "Sport",
//     img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg",
//     weight: "1 T",
//     color: "black",
//     info: function() {
//         return `<div class="card" style="width: 18rem;">
//         <img src="${this.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${this.brand} ${this.model}</h5>
//           <p class="card-text"> ${this.type}, ${this.weight}, ${this.color}</p>
//         </div>
//       </div>`;
//     }
// }
// let animal = {
//     name: "Tiger",
//     breed: "Amur Tiger",
//     age: "3 y.o.",
//     weight: "120 kg",
//     color: "striped",
//     img: "https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186__480.jpg",
//     info: function() {
//         return `<div class="card" style="width: 18rem;">
//         <img src="${this.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${this.name} ${this.breed}</h5>
//           <p class="card-text">${this.age} , ${this.weight} , ${this.color}</p>
//         </div>
//       </div>`;
//     }
// }

// document.getElementById("result").innerHTML += person.info(); 
// document.getElementById("result").innerHTML += car.info(); 
// document.getElementById("result").innerHTML += animal.info(); 

let array = [];

class Person {
  name;
  age;
  img;

  constructor(name, age, img) {
      this.name = name;
      this.age = age;
      this.img = img;

      array.push(this);
      console.table(this);

      // console.table(array);
  }

  infoStart() {
      return `<div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top h-80 w-100" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.name} ${this.age}</h5>
        `;
  }
  infoEnd(){
    return `
      </div>
    </div>`;
  }
}
class animal extends Person {
  type;
  weight;
  color;

  constructor(name, age, img, type, weight, color){
    super(name, age, img);
    this.type = type;
    this.weight = weight;
    this.color = color;
  }

  infoStart() {
    return `${super.infoStart()} <p class="card-text">${this.type} ${this.weight} ${this.color}</p> `;
  }
}

class car extends Person {
  brand;
  model;
  type;
  weight;
  color;

  constructor(name, age, img, brand, model, type, weight, color) {
      super(name, age, img);
      this.brand = brand;
      this.model = model;
      this.type = type;
      this.weight = weight;
      this.color = color;
  }

  infoStart() {
      return `${super.infoStart()}<p class="card-text"> ${this.brand} ${this.model} ${this.type} ${this.weight} ${this.color} </p>`;
  }
}


new Person("Mary", "29", "https://cdn.pixabay.com/photo/2021/10/16/06/13/girl-6714026__340.jpg");
new animal("Tiger", "3 y.o.", "https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048__340.jpg", "Amur Tiger", "120 kg", "striped");
new car("Car","1 year","https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg", "Ford", "Mustang", "sport", "1 T", "black");


for (let i = 0; i < array.length; i++) {
    document.getElementById("result").innerHTML += array[i].infoStart() + array[i].infoEnd();
}
