import React from 'react';
import Easy from './icons/easy.svg';
import Optimized from './icons/optimized.svg';
import Personalized from './icons/personalized.svg';
import styles from '../styles/icon.module.css';

const ICONS = {
    easy: Easy,
    optimized: Optimized,
    personalized: Personalized,
};

const Icon = ({ name, size = '64', color, ...props }) => {
    if (ICONS[name]) {
        return React.createElement(ICONS[name], { height: size, width: size, className: styles[color], ...props });
    }
    console.error(`Missing icon "${name}.svg"`);
    return null;
};

export default Icon;
