import React from 'react';
import ReactDOM from 'react-dom';
import { logging, navigateTo } from 'react-server';

import { Button, Checkbox, Form, Segment, Message, List } from 'semantic-ui-react'

//import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

import Propchange from './propchange';

const logger = logging.getLogger(__LOGGER__);

const chatLog = [
    {
        id: 0,
        name: "Snickerdoodle",
        datetime: new Date("2010/08/17 12:09:36"),
        message: "Yo, hows it going?", // might be a more elaborate structure later.
    },
    {
        id: 1,
        name: "Ruben",
        datetime: new Date("2015/09/12 13:12:01"),
        message: "nm, you?", 
    },
    {
        id: 2,
        name: "Paulo",
        datetime: new Date("2017/07/13 12:12:24"),
        message: "blah",
    },
];

const automatedReponse = {
    name: "Chatbot9000",
    message: "Your response has been logged. Thank you for testing.",
}

export default class DirectMessage extends React.Component {

    constructor(props) {
        super(props);

        this.self = 'Ruben';

        this.state = {
            chatLog: chatLog,
            currentMessage: ''
        };
    }

    render() {

        return (
            <Segment inverted style={{ width: 420, margin: 'auto' }}>
                {this.mapList()}
                <Form reply>
                    <Form.TextArea autoHeight placeholder='...' style={{
                        minHeight: 50, backgroundColor: '#313133', color: ' #BFBCB8'
                    }} value={this.state.currentMessage} onChange={this.textChanged} />
                    <Button content='Send' labelPosition='left' icon='edit' primary onClick={this.messagePushed} />
                </Form>
            </Segment>
        );
    }

    textChanged = ({target}) => {
        this.setState({ currentMessage: target.value });
    }

    messagePushed = () => {
        this.state.chatLog.push(
            {
                id: this.state.chatLog.length,
                name: this.self,
                datetime: new Date(),
                message: this.state.currentMessage,
            });

        // theoretically added to the database and all that jazz.
        this.setState({
            chatLog: this.state.chatLog,
            currentMessage: ''
        });

        this.messageReceived();

    }

    messageReceived = () => {
        this.state.chatLog.push(
            {
                id: this.state.chatLog.length,
                name: automatedReponse.name,
                datetime: new Date(),
                message: automatedReponse.message
            });
        this.setState({
            chatLog: this.state.chatLog,
        });
    }

    mapList() {

        return (<List id="chatList" divided inverted relaxed style={{ maxHeight: 400, overflow: 'auto' }}>
            {
                this.state.chatLog.map((item) => {
                    const isSelf = item.name == this.self;
                    return (
                        <List.Item key={item.id} ref={(el) => {
                            if (item.id == this.state.chatLog.length - 1) {
                                this.messagesEnd = el;
                            };}
                        } >
                            <List.Content floated={isSelf ? "right" : "left"}>
                                <List.Header>{isSelf ? "you" : item.name}</List.Header>
                                <List.Description style={{fontSize: '80%'}}>{item.datetime.toDateString()}</List.Description>
                                {item.message}
                            </List.Content>
                        </List.Item>
                    );
                })
            }   
        </List>);
    }

    componentDidMount() {
        this.scrollToBottom();

    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        if (this.state.currentMessage == '') {
            const node = ReactDOM.findDOMNode(this.messagesEnd);
            node.scrollIntoView({ behavior: "smooth" });
        }
    }
}