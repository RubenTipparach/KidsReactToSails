import React from 'react';
import { logging, navigateTo } from 'react-server';

import { Button, Checkbox, Form, Segment, Message, Icon } from 'semantic-ui-react'

//import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

import Propchange from './propchange';

const logger = logging.getLogger(__LOGGER__);

export default class Homepage extends React.Component {

    state = {
        username: ''
    }

    constructor(props) {
        super(props);
    }

    onChangeUser = ({target}) =>
    {
        this.setState({ username: target.value });
        console.log(this.state.username);
    }

    onClickJohn = (e) =>
    {
        this.setState({ username: 'John Doe' });
    }

    onClickLogin = (e) =>
    {
        navigateTo("/home");
    }

    render()
    {
        return (
            <Segment style={{ margin: 'auto', marginTop: 40, width: 420 }} textAlign='left' inverted>
                <Form>
                    <Message info color='black'>
                        
                        <Message.Header><h1>FREEBOOKS <Icon name='lab' size='big' /></h1></Message.Header>
                        <p>Welcome friends.</p>
                        <p>There's no security here on who's who. This site is designed as a
                            playground for you to create fictional stories and situations through a site
                            that allows you to be anyone, do anything. The possibilities are endless...</p>
                    </Message>

                    <Message positive color='black'>Just poking around, try logging in as
                        <a href="javascript:void(0)" style={{ cursor: 'pointer' }} onClick={this.onClickJohn}> John Doe</a>
                    </Message>

                    <Form.Input inverted label='Username' type='text'
                        onChange={this.onChangeUser} value={this.state.username}/>
                    <Form.Field control={Checkbox} label={{ children: 'Remember me.' }} />

                    <Button type='submit' primary onClick={this.onClickLogin} inverted> Login</Button>

                    <br />
                    <Button size='tiny' style={{ marginTop: 20 }} secondary inverted> Create</Button>
                </Form>
            </Segment>);
    }
}