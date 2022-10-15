import React from 'react';
import Image from 'next/image'

function GalleryItem({src,alt}) {
    return (
        <div className={"gallery-item"}>
            <div className="image">
                <Image
                    src={src}
                    alt={alt}
                    layout={"fill"}
                />
                <div className="title">
                    This is a title
                </div>
            </div>
        </div>
    );
}

export default GalleryItem;