import React from 'react';
import './Section.css'

function Section({component, stylish}) {
    return (
        <section className='container-fluid section d-flex justify-content-center align-items-center' style={stylish}>
            {component}
        </section>
    );
}

export default Section;