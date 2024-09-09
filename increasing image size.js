import {useState} from 'react';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cat.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
bird,
 cat
sss cow,
dog,
 gator,
 heart,
  horse,
}



function AnimalShow(type){
    const handleClick=()=>{

    };
    return<div onClick={handleClick}>
        <img alt="animal" src={svgMap[type]}/>
    </div>;
}
export default AnimalShow;