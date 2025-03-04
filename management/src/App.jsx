import { useState } from 'react'
import './App.css'
import NewProject from './Components/NewProject'
import Noprojectseleted from './Components/Noprojectseleted'
import ProjectSidebar from './Components/ProjectSidebar.jsx'
import SeletedProject from './Components/SeletedProject.jsx'
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTast(text) {
    setProjectState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }
      return {
        ...prevState,
        task: [newTask, ...prevState.tasks]
      }
    });

  }
  function handleDeleteTast() {

  }

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
      const projectId = Math.random()
      const newProject = {
        ...projectDate,
        id: projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId)
      }
    })

  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = (

    <SeletedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTast}
      onDeleteTask={handleDeleteTast}
      tasks={projectState.tasks}
    />
  );

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
