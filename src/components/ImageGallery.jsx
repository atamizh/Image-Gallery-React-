
import ImageCard from "./ImageCard";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    title: "Beautiful Mountains",
    description: "Explore the beauty of mountains and nature."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    title: "Sunny Beach",
    description: "Enjoy the peaceful waves and golden sand."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    title: "Nature Lake",
    description: "A calm lake surrounded by beautiful mountains."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    title: "Starry Night",
    description: "Admire the stars above a majestic mountain."
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800",
    title: "Sunrise View",
    description: "A peaceful sunrise over a green landscape."
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    title: "Green Forest",
    description: "Discover the fresh and relaxing forest."
  }
];

function ImageGallery() {
  return (
    <>
      <section className="gallery">
        <div className="gallery-header">
          <h2>Explore Our Gallery</h2>
          <p>Discover beautiful moments from around the world.</p>
        </div>

        <div className="gallery-grid">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ImageGallery;