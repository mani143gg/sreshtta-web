import "../styles/home.css"

function Artists() {
  const artists = [
    "Lathin",
    "Nija",
    "Mani",
    "Sabari"
  ]

  return (
    <section className="artists-section">
      <h2 className="section-title">Featured Artists</h2>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <h3>{artist}</h3>
            <p>Professional Performer & Instructor</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Artists