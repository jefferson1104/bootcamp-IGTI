import mongoose from 'mongoose';


//conectando ao banco de dados no mongoDB Atlas
( async () => {
  try {
    await mongoose.connect('mongodb+srv://jsoares:junior1104@bootcamp-igti.v5erz.mongodb.net/grades?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('Conectado ao MongoDB Atlas');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB Atlas' + error)
  }
})();

//criando um model (criando um Schema para student)
const studentSchema =  mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true
  }
});

//definindo o model da collection
mongoose.model('student', studentSchema, 'student');


//adicionando um objeto na collection
const student = mongoose.model('student');

new student({
  name: 'Joel Soares',
  subject: 'Ciencias',
  type: 'Trabalho Pratico',
  value: 50.5
}).save()
  .then( () => console.log('Documento inserido com sucesso!'))
  .catch( (err) => console.log('Falha ao inserir documento!'));


