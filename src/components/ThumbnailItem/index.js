import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateActiveImageId, isActive} = props
  const {thumbnailAltText, thumbnailUrl, id} = thumbnailDetails
  const onclickImageItem = () => {
    updateActiveImageId(id)
  }

  const activeImageClassName = isActive ? 'active-img-item' : ''
  return (
    <li
      className={`thumbnail-item ${activeImageClassName}`}
      onClick={onclickImageItem}
    >
      <button>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
