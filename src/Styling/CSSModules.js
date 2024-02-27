import React from 'react'
import './cssmodule.css'
import styles from './cssmodule.module.css'

function CSSModules() {
    return (
        <div>
            <div className='error'>CSSModules Error</div>
            <div className={styles.success}>CSSModules Success</div>
        </div>
    )
}

export default CSSModules