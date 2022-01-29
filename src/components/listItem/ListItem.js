/*Формирует каждый элемент списка для навигации в блоке новостей*/
import PropTypes from 'prop-types';

function ListItem(props) {
  return (
    <li className={props.className}>
      <h4 className={"title-list-item"}>
        <a href={props.props.aHref} className={props.aClassName}>{props.props.name}</a>
      </h4>
    </li>
  )
}

ListItem.propTypes = {
  props: PropTypes.shape({
    className: PropTypes.string,
    aHref: PropTypes.string,
    aClassName: PropTypes.string,
    name: PropTypes.string,
  })
}

ListItem.defaultProps = {
  className: '',
  aHref: '',
  aClassName: '',
  name: '',
}

export default ListItem;
