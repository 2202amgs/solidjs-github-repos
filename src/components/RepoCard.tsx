import { Component } from 'solid-js';
import { RepoType } from '../types/RepoType';
import { savedRepos, setSavedRepos } from '../pages/SavedRepos';

type Props = {
    repo: RepoType
}

const saveRepo = (repo:RepoType)=>{
    setSavedRepos([repo, ...savedRepos(),])
    localStorage.setItem('savedRepos', JSON.stringify(savedRepos()))
}

const unSaveRepo = (repoId:string)=>{
    const newReposList:RepoType[] = savedRepos().filter((repo:RepoType)=>repo.id !== repoId);
    setSavedRepos(newReposList);
    localStorage.setItem('savedRepos', JSON.stringify(savedRepos()))
}

const repoIsSaved = (repoId:string):boolean=>{

    return savedRepos().some((repo:RepoType)=> repo.id === repoId)
}

const RepoCard: Component<Props> = ({repo}) => {
    return (
        <div class='card mb-2'>
            <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
            <div class="card-body">
                <a href={repo.html_url} class='h4 card-title text-decoration-none' target='_blank' rel='noreferrer'>
                    <strong>{repo.owner?.login}</strong>/{repo.name}
                </a>
                <p class='card-text'>{repo.description}</p>
                {
                    repoIsSaved(repo.id)
                    ?(<button class="btn btn-danger" onClick={()=>unSaveRepo(repo.id)}>Un save</button>)
                    :(<button class="btn btn-success" onClick={()=>saveRepo(repo)}>Save</button>)
                }
                
            </div>
        </div>
    )
}

export default RepoCard;