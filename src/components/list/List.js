/*Формирует список навигации для блока новостей */
import PropTypes from 'prop-types';

function List(props) {
  return (
    <ul className={props.className}>
      {props.children(props.items)}
    </ul>
  )
}

List.propTypes = {
  props: PropTypes.shape({
    className: PropTypes.string,
    children: PropTypes.array,
  })
}

List.defaultProps = {
  className: '',
  children: [],
}

export default List;
