/*Блок поиска. Формирует поле поиска, название поисковика, кнопку поиска, подпись под полем поиска.
 При нажатии на кнопку ничего не происходит */
import PropTypes from 'prop-types';

function Search(props) {
  const hadlerSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <div className={"container-form-search"}>
          <span>
            {props.props.nameSearchEngine}
          </span>
        <form className={"form-search"}>
          <label>
            <input className={"input-search"} placeholder={"Введите текст для поиска"} autoFocus/>
          </label>
          <button className={"button-search"} onClick={hadlerSubmit}>
            {props.props.buttonSearchName}
          </button>
        </form>
      </div>
      <div className={"signature-search"}>
        <span className={"span-search"}>
          {props.props.signatureSearch}
        </span>
      </div>
    </>
  )
}

Search.propTypes = {
  props: PropTypes.shape({
    nameSearchEngine: PropTypes.string,
    buttonSearchName: PropTypes.string,
    signatureSearch: PropTypes.string,
  })
}

Search.defaultProps = {
  nameSearchEngine: '',
  buttonSearchName: '',
  signatureSearch: '',
}

export default Search;
