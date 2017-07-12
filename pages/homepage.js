import React from 'react';
import Home from '../components/home';
import '../components/styles/index.css';

export default class homepage {
    // See [writing middleware](/docs/writing-middleware) for how to write middleware
    //static middleware() { return [MobileEnabled]; }

    getTitle() {
        return "Freebooks Home"
    }

    getHeadStylesheets() {
        return [
            "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css",
        ]
    }

    getScripts()
    {
        return [
            "https://code.jquery.com/jquery-3.1.1.min.js"
        ];
    }

    getMetaTags() {
        var tags = [
            { name: "example", content: "Demonstrate a full react-server page" },
            { charset: 'utf8' },
            { 'http-equiv': 'x-ua-compatible', 'content': 'ie=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'hello world, powered by React Server' },
            { name: 'generator', content: 'React Server' },
        ];
        return tags;
    }

    getBodyClasses() {
        return ["responsive-page", "typography", "bodybasic"];
    }

    getElements() {
        return (
            <Home />
        );
    }
}