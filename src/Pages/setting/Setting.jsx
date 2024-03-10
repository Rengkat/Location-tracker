import "./style.css";
const Setting = () => {
  return (
    <div>
      <div className="setting-container">
        <div className="language">
          <h1>Display Language</h1>
          <p>Manage the language of your Search display, and select preferences for your results</p>
          <input type="text" />
        </div>
        <div className="region">
          <h1>Region</h1>
          <p>
            Select your preferred region for search results. Use controls on the search results page
            to turn this filter on.
          </p>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Setting;
