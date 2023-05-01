import { Component, For, createSignal } from 'solid-js';
import { repos, setUser, user } from '../App';
import { RepoType } from '../types/RepoType';
import RepoCard from '../components/RepoCard';

const Home: Component = () => {
    
    const [text, setText] = createSignal('');
    const fetchData = (event:Event)=>{
        event.preventDefault();
        setUser(text());
    }

    return (
        <div>
            <form class='mb-3' onSubmit={fetchData}>
                <input value={text()} onChange={(e)=> setText(e.target.value)} type="text" class='p-1 align-middle'/>
                <button class='btn btn-dark ms-3 w-auto'>Fetch</button>
            </form>
            <h3>Github repos for: {user()}</h3>

            <For each={repos()} >
                {(repo: RepoType)=> <RepoCard repo={repo} /> }
            </For>
        </div>
    )
}

export default Home;