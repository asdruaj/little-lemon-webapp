import Button from '../Button'
import HighlightCard from './HighlightCard'
import '../../styles/highlights.css'

const HighlightsSection = ({ navigate }) => {
  const dishes = [
    {
      id: 1,
      imgSrc: './Assets/icons_assets/greek_salad.jpg',
      title: 'Greek Salad',
      price: 12.99,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi accusantium iste et dicta recusandae in magnam. Eius, saepe. Cumque illum error aut dicta nisi eos itaque ab laboriosam sit?'
    },
    {
      id: 2,
      imgSrc: './Assets/icons_assets/Bruchetta.svg',
      title: 'Bruchetta',
      price: 10.99,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi accusantium iste et dicta recusandae in magnam. Eius, saepe. Cumque illum error aut dicta nisi eos itaque ab laboriosam sit?'
    },
    {
      id: 3,
      imgSrc: './Assets/icons_assets/lemon_dessert.jpg',
      title: 'Lemon Dessert',
      price: 9.99,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi accusantium iste et dicta recusandae in magnam. Eius, saepe. Cumque illum error aut dicta nisi eos itaque ab laboriosam sit?'
    }
  ]

  return (
    <section className='highlightSection'>
      <div className='firstRow'>
        <h2>This weeks specials!</h2>
        <Button onClick={() => navigate('menu')}>Order Online</Button>
      </div>
      <div className='carousel'>
        {
        dishes.map(dish => (
          <HighlightCard key={dish.id} title={dish.title} price={dish.price} imgSrc={dish.imgSrc} description={dish.description} />
        ))
      }

      </div>
    </section>

  )
}

export default HighlightsSection
