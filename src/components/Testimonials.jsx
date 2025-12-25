import { testimonials } from "../data/testimonialsData";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials reveal">
      <h2 className="testimonials-heading">
        What our <span>trekkers say</span>
      </h2>

      <div className="testimonials-wrapper" style={{ position: "relative" }}>
        <button className="scroll-btn left">&#10094;</button>
        <button className="scroll-btn right">&#10095;</button>

        <div className="testimonials-card-wrapper" id="testimonialRow">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="testimonial-header">
                <img src={t.image} alt={t.name} className="testimonial-pic" />

                <div className="testimonial-info">
                  <h3 className="testimonial-name">{t.name}</h3>
                  <p className="testimonial-profession">{t.location}</p>

                  {t.instagram && (
                    <div className="testimonial-social">
                      <a
                        href={`https://instagram.com/${t.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i> @{t.instagram}
                      </a>
                    </div>
                  )}

                  <div className="testimonial-stars">{"★".repeat(t.rating)}</div>
                </div>
              </div>

              <p
                className="testimonial-text"
                dangerouslySetInnerHTML={{ __html: t.text.replace(/\n/g, "<br>") }}
              />

              <button className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
