import './index.css'

const ExploreItem = prop => {
  const {image, paragraph} = prop

  return (
    <div className='explore-img-container'>
      <img className='explore-img' src={image} alt='explore img' />
      <p className='paragraph'>{paragraph}</p>
    </div>
  )
}

export default ExploreItem
