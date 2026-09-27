
function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img
        src={image.url}
        alt={image.title}
        className="card-image"
      />

      <div className="card-content">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;