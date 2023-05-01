import { Component, For, createSignal } from 'solid-js';
import RepoCard from '../components/RepoCard';
import { RepoType } from '../types/RepoType';


const reposFromLocalStorage = JSON.parse(localStorage.getItem('savedRepos')||'[]');
const [savedRepos, setSavedRepos] = createSignal<RepoType[]>(reposFromLocalStorage);

const SavedRepos: Component = () => {
    
    return (
        <div>
            <h2>Your Saved Repos</h2>
            <For each={savedRepos()}>
                {(repo:RepoType)=><RepoCard repo={repo}/>}
            </For>
        </div>
    )
}

export default SavedRepos;
export {savedRepos, setSavedRepos}