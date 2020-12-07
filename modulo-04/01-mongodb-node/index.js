const MongoClient = require('mongodb').MongoClient;

//conectando no mongoDB atlas
const uri = "mongodb+srv://jsoares:junior1104@bootcamp-igti.v5erz.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//Acessando e manipulando banco de dados
client.connect( async (err) => {
  //obtendo a collection student
  const collection = client.db("grades").collection("student");

  //fazendo uma busca nos documents
  const documents = await collection.find().toArray();
  console.log(documents);

  //listando base de dados existentes.
  const databaselist = await client.db().admin().listDatabases();
  console.log('Databases:');
  databaselist.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });

  client.close();
});
