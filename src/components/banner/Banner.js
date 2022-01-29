/*Формирует баннер*/
import PropTypes from "prop-types";

function Banner(props) {
  return (
    <div className={"banner-container"}>
      <img className={"banner-pict"} src={props.props.bannerUrl} alt={props.props.altPict}/>
    </div>
  )
}

Banner.propTypes = {
  props: PropTypes.shape({
    bannerUrl: PropTypes.string,
    altPict: PropTypes.string,
  })
}

Banner.defaultProps = {
  bannerUrl: '',
  altPict: ''
}

export default Banner;


