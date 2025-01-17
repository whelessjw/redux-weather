import React from "react";
import { useDispatch } from "react-redux";
import { fetchForecastLatandLong } from "../actions";

export default function CurrentLocationForecastBtn() {
  const dispatch = useDispatch();

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      dispatch(fetchForecastLatandLong(latitude, longitude));
    });
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className="btn btn-sm btn-outline-info"
    >
      Get Current Location Forecast
    </button>
  );
}
