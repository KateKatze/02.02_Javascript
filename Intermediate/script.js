let array = [];

class Car {
  brand;
  model;
  img;
  type;
  age;
  weight;

  constructor(brand, model, img, type, age, weight) {
      this.brand = brand;
      this.model = model;
      this.img = img;
      this.type = type;
      this.age = age;
      this.weight = weight;

      array.push(this);
  }

  infoStart() {
      return `<div class="card me-5 mb-2" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="height:180px;" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${this.brand} ${this.model}</h5>
        <hr>
        <p style="color:green;">${this.type} <br> ${this.age} <br> ${this.weight}</p>
        <hr style="width:70%; margin-left:15%">
        `;
  }
  infoEnd(){
    return `
      </div>
    </div>`;
  }
}

class motorbike extends Car {
  numberOfWheels;
  fuelType;
  trunk;

  constructor(brand, model, img, type, age, weight, numberOfWheels, fuelType, trunk){
    super(brand, model, img, type, age, weight);
    this.numberOfWheels = numberOfWheels;
    this.fuelType = fuelType;
    this.trunk = trunk;
  }

  infoStart() {
    return `${super.infoStart()} <p style="font-style:italic;" class="card-text">${this.numberOfWheels} <br> ${this.fuelType} <br> ${this.trunk}</p> `;
  }
}




// start of animal class 
class Animal {
  name;
  age;
  img;
  breed;
  weight;
  color;

  constructor(name, age, img, breed, weight, color) {
    this.name = name;
    this.age = age;
    this.img = img;
    this.breed = breed;
    this.color = color;
    this.weight = weight;

      array.push(this);
  }

  infoStart() {
      return `<div class="card me-5 mb-2" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="height:180px;" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${this.name} ${this.breed}</h5>
        <hr>
        <p style="color:green;">${this.age} <br> ${this.weight} <br> ${this.color} <br></p>
        <hr style="width:70%; margin-left:15%">
        `;
  }
  infoEnd(){
    return `
      </div>
    </div>`;
  }
}
class fish extends Animal {
  typeOfWater;
  poisonous;
  mainRegion;


  constructor(name, age, img, breed, weight, color, typeOfWater, poisonous, mainRegion){
    super(name, age, img, breed, weight, color);
    this.typeOfWater = typeOfWater;
    this.poisonous = poisonous;
    this.mainRegion = mainRegion;
  }

  infoStart() {
    return `${super.infoStart()} <p style="font-style:italic;" class="card-text">${this.typeOfWater} <br> ${this.poisonous} <br> ${this.mainRegion}</p> `;
  }
}






class Person {
  name;
  age;
  img;
  hobbies;
  height;
  nationality;

  constructor(name, age, img, hobbies, height, nationality) {
      this.name = name;
      this.age = age;
      this.img = img;
      this.hobbies = hobbies;
      this.height = height;
      this.nationality = nationality;

      array.push(this);
  }

  infoStart() {
      return `<div class="card me-5 mb-2" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="height:180px;" alt="${this.name}">
      <div class="card-body text-center">
        <h5 class="card-title">${this.name} ${this.age}</h5>
        <hr>
        <p style="color:green;">${this.hobbies} <br> ${this.height} <br> ${this.nationality} <br></p>
        <hr style="width:70%; margin-left:15%">
        `;
  }
  infoEnd(){
    return `
      </div>
    </div>`;
  }
}
class profession extends Person {
  jobPosition;
  fieldOfWork;
  experienceYrs;


  constructor(name, age, img, hobbies, height, nationality, jobPosition, fieldOfWork, experienceYrs){
    super(name, age, img, hobbies, height, nationality);
    this.jobPosition = jobPosition;
    this.fieldOfWork = fieldOfWork;
    this.experienceYrs = experienceYrs;
  }

  infoStart() {
    return `${super.infoStart()} <p style="font-style:italic;" class="card-text">${this.jobPosition} <br> ${this.fieldOfWork} <br> ${this.experienceYrs}</p> `;
  }
}


new profession("Mary,", "29", "https://images.pexels.com/photos/1428962/pexels-photo-1428962.jpeg", "Hobby: reading", "177cm", "Austrian", "Junior Web Developer", "Web Development", "1 Year Experience");
new fish('"Lucky",', "1 y.o.", "https://images.pexels.com/photos/3626111/pexels-photo-3626111.jpeg", "Clownfish", "300g", "Striped", "Saltwaterfish", "Kinda poisonous","Home: Red Sea and Pacific Ocean");
new motorbike("Yamaha","XV950","https://images.pexels.com/photos/4577731/pexels-photo-4577731.jpeg", "Chopper", "10 y.o.", "250kg", "Two wheels", "Gasoline", "No Trunk");


for (let i = 0; i < array.length; i++) {
    document.getElementById("result").innerHTML += array[i].infoStart() + array[i].infoEnd();
}
