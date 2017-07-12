import React from 'react';
import { logging } from 'react-server';

import {
    Message, Button, Container,
    Menu, Segment, Label, Item, Image, Feed,
    TextBox, Form
} from 'semantic-ui-react';

import './styles/index.css';

import Propchange from './propchange';
import PostFeed from './postfeed';
import DirectMessage from './directmessage';
import FriendsList from './friendslist';

const logger = logging.getLogger(__LOGGER__);


const pages = {
    'feed': <PostFeed />,
    'messages': <DirectMessage />,
    'friends': <FriendsList />
};

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            activeItem: 'home',
            newPosts: 0,
            newMessages: 0,
            newFriends: 0,
            thing: 1,
            currentPage: pages['feed']
        };

    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name,
            currentPage: pages[name]
        });

        
    }

    handlePostClick = (e, { name }) => {
        logger.info(`Getting more excited! previously ${this.state.exclamationCount} excitements.`);
        this.setState({
            thing: this.state.thing + 1
        });
    }

    render() {
        const { activeItem } = this.state;

        //<div>
        return (
            <Container className="containerBasic">
                <Menu inverted secondary fluid widths={5}>
                    <Menu.Item name='feed' active={activeItem === 'feed'} onClick={this.handleItemClick}>
                        Post Feed
                        {
                            this.state.newPosts > 0 && <Label color='teal'>1</Label>
                        }
                    </Menu.Item>
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
                        Direct Messages
                        {
                            this.state.newMessages > 0 && < Label color='teal'>1</Label>
                        }
                    </Menu.Item>
                    <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}>
                        Friends
                        {
                            this.state.newFriends > 0 && < Label color='teal'>1</Label>
                        }
                    </Menu.Item>
                </Menu>
                <Segment inverted>
                    {/*<Propchange thing={this.state.thing} />*/}
                    {this.state.currentPage}
                </Segment>
            </Container>
        );//</ div>
    }

}
