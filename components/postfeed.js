import React from 'react';
import { logging, navigateTo } from 'react-server';

import { Button, Checkbox, Form, Segment, Message, Icon } from 'semantic-ui-react'

//import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

import Propchange from './propchange';

const logger = logging.getLogger(__LOGGER__);

export default class PostFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment inverted>
            </Segment>
        );
    }
}