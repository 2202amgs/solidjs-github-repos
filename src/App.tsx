import { createEffect, type Component, createSignal } from 'solid-js';
import Nav from './components/Nav';
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';
import { Route, Routes } from '@solidjs/router';
import { RepoType } from './types/RepoType';

const [user, setUser] = createSignal<string>('2202amgs');
const [repos, setRepos] = createSignal<RepoType[]>([]);

const App: Component = () => {  
  createEffect(async ()=>{
      const res :Response = await fetch(`https://api.github.com/users/${user()}/repos?sort=created`);
      if (res.status === 404) {
        setRepos([])
      }else{
        setRepos(await res.json());    
      }
  });

  return (
    <div class='container'>
      <Nav />
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/saved' component={SavedRepos} />
      </Routes>
    </div>
  );
};

export default App;
export {user, setUser, repos}
