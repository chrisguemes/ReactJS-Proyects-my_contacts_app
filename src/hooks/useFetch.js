import { useState } from "react";

const useFetch = (url, callbackFunction) => {
  const [limit, setLimit] = useState(3)

  fetch(url)
  .then(response => response.json())
  .then(jsonData => {
    callbackFunction(jsonData)
  })
  .catch(() => {
    setLimit(limit-1)

    // Volver a pedir los datos
  })
}

export default useFetch