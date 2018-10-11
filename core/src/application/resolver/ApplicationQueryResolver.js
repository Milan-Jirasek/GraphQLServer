module.exports = class ApplicationQueryResolver {
    constructor() {
        // TODO: will be removed after db connection
        this.tempData = [
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
    };

    applications = () => {
        console.log(this.tempData, this.testik);
        console.log(this);
        return this.tempData;
    };

    application = (args) => {
        console.log(this.tempData);
        const id = args.id;
        return this.tempData.filter(application => {
            return application.id == id;

            })[0];
    }
};
