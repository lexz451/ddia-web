import Image from 'next/image';
import { TServerImage } from '../utils/types';


const ServerImage = (props: TServerImage) => {
    
    const { width, height, alternativeText, name, url, priority, sizes, placeholder } = props;

    const alt = alternativeText || name;
    const imageUrl = `${process.env.API_URL}${url}`;

    return (
        <Image
            placeholder='blur'
            blurDataURL={placeholder}
            priority={priority}
            src={imageUrl}
            alt={alt}
            width={width || 0}
            height={height || 0}
            sizes={sizes}
        />
    );
};

export default ServerImage;
