import TestimonialCard from './TestimonialCard'
import './testimonials.css'

const Testimonials = () => {
  const people = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      imgSrc: './Assets/icons_assets/person1.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam eius delectus vero obcaecati velit, vitae, at voluptatibus est exercitationem ipsum tempora excepturi sint sequi nostrum alias quas, nemo architecto.',
      rating: '5'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      imgSrc: './Assets/icons_assets/person 3.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam eius delectus vero obcaecati velit, vitae, at voluptatibus est exercitationem ipsum tempora excepturi sint sequi nostrum alias quas, nemo architecto.',
      rating: '4.5'
    },
    {
      id: 3,
      firstName: 'Junior',
      lastName: 'Jones',
      imgSrc: './Assets/icons_assets/person 2.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam eius delectus vero obcaecati velit, vitae, at voluptatibus est exercitationem ipsum tempora excepturi sint sequi nostrum alias quas, nemo architecto.',
      rating: '4'
    },
    {
      id: 4,
      firstName: 'Kelly',
      lastName: 'Johnson',
      imgSrc: './Assets/icons_assets/person 4.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam eius delectus vero obcaecati velit, vitae, at voluptatibus est exercitationem ipsum tempora excepturi sint sequi nostrum alias quas, nemo architecto.',
      rating: '3.9'
    }
  ]
  return (
    <section className='testimonials-section'>

      <h2>Testimonials</h2>
      <div className='wrapper'>

        <div className='testimonial-cards-container'>
          {
        people.map(person => (
          <TestimonialCard key={person.id} firstName={person.firstName} lastName={person.lastName} imgSrc={person.imgSrc} review={person.review} rating={person.rating} />
        ))
      }
        </div>
      </div>

    </section>

  )
}

export default Testimonials
