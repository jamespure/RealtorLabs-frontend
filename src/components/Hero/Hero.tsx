import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import classes from "./heroStyles.module.css";

interface CoordinateTypes {
  lat: number | null;
  lng: number | null;
}

const Hero = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState<CoordinateTypes>({
    lat: null,
    lng: null,
  });

  const handleChange = (address: string) => {
    setAddress(address);
  };

  const handleSelect = async (address: string) => {
    const results = await geocodeByAddress(address);
    const latlng = await getLatLng(results[0]);

    setAddress(address);
    setCoordinates({ lat: latlng.lat, lng: latlng.lng });
  };

  return (
    <section
      className={`${classes.hero} flex flex-col justify-center items-center`}
    >
      <div className={`${classes.contentArea}`}>
        <div className={`${classes.contentText}`}>
          <h1>Search it. Buy it. Own it.</h1>
        </div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <button>fd</button>
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </section>
  );
};

export default Hero;
