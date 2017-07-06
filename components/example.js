
import React from 'react';
import { logging } from 'react-server';

import { Message, Button } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

const logger = logging.getLogger(__LOGGER__);

export default class ExamplePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { exclamationCount: 0 };
        this.handleClick = () => {
            logger.info(`Getting more excited! previously ${this.state.exclamationCount} excitements.`);
            this.setState({ exclamationCount: this.state.exclamationCount + 1 });
        };
    }

    render() {
        return (
            <Message info>
                <Message.Header>Was this what you wanted?</Message.Header>
                <p>Did you know it's been a while?</p>

                <Button content="Stupidify" onClick={this.handleClick} />
            </Message>
        );
    }
}
