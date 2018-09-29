module.exports = class ApplicationQueryResolver {

    constructor() {
        this.applications = this.applications.bind(this);
        this.application = this.application.bind(this);
    }
    // TEMP DATA, will be removed
    getData() {
        return [
            {
                id: 1,
                name: 'Application 1',
                domain: 'http://app1.local'
            },
            {
                id: 2,
                name: 'Application 2',
                domain: 'http://app2.local'
            },
            {
                id: 3,
                name: 'Application 3',
                domain: 'http://app3.local'
            },
        ];
    }

    applications() {
        return this.getData();
    };

    application(args) {
        const id = args.id;
        return this.getData().filter(application => {
            return application.id == id;
        })[0];
    };
};
