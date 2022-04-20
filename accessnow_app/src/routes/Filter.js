import React from 'react';
import './Filter.css';
import { NavLink } from "react-router-dom";

import A11y1 from '../asssets/images/A11y-icons-01.png';
import A11y2 from '../asssets/images/A11y-icons-02.png';
import A11y3 from '../asssets/images/A11y-icons-03.png';
import A11y4 from '../asssets/images/A11y-icons-04.png';
import A11y5 from '../asssets/images/A11y-icons-05.png';
import A11y6 from '../asssets/images/A11y-icons-06.png';
import A11y7 from '../asssets/images/A11y-icons-07.png';
import A11y8 from '../asssets/images/A11y-icons-08.png';
import A11y9 from '../asssets/images/A11y-icons-09.png';
import A11y10 from '../asssets/images/A11y-icons-10.png';
import A11y11 from '../asssets/images/A11y-icons-11.png';
import A11y12 from '../asssets/images/A11y-icons-12.png';
import A11y13 from '../asssets/images/image13.png';
import A11y14 from '../asssets/images/image14.png';
import A11y15 from '../asssets/images/image15.png';
import A11y16 from '../asssets/images/image16.png';
import A11y17 from '../asssets/images/image17.png';

function Filter() {
    return (
        <div id='filter'>
            <div id='filter-header'>
                <NavLink to="/">
                    <a id='filter-back' href='#'>
                        <i class="fa-solid fa-angle-left"></i>
                    </a>
                </NavLink>
                <h1>Filters</h1>
                <a href='#' id='filer-reset'>Reset</a>
            </div>
            
            <h2>Select tags</h2>
            <ul id='filter-list'>
                <li className='filter-item' id='accessible'>
                    <img className='filter-icon' src={A11y17} alt='Accessible'/>
                    <p>Accessible</p>
                </li>
                <li className='filter-item' id='accessible-parking'>
                    <img className='filter-icon' src={A11y1} alt='Accessible Parking'/>
                    <p>Accessible Parking</p>
                </li>
                <li className='filter-item' id='accessible-washroom'>
                    <img className='filter-icon' src={A11y2} alt='Accessible Washroom'/>
                    <p>Accessible Washroom</p>
                </li>
                <li className='filter-item' id='alternative-entrance'>
                    <img className='filter-icon' src={A11y3} alt='Alternative Entrance'/>
                    <p>Alternative Entrance</p>
                </li>
                <li className='filter-item' id='automatic-door'>
                    <img className='filter-icon' src={A11y4} alt='Automatic Door'/>
                    <p>Automatic Door</p>
                </li>
                <li className='filter-item' id='braille'>
                    <img className='filter-icon' src={A11y5} alt='Braille'/>
                    <p>Braille</p>
                </li>
                <li className='filter-item' id='elevator'>
                    <img className='filter-icon' src={A11y6} alt='Elevator'/>
                    <p>Elevator</p>
                </li>
                <li className='filter-item' id='gender-neutral-washroom'>
                    <img className='filter-icon' src={A11y7} alt='Gender Neutral Washroom'/>
                    <p>Gender Neutral Washroom</p>
                </li>
                <li className='filter-item' id='large-print'>
                    <img className='filter-icon' src={A11y8} alt='Large Print'/>
                    <p>Large Print</p>
                </li>
                <li className='filter-item' id='outdoor-access-only'>
                    <img className='filter-icon' src={A11y9} alt='Outdoor Access Only'/>
                    <p>Outdoor Access Only</p>
                </li>
                <li className='filter-item' id='quiet'>
                    <img className='filter-icon' src={A11y13} alt='Quiet'/>
                    <p>Quiet</p>
                </li>
                <li className='filter-item' id='ramp'>
                    <img className='filter-icon' src={A11y10} alt='Ramp'/>
                    <p>Ramp</p>
                </li>
                <li className='filter-item' id='scent-free'>
                    <img className='filter-icon' src={A11y14} alt='Scent-Free'/>
                    <p>Scent-Free</p>
                </li>
                <li className='filter-item' id='service-animal-friendly'>
                    <img className='filter-icon' src={A11y15} alt='Service Animal Friendly'/>
                    <p>Service Animal Friendly</p>
                </li>
                <li className='filter-item' id='sign-language'>
                    <img className='filter-icon' src={A11y11} alt='Sign Language'/>
                    <p>Sign Language</p>
                </li>
                <li className='filter-item' id='spacious'>
                    <img className='filter-icon' src={A11y16} alt='Spacious'/>
                    <p>Spacious</p>
                </li>
                <li className='filter-item' id='stopgap-ramp'>
                    <img className='filter-icon' src={A11y12} alt='StopGap Ramp'/>
                    <p>StopGap Ramp</p>
                </li>
            </ul>

            <h2>Distance Units</h2>
            <div id='distance-units'>
                <input type='checkbox' id='km' name='km' value='km' />
                <label for="km" id='label-km'>KM</label>
                <input type='checkbox' id='miles' name='miles' value='miles' />
                <label for="miles" id='label-miles'>Miles</label>
            </div>

            <button type='button' id='btn-save'>Save Preferences</button>

            <div className='extra-margin'></div>
        </div>
    )
}

export default Filter