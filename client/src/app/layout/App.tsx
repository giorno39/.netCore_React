import { useEffect, useState } from 'react'
import { Box, Container} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/DashBoard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  }, [])

const handleSelectActivity = (id: string) => {
  setSelectedActivity(activities.find(x => x.id === id))
}

const handleCanceSelectActivity = () => {
  setSelectedActivity(undefined)
}

const handleOpenForm = (id?: string) => {
  if(id) handleSelectActivity(id)
  else handleCanceSelectActivity()
  setEditMode(true)
}

const handleFormClose = () => {
  setEditMode(false)
}

  return (
    <Box sx={{bgcolor: "#eeeeee"}}>
      <CssBaseline/>
      <NavBar openForm={handleOpenForm}/>
      <Container maxWidth='xl' sx={{mt: 3}}>
        <ActivityDashboard 
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCanceSelectActivity}
        selectedActivity={selectedActivity}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        />
      </Container>
    </Box>
  )
}

export default App
