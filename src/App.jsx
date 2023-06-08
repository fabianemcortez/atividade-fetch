import "./App.css";
import PostsList from "./components/PostsList";

/* BONUS POINTS PARA QUEM ESTILIZAR MINIMAMENTE OS COMPONENTES!! */

function App() {
  return (
    <div>
      <h1>Atividade Fetch</h1>

      <small>
        Axios já instalado. (olhar as dependencias do arquivo: package.json)
      </small>

      <p>
        Nessa atividade vamos treinar buscar as informações de várias API's.
      </p>
      <small>Use como exemplo o código da aula. Arquivo: Axios.jsx</small>

      <div>
        <PostsList />
        {/* 
            Coloque aqui embaixo os componentes criados por você
            exemple: 
            
            <PostsList />
         */}
      </div>
    </div>
  );
}

export default App;
