import NextImage from 'next/image';

const Image = ({ Img, alt, ...rest }) => (
    <NextImage
        src={Img}
        placeholder="blur"
        loading={rest.priority ? 'eager' : 'lazy'}
        alt={alt ?? 'Progress Wealth Management'}
        {...rest}
    />
);

export default Image;
