import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema';
//import { graphql } from 'graphql';

/*resolvers
import resolvers from './data/resolvers';*/

//const root =resolvers;
const app = express();


app.get('/',(req,res) => {
    res.send('Todo listo');

});

//milewer
app.use('/graphql', graphqlHTTP({
    //que shema va a utilizar
    schema,
    /*el resolver se pasa como rootVAalue
    rootValue: root,*/
    //utilizar Graphql
    graphiql : true
}));

app.listen(8000, () => console.log('el servidor esta funcionando') );
