import React, { useState, useEffect } from "react";

const SearchForm = ({ getQuery }) => {
  const [userSelection, setUserSelection] = useState("");

  useEffect(() => {
    getQuery(userSelection);
  }, [getQuery, userSelection]);

  const onChange = value => {
    setUserSelection(value);
  };

  return (
    <section>
      <form>
        <label>
          Search By Year:
          <select
            onChange={event => onChange(event.target.value)}
            value={userSelection}
          >
            <option name="allYears" value="">
              All Years(Default)
            </option>
            <option name="2021" value="2021">
              2021
            </option>
            <option name="2020" value="2020">
              2020
            </option>
            <option name="2019" value="2019">
              2019
            </option>
            <option name="2018" value="2018">
              2018
            </option>
            <option name="2017" value="2017">
              2017
            </option>
            <option name="2016" value="2016">
              2016
            </option>
            <option name="2015" value="2015">
              2015
            </option>
            <option name="2014" value="2014">
              2014
            </option>
            <option name="2013" value="2013">
              2013
            </option>
            <option name="2012" value="2012">
              2012
            </option>
            <option name="2011" value="2011">
              2011
            </option>
            <option name="2010" value="2010">
              2010
            </option>
            <option name="2009" value="2009">
              2009
            </option>
            <option name="2008" value="2008">
              2008
            </option>
            <option name="2007" value="2007">
              2007
            </option>
            <option name="2006" value="2006">
              2006
            </option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
