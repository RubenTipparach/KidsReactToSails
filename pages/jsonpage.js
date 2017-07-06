// returns a promise for example data
//import getExampleData from './helpers/get-example-data';
import JsonEndpoint from '../middleware/JsonEndpoint';

export default class jsonpage {

    // see the example in [writing middleware](/docs/writing-middleware)
    static middleware() { return [JsonEndpoint] }

    handleRoute() {
        const id = this.getRequest().getRouteParams().id;
        this.data = { "stuff": "things" };
        return { code: 200 };
    }
    
    getResponseData() {
        return this.data;
    }
}