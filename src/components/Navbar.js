import { Link, useLocation } from "react-router-dom";
import Select from './Select'

const Navbar = ({ onNavigate, onSearch, onCountryChange, onLanguageChange, category }) => {
  const {pathname} = useLocation();

  const countries = [
    {
      value: "",
      display: "World"
    },
    {
      value: "us",
      display: "USA"
    },
    {
      value: "ca",
      display: "Canada"
    },
    {
      value: "gb",
      display: "United Kingdom"
    },
    {
      value: "ie",
      display: "Ireland"
    },
    {
      value: "ng",
      display: "Nigeria"
    },
    {
      value: "nz",
      display: "New Zealand"
    },
    {
      value: "za",
      display: "South Africa"
    },
    {
      value: "sa",
      display: "Saudi Arabia"
    },
    {
      value: "cn",
      display: "China"
    },
    {
      value: "in",
      display: "India"
    },
    {
      value: "it",
      display: "Italy"
    },
    {
      value: "jp",
      display: "Japan"
    },
  ]

  const languages = [
    {
      value: "en",
      display: "English"
    },
    {
      value: "ar",
      display: "Arabic"
    },
    {
      value: "de",
      display: "German"
    },
    {
      value: "es",
      display: "Spanish"
    },
    {
      value: "fr",
      display: "French"
    },
    {
      value: "he",
      display: "Hebrew"
    },
    {
      value: "it",
      display: "Italian"
    },
    {
      value: "nl",
      display: "Dutch"
    },
    {
      value: "no",
      display: "Norwegian"
    }, {
      value: "pt",
      display: "Portuguese"
    }, {
      value: "ru",
      display: "Russian"
    }, {
      value: "sv",
      display: "Swedish"
    }, {
      value: "zh",
      display: "Chinese"
    },
  ]
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="form-inline my-2 my-lg-0">
            <label className="mb-2">Country</label>
            <Select options={countries} handleChange={onCountryChange}/>
            {/* <select className="form-select" name="countries" id="top-stories-countries">
                            <option value="">world</option>
                            <option value="us">USA</option>
                            <option value="ae">UAE</option>
                            <option value="ar">Argentina</option>
                            <option value="at">Austria</option>
                            <option value="au">Australia</option>
                            <option value="be">Belgium</option>
                            <option value="bg">Bulgaria</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="ch">Switzerland</option>
                            <option value="cn">China</option>
                            <option value="co">Colombia</option>
                            <option value="cu">Cuba</option>
                            <option value="cz">Czech Republic</option>
                            <option value="de">Germany</option>
                            <option value="eg">Egypt</option>
                            <option value="fr">France</option>
                            <option value="gb">United Kingdom</option>
                            <option value="gr">Greece</option>
                            <option value="hk">Hong Kong</option>
                            <option value="hu">Hungary</option>
                            <option value="id">Indonesia</option>
                            <option value="ie">Ireland</option>
                            <option value="il">Israel</option>
                            <option value="in">India</option>
                            <option value="it">Italy</option>
                            <option value="jp">Japan</option>
                            <option value="kr">South Korea</option>
                            <option value="lt">Lithuania</option>
                            <option value="lv">Latvia</option>
                            <option value="ma">Morocco</option>
                            <option value="mx">Mexico</option>
                            <option value="my">Malaysia</option>
                            <option value="ng">Nigeria</option>
                            <option value="nl">Netherlands</option>
                            <option value="no">Norway</option>
                            <option value="nz">New Zealand</option>
                            <option value="ph">Philippines</option>
                            <option value="pl">Poland</option>
                            <option value="pt">Portugal</option>
                            <option value="ro">Romania</option>
                            <option value="rs">Serbia</option>
                            <option value="ru">Russia</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="se">Sweden</option>
                            <option value="sg">Singapore</option>
                            <option value="si">Slovenia</option>
                            <option value="sk">Slovakia</option>
                            <option value="th">Thailand</option>
                            <option value="tr">Turkey</option>
                            <option value="tw">Taiwan</option>
                            <option value="ua">Ukraine</option>
                            <option value="ve">Venezuela</option>
                            <option value="za">South Africa</option>
                        </select> */}
          </form>
          {/* <form className="form-inline ms-2 my-2 my-lg-0">
            <label className="mb-2">Language</label>
            <Select options={languages} handleChange={onLanguageChange}/>
          </form> */}
          <ul className="navbar-nav center-horizontal">
            <li className="nav-item">
              <button className={`category-button ${category === 'general' ? "active" : ""}`} onClick={() => onNavigate('general')}>General</button>
            </li>
            <li className="nav-item">
              <button className={`category-button ${category === 'entertainment' ? "active" : ""}`} onClick={() => onNavigate('entertainment')}>Entertainment</button>
            </li>
            <li className="nav-item">
              <button className={`category-button ${category === 'business' ? "active" : ""}`} onClick={() => onNavigate('business')}>Business</button>
            </li>
            <li className="nav-item">
              <button className={`category-button ${category === 'health' ? "active" : ""}`} onClick={() => onNavigate('health')}>Health</button>
            </li>
            <li className="nav-item">
              <button className={`category-button ${category === 'science' ? "active" : ""}`} onClick={() => onNavigate('science')}>Science</button>
            </li>
            <li className="nav-item">
              <button className={`category-button ${category === 'sports' ? "active" : ""}`} onClick={() => onNavigate('sports')}>Sports</button>
            </li>
            <li className="nav-item">
              <button className={`category-button ${category === 'technology' ? "active" : ""}`} onClick={() => onNavigate('technology')}>Technology</button>
            </li>
            <li className="nav-item">
              <Link className={`category-button ${pathname === '/saved' ? "active" : ""}`} to="/saved">Bookmarks</Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => onSearch(e)}>
            <input className="form-control mr-5" type="search" id="search" name="query" placeholder="Search by topic"
              aria-label="Search" autoComplete="off"/>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar