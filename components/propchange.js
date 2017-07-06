import React from 'react';
import { Label } from 'semantic-ui-react';

// This is just a test code to see if this prop change idea works >^_^<
export default class Propchange extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Label color='green'>{this.props.thing}</Label>);
    }
}