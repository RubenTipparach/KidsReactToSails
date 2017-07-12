import React from 'react';
import { logging, navigateTo } from 'react-server';

import {
    Message, Button, Container,
    Menu, Segment, Label, Item, Image, Feed,
    TextBox, Form
} from 'semantic-ui-react';

import './styles/index.css';

import Propchange from './propchange';

const logger = logging.getLogger(__LOGGER__);

export default class PostFeed extends React.Component {

    constructor(props) {
        super(props);

        this.events = [{
            date: '1 Hour Ago',
            image: require('!!file!../images/avatar/small/elliot.jpg'),
            meta: '4 Likes',
            summary: 'Elliot Fu added you as a friend',
        }, {
            date: '4 days ago',
            image: require('!!file!../images/avatar/small/helen.jpg'),
            meta: '1 Like',
            summary: 'Helen Troy added 2 new illustrations',
            extraImages: [
                require('!!file!../images/image.png'),
                require('!!file!../images/image-text.png'),
            ],
        }, {
            date: '3 days ago',
            image: require('!!file!../images/avatar/small/joe.jpg'),
            meta: '8 Likes',
            summary: 'Joe Henderson posted on his page',
            extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
        }, {
            date: '4 days ago',
            image: require('!!file!../images/avatar/small/justen.jpg'),
            meta: '41 Likes',
            summary: 'Justen Kitsune added 2 new photos of you',
            extraText: 'Look at these fun pics I found from a few years ago. Good times.',
            extraImages: [
                require('!!file!../images/image.png'),
                require('!!file!../images/image-text.png'),
            ]
        }
        ];
    }

    render() {
        return (
            <div>

                {this.itemPrototype(null)}
                <Feed events={this.events} />
            </div>
        );
    }


    itemPrototype(items) {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={require('!!file!../images/image.png')} />

                    <Item.Content>
                        <Item.Header>Header</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                            {/*<Image src={require('!!file!../images/short-paragraph.png')} />*/}
                            <Form reply>
                                <Form.TextArea autoHeight placeholder='Today was a good day...' style={{
                                    minHeight: 50, backgroundColor: '#313133', color: ' #BFBCB8'
                                }} />
                                <Button content='Post' labelPosition='left' icon='edit' primary onClick={this.handlePostClick} />
                            </Form>
                        </Item.Description>
                        {/*<Item.Extra>Additional Details</Item.Extra>*/}
                    </Item.Content>
                </Item>
            </Item.Group>);
    }
}