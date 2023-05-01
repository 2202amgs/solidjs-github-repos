export type RepoType = {
    id: string,
    html_url: string,
    name: string,
    description: string,
    stargazers_count: number,
    owner: {
        login: string
    }
}