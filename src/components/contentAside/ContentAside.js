/*Формирует боковой блок с аватаром, заголовком статьи, кратким описанием статьи */
import PropTypes from 'prop-types';

function ContentAside(props) {
  return (
    <div>
      <div className={"avatar-aside"}>
        <img className={"pict-avatar-aside"}
             src={props.props.avatarUrl}
             alt={props.props.altPict}/>
      </div>
      <div><h4 className={"aside-title"}><a className={"aside-link"} href={props.props.aHref}>{props.props.title}</a></h4>
        <p className={"aside-paragraph"}>{props.props.text}</p>
      </div>
    </div>
  )
}

ContentAside.propTypes = {
  props: PropTypes.shape({
    avatarUrl: PropTypes.string,
    altPict: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  })
}

ContentAside.defaultProps = {
  avatarUrl: '',
  altPict: '',
  title: '',
  text: '',
}

export default ContentAside;
