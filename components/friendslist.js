import React from 'react';
import { logging, navigateTo } from 'react-server';

import { Button, Checkbox, Form, Segment, Table} from 'semantic-ui-react'

//import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

import Propchange from './propchange';

const logger = logging.getLogger(__LOGGER__);

export default class FriendsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment inverted>
                <Table celled inverted selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Notes</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>Requires call</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill</Table.Cell>
                            <Table.Cell>Denied</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
        );
    }
}