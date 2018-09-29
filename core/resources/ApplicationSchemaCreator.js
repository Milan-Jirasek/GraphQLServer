const { buildSchema } = require('graphql');

module.exports = class ApplicationSchemaCreator {
    static buildSchema() {
        return buildSchema(`
            type Query {
                applications: [Application!]!
                application(id: Int!): Application
            },
            type Application {
                id: Int!
                name: String!
                domain: String!
            }`
        );
    };
};
