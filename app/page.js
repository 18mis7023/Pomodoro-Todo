import Image from 'next/image'
import styles from './page.module.css'
// import { Auth0Provider } from '@auth0/auth0-react';
// import { Auth0Provider,Auth0 } from '@auth0/nextjs-auth0';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';

import { Grommet } from 'grommet';

export default function Home() {
  return (
    <main>
        <h1 className={styles.heading}>Pomodoro Todo App</h1>
        <p className={styles.description}>This is a todo app made by Hemanth Chowdary</p>
        
    </main>
  )
}
