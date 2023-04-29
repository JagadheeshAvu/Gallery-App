// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const activethumbnailClassName = isActive ? 'thumbnail active' : 'active'

  const onClickThumbnail = () => {
    updateThumbnailId(id)
  }

  return (
    <li className="list-items">
      <button type="button" onClick={onClickThumbnail} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activethumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
