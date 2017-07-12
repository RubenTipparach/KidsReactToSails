import React from 'react';
import { logging, navigateTo } from 'react-server';

import { Button, Checkbox, Form, Segment, Message, List } from 'semantic-ui-react'

//import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

import Propchange from './propchange';

const logger = logging.getLogger(__LOGGER__);

export default class DirectMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment inverted style={{width: 420, margin: 'auto'}}>
                <List divided inverted relaxed>
                    <List.Item>
                        <List.Content floated='left'>
                            <List.Header>Snickerdoodle</List.Header>
                            Yo, hows it going?
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                             <List.Header>You</List.Header>
                             nm. you?
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            <List.Header>Paulo</List.Header>
                             blah.
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}