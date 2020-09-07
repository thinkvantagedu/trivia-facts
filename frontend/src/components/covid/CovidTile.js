import React, { useState, useEffect } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import CovidCard from './CovidCard';

const CovidTile = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('');
    useEffect(() => {
        async function fetchData() {
            let response = await fetch(`https://api.covid19api.com/country/${country}/status/confirmed/live?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);
            response = await response.json();
            setData(response);
        }
        fetchData();
    }, [])

    return (
        <article className="tile TFTile is-child notification is-info">
            <h1 className='title is-1'>Covid 19</h1>
            <div className='columns'>
                <div className="column">
                    <div className="card">
                        <div className="card-content">
                            <p className="subtitle">Check Covid 19 data by entering country name</p>
                            <div className="field">
                                <label className="label">Country name</label>
                                <div className="control">
                                    <CountryDropdown
                                        value={country}
                                        onChange={(country) => setCountry(country)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        type='submit'
                                        className="button is-light is-large"
                                        value='Search'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <CovidCard country={country}/>
                </div>
            </div>
        </article>
    )
}

export default CovidTile;