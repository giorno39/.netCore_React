import { useEffect, useState } from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios'
import NavBar from './navbar'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  }, [])

  return (
    <>
      <CssBaseline/>
      <NavBar/>
      <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  )
}

export default App
