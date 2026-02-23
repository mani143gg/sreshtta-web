import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import "../styles/home.css"

function DanceForms() {
  const forms = [
    "Bharatanatyam",
    "Kathak",
    "Contemporary",
    "Kalaripayattu",
    "Cinematic Dance"
  ]

  return (
    <section className="dance-section">
      <h2 className="section-title">Our Dance Forms</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {forms.map((form, index) => (
          <SwiperSlide key={index}>
            <div className="dance-card">
              <h3>{form}</h3>
              <p>
                Experience the art, discipline and expression of {form}.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default DanceForms