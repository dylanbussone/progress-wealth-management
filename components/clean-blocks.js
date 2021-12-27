import React from 'react';
import styles from '../styles/clean-blocks.module.css';
/**
 * @param {blocksContent} array [{ header, body, footer },...]
 * @param {cols} number of columns on desktop
 */
const CleanBlocks = ({ blocksContent, cols }) => {
    const classnames = [
        styles.blocks,
        cols === 3 ? styles.cols_3 : false,
        cols === 2 ? styles.cols_2 : false,
    ].filter(Boolean).join(' ');
    return (
        <div className={classnames}>
            {blocksContent.map(block => (
                <div className={styles.block} key={block.header}>
                    <div>
                        <h3 className={styles.header}>{block.header}</h3>
                        <div className={styles.separator} />
                        {block.body}
                    </div>
                    <div>{block.footer}</div>
                </div>
            ))}
        </div>
    );
}

export default CleanBlocks;