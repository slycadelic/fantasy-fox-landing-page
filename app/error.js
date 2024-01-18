'use client'

import { useEffect } from 'react'
import styles from './home.module.css'

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className={styles.errorPage}>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}            >
                Try again
            </button>
        </div>
    )
}