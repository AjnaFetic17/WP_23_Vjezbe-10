const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/voceDB')
  .then(() => console.log('Connected!'));

const voceSchema = new mongoose.Schema({
  naziv: String,
  kolicina: Number,
  ocjena: Number
})

const Voce = new mongoose.model('Fruit', voceSchema) //kreira kolekciju i model u bazi na osnovu scheme

const vocka1 = new Voce({
  naziv: 'Jabuka',
  kolicina: 8,
  ocjena: 5
});

//vocka1.save() //za spremanje u bazu

const vocke = [
  {
    naziv: 'Jabuka',
    kolicina: 8,
    ocjena: 5
  },
  {
    naziv: 'Kruska',
    kolicina: 15,
    ocjena: 9
  },
  {
    naziv: 'Banana',
    kolicina: 20,
    ocjena: 3
  },
  {
    naziv: 'Kivi',
    kolicina: 50,
    ocjena: 7
  }]

//Voce.insertMany(vocke) //dodaje sve vocke u bazu
Voce.updateOne({ _id: "659462717974f31b01d86ff0" }, {
  naziv: 'Ananas',
  kolicina: 40,
  ocjena: 1
}).exec()

Voce.deleteOne({ _id: '6594752411026bb7f1a80c0a' }).exec()



const osobaSchema = mongoose.Schema({
  ime: String,
  godine: Number,
  najdrazeVoce: voceSchema
})

const Osoba = mongoose.model("Person", osobaSchema)

vocka2 = new Voce({
  naziv: "Ananas",
  kolicinu: 5,
  ocjena: 10
})

//vocka2.save()
const osoba1 = new Osoba({
  ime: "John",
  godine: 30,
  najdrazeVoce: vocka2
})

//osoba1.save()

//dodaj validacije
// const voceSchema = new mongoose.Schema({
//   naziv: {
//     type: String,
//     required: [true, "Molimo unesite naziv"]
//   },
//   kolicinu: Number,
//   ocjena: {
//     type: Number,
//     min: 1,
//     max: 10
//   }
// });

Voce.find().then((voceDB) => {

  // console.log(voceDB);
  voceDB.forEach((vocka) => {
    console.log(vocka.kolicina);
  })

})

Voce.find({ naziv: 'Ananas', ocjena: 1 }).then((voceDB) => {

  // console.log(voceDB);
  voceDB.forEach((vocka) => {
    console.log(vocka);
  })

})

