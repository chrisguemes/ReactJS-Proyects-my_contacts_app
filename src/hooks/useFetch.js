import { useState, useEffect } from "react";

const useFetch = url => {
  const [contacts, setContacts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Retrieve data
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        const dataFormatted = jsonData.map(user => {
          return {
            id : user.id,
            name : user.name,
            email : user.email,
            phone : user.phone
          }
        })        
        setContacts(dataFormatted)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
      })

  }, [url])  // Only First render

  return [contacts, setContacts, loading, error]
}

export default useFetch