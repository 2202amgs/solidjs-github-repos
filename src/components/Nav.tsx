import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import { savedRepos } from '../pages/SavedRepos';

const Nav: Component = () => {
    return (
        <nav class='mt-5 mb-3'>
            <A class='btn btn-primary me-2' end activeClass='btn-success' href='/'>Home</A>
            <A class='btn btn-primary me-2' activeClass='btn-success' href='/saved'>Saved[{savedRepos().length}]</A>
        </nav>
    )
}

export default Nav;