import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const apiKey = "p9NritKRoTcf8Vua6yJ2WCwNiAF0BYhvlajwQUP1";
      const requestOptions = {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json',
          // '': `${apiKey}`,
        },
        redirect: 'follow',
      };

      try {
        const response = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events", requestOptions);

        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }

        const { events } = await response.json();
        console.log(events);

        setEventData(events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    console.log(eventData)
    fetchEvents();
  }, []);


  return (
    <div>
      <Header />
      <Map eventData={eventData} /> 
    </div>
  );
}

export default App;

//{ !loading ? <Map eventData={eventData} /> : <Loader /> }