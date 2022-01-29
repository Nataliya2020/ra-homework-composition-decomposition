/*Формирует каждую новость, добавляет изображение на месте маркера списка*/
import PropTypes from 'prop-types';

function ListNewsItem(props) {
  return (
    <li className={props.className}>
      <div className={"marker-news"}>
        <img className={"pict-news"} src={props.props.urlMarker} alt={props.props.alt}/>
      </div>
      <a className={props.aClassName} href={props.props.aHref}>
        {props.props.title}
      </a>
    </li>
  )
}

ListNewsItem.propTypes = {
  props: PropTypes.shape({
    className: PropTypes.string,
    urlMarker: PropTypes.string,
    alt: PropTypes.string,
    aHref: PropTypes.string,
    aClassName: PropTypes.string,
    title: PropTypes.string
  })
}

ListNewsItem.defaultProps = {
  className: '',
  urlMarker: '',
  alt: '',
  aHref: '',
  aClassName: '',
  title: PropTypes.string
}

export default ListNewsItem;
