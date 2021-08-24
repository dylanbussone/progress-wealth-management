import React from 'react';
import styles from '../styles/icon.module.css';
import { toTitleCase } from '../utils';

import Career from './icons/career.svg';
import Close from './icons/close.svg';
import Easy from './icons/easy.svg';
import Family from './icons/family.svg';
import Investments from './icons/investments.svg';
import Menu from './icons/menu.svg';
import Optimized from './icons/optimized.svg';
import Personal from './icons/personal.svg';
import Personalized from './icons/personalized.svg';
import Retirement from './icons/retirement.svg';
import Tax from './icons/tax.svg';

const ICONS = {
    Career,
    Close,
    Easy,
    Family,
    Investments,
    Menu,
    Optimized,
    Personal,
    Personalized,
    Retirement,
    Tax,
};

const Icon = ({ name, size = '64', color, ...props }) => {
    const iconName = toTitleCase(name);
    if (ICONS[iconName]) {
        return React.createElement(ICONS[iconName], { height: size, width: size, className: styles[color], ...props });
    }
    console.error(`Missing icon "${name}.svg"`);
    return null;
};

export default Icon;
