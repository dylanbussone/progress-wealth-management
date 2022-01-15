import NextImage from 'next/image';

const Image = props => (
    <NextImage
        placeholder="blur"
        loading={props.priority ? 'eager' : 'lazy'}
        alt={'Progress Wealth Management'}
        {...props}
    />
);

export default Image;
