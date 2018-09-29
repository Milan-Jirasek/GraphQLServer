const express = require('express');
const morgan = require('morgan');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
    message: () => 'Hello World!'
};
// Create an express server and a GraphQL endpoint
const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));