import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useRef } from 'react';
import Pdf from "react-to-pdf";
import { FaDownload } from 'react-icons/fa';

const Blogs = () => {

    const ref = useRef();

    return (
        <Container className='my-5' ref={ref} >
            <h2 className='my-5 text-center'>Frequently Asked Questions</h2>
            <div >
                <Card border="primary" className='w-75 mx-auto border p-4 mb-4'>
                    <h3 className='mb-3'>1. Tell us the differences between uncontrolled and controlled components.</h3>
                    <p>In React, form components can be either controlled or uncontrolled. Controlled components rely on React state to manage user input, whereas uncontrolled components rely on DOM references.</p>
                </Card>
                <Card border="primary" className='w-75 mx-auto border p-4 mb-4'>
                    <h3 className='mb-3'>2. How to validate React props using PropTypes?</h3>
                    <p>React provides a way to validate the data types of props that are passed to components using the prop-types package. If a prop is passed to the component that does not match the expected data type or is missing a required prop, a warning will be logged to the console during development.</p>
                </Card>
                <Card border="primary" className='w-75 mx-auto border p-4 mb-4'>
                    <h3 className='mb-3'>3. Tell us the difference between nodejs and express js.</h3>
                    <p>Node.js is like a toolbox with lots of tools inside. It's used to build JavaScript applications on the server-side. Express.js is like a specialized tool in that toolbox. It's a framework built on top of Node.js that helps developers build web applications more easily.</p>
                </Card>
                <Card border="primary" className='w-75 mx-auto border p-4 mb-4'>
                    <h3 className='mb-3'>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p>A custom hook is a function that you can create to reuse some of your code logic in React. It can be used to store or update state, work with effects, or manage other hooks. You might want to create a custom hook to make your code more reusable and easier to understand, or to share logic between different components.</p>
                </Card>
            </div>


            <div className='text-center my-5'>
                <h2 className='my-5'>Download All Our Blogs Today!</h2>
                <Pdf targetRef={ref} filename="blogs.pdf" x={.5} y={.5} scale={0.75} >
                    {({ toPdf }) => <FaDownload className='fs-1 text-primary' onClick={toPdf}></FaDownload>}
                </Pdf>
            </div>

            


        </Container>


    );
};

export default Blogs;