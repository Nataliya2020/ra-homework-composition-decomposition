/*Формирует каждую медиа в блоке info */
import PropTypes from 'prop-types';

function Info(props) {
  return (
    <div className={"block-info"}>
      <h4 className={"title-info"}>
        <a className={"info-link"} href={"https://www.google.ru/"}>
          {props.props.title}
        </a>
      </h4>
      {props.children}
    </div>
  )
}

Info.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    children: PropTypes.array,
  })
}

Info.defaultProps = {
  title: '',
  children: []
}

export default Info;
