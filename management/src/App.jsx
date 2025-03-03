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

  function handleSelectProject(id) {

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancel() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <selectedProject project={selectedProject} />;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <Noprojectseleted onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects} />
      {content}

    </main>
  )
}

export default App
