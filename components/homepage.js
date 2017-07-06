import React from 'react';
import { logging } from 'react-server';

import {
    Message, Button, Container,
    Menu, Segment, Label, Item, Image, Feed,
    TextBox, Form
} from 'semantic-ui-react';

//import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

const logger = logging.getLogger(__LOGGER__);


export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            activeItem: 'home',
            newPosts: 0,
            newMessages: 0,
            newFriends: 0
        };

        this.events = [{
            date: '1 Hour Ago',
            image: require('../images/avatar/small/elliot.jpg'),
            meta: '4 Likes',
            summary: 'Elliot Fu added you as a friend',
        }, {
            date: '4 days ago',
            image: require('../images/avatar/small/helen.jpg'),
            meta: '1 Like',
            summary: 'Helen Troy added 2 new illustrations',
            extraImages: [
                require('../images/image.png'),
                require('../images/image-text.png'),
            ],
        }, {
            date: '3 days ago',
            image: require('../images/avatar/small/joe.jpg'),
            meta: '8 Likes',
            summary: 'Joe Henderson posted on his page',
            extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
        }, {
            date: '4 days ago',
            image: require('../images/avatar/small/justen.jpg'),
            meta: '41 Likes',
            summary: 'Justen Kitsune added 2 new photos of you',
            extraText: 'Look at these fun pics I found from a few years ago. Good times.',
            extraImages: [
                require('../images/image.png'),
                require('../images/image-text.png'),
            ]
        }
        ];
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        //<div>
        return (
            <Container text className="containerBasic">
                <Menu inverted secondary fluid widths={5}>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
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

                    {this.itemPrototype(null)}
                    <Feed events={this.events} />
                </Segment>
            </Container>
        );//</ div>
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
                                    minHeight: 50, backgroundColor: '#313133', color: ' #BFBCB8' }}/>
                                <Button content='Post' labelPosition='left' icon='edit' primary />
                            </Form>
                        </Item.Description>
                        {/*<Item.Extra>Additional Details</Item.Extra>*/}
                    </Item.Content>
                </Item>
            </Item.Group>);
    }
}
