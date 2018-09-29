const express = require('express');
const morgan = require('morgan');
const expressGraphQL = require('express-graphql');
const applicationSchemaCreator = require('./core/resources/ApplicationSchemaCreator');
const applicationQueryResolver = require('./core/src/application/resolver/ApplicationQueryResolver');

const app = express();
const queryResolver = new applicationQueryResolver();

const root = {
    application: queryResolver.application,
    applications: queryResolver.applications
};

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.use('/graphql', expressGraphQL({
    schema: applicationSchemaCreator.buildSchema(),
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));