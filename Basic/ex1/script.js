// Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// The message from the methods must be printed on the browser too.


let person = {
    name: "John",
    age: "39",
    img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
    hobbies: ["read", "code", "swim"],
    info: function() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name} ${this.age}</h5>
          <p class="card-text">i like to ${this.hobbies[1]}</p>
        </div>
      </div>`;
    }
}
let car = {
    brand: "Ford",
    model: "Mustang",
    type: "Sport",
    img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg",
    weight: "1 T",
    color: "black",
    info: function() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand} ${this.model}</h5>
          <p class="card-text"> ${this.type}, ${this.weight}, ${this.color}</p>
        </div>
      </div>`;
    }
}
let animal = {
    name: "Tiger",
    breed: "Amur Tiger",
    age: "3 y.o.",
    weight: "120 kg",
    color: "striped",
    img: "https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186__480.jpg",
    info: function() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name} ${this.breed}</h5>
          <p class="card-text">${this.age} , ${this.weight} , ${this.color}</p>
        </div>
      </div>`;
    }
}

document.getElementById("result").innerHTML += person.info(); 
document.getElementById("result").innerHTML += car.info(); 
document.getElementById("result").innerHTML += animal.info(); 