import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { motion } from "framer-motion"
import "../styles/home.css"
import { danceForms } from "../data/danceForms"

function DanceForms() {
  return (
    <motion.section
      className="dance-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Our Dance Forms</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {danceForms.map((dance) => (
          <SwiperSlide key={dance.id}>
            <div className="dance-card glass-card">
              
              <div className="dance-image">
                <img src={dance.image} alt={dance.name} />
              </div>

              <div className="dance-content">
                <h3>{dance.name}</h3>
                <span className="dance-type">{dance.type}</span>

                <p>{dance.description}</p>

                <div className="dance-meta">
                  <span>Level: {dance.level}</span>
                  <span>Duration: {dance.duration}</span>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  )
}

export default DanceForms