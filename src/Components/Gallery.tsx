import Image from "next/legacy/image";

export function Gallery() {
    const images = [
        { src: "/G2.png", alt: "img1", width: 800, height: 600 },
        { src: "/G3.jpeg", alt: "img1", width: 800, height: 600 },
        { src: "/G2.png", alt: "img1", width: 800, height: 600 },
        { src: "/G4.jpeg", alt: "img2", width: 800, height: 600 },
        { src: "/G4.jpeg", alt: "img2", width: 800, height: 600 },
        { src: "/G3.jpeg", alt: "img1", width: 800, height: 600 },
        { src: "/G4.jpeg", alt: "img2", width: 800, height: 600 },
        { src: "/G2.png", alt: "img1", width: 800, height: 600 },
        { src: "/G3.jpeg", alt: "img1", width: 800, height: 600 },
        { src: "/G2.png", alt: "img1", width: 800, height: 600 }
    ];

    return (
        <div className="App md:px-12 xl:px-28">
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 pr-4">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        width={image.width}
                        height={image.height}
                        className="w-full h-auto rounded-md mb-4"
                        alt={image.alt}
                        src={image.src}
                    />
                ))}
            </div>
        </div>
    );
}