import {ImageItem} from './styledComponents'

const Image = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <div>
      <ImageItem src={imageUrl} alt={imageAltText} />
    </div>
  )
}

export default Image
