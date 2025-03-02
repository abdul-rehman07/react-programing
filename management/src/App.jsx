import { useState } from 'react'
import './App.css'
import NewProject from './Components/NewProject'
import Noprojectseleted from './Components/Noprojectseleted'
import ProjectSidebar from './Components/ProjectSidebar.jsx'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectDate) {
    setProjectState(prevState => {
      const NewProject = {
        ...projectDate,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, NewProject]
      }
    });
  }



  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <Noprojectseleted onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects} />
      {content}

    </main>
  )
}

export default App
