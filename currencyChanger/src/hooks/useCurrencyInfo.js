import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    // fetch(`https://6674243575872d0e0a95448f.mockapi.io/v1/currency`)
    // .then((res) => res.json())
    // .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
