import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, clickOnLanguage, isActive} = props
  const {id, language} = languageDetails
  const btnClassName = isActive ? 'button active-btn' : 'button'

  const onClickLanguageBtn = () => {
    clickOnLanguage(id)
  }

  return (
    <li className="lang-item">
      <button
        type="button"
        className={btnClassName}
        onClick={onClickLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
