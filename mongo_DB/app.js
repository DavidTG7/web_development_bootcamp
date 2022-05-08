const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "pretty solid as fruit."
});

const peach = new Fruit ({
  name: "Peach",
  rating: 8,
  review: "Lovely!"
});

// peach.save()

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "Best fruit ever."
// });
//
// const banana = new Fruit ({
//   name: "Banana",
//   rating: 9,
//   review: "Delicious."
// });
// fruit.save();

// Fruit.insertMany([kiwi, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved!")
//   }
// })

// Poeple

const poepleSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", poepleSchema);

const person = new Person ({
  name: "DavidTG",
  age: 20
})

// person.save()


// Reading

// Fruit.updateOne({_id: "62575f6cb89e1ed86738675d"}, {name: "ColPeach"}, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// })

Fruit.deleteOne({_id: "62575f6cb89e1ed86738675d"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully item deleted.")
  }
})

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();
    console.log(fruits);
    // fruits.forEach(function(fruit) {
    //   console.log(fruit.name);
    // });
  }
});
