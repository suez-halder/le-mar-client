import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen className='w-75 mx-auto mt-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header >Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
                <Accordion.Body>
                    In React, form components can be either controlled or uncontrolled. Controlled components rely on React state to manage user input, whereas uncontrolled components rely on DOM references.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header >How to validate React props using PropTypes</Accordion.Header>
                <Accordion.Body>
                    React provides a way to validate the data types of props that are passed to components using the prop-types package. If a prop is passed to the component that does not match the expected data type or is missing a required prop, a warning will be logged to the console during development.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header >Tell us the difference between nodejs and express js.</Accordion.Header>
                <Accordion.Body>
                    Node.js is like a toolbox with lots of tools inside. It's used to build JavaScript applications on the server-side. Express.js is like a specialized tool in that toolbox. It's a framework built on top of Node.js that helps developers build web applications more easily.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header >What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                <Accordion.Body>
                    A custom hook is a function that you can create to reuse some of your code logic in React. It can be used to store or update state, work with effects, or manage other hooks. You might want to create a custom hook to make your code more reusable and easier to understand, or to share logic between different components.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
};

export default Blogs;