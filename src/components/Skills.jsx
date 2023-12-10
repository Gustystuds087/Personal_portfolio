import React from 'react'
import "../../public/img/style2.css"

const Skills = () => {
    return (
        <div className="skill">
            <h2 className='head'>my skills</h2>

            <li><h4>html</h4>
                <span className='bar'><span className='html' ></span></span>
            </li>

            <li><h4>javascript</h4>
                <span className='bar'><span className='js' ></span></span>
            </li>

            <li><h4>Reactjs</h4>
                <span className='bar'><span className='react' ></span></span>
            </li>

            <li><h4>Threejs</h4>
                <span className='bar'><span className='three' ></span></span>
            </li>

            <li><h4>Css</h4>
                <span className='bar'><span className='css' ></span></span>
            </li>
        </div>
    )
}

export default Skills