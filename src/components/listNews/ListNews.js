/*Формирует список новостей*/
import PropTypes from 'prop-types';

function ListNews(props) {
  return (
    <ul className={props.className}>
      {props.children(props.items)}
    </ul>
  )
}

ListNews.propTypes = {
  props: PropTypes.shape({
    className: PropTypes.string,
    children: PropTypes.array,
  })
}

ListNews.defaultProps = {
  className: '',
  children: [],
}

export default ListNews;
