import React, { useState } from 'react'
import styles from './xss.module.scss'
import Layout from '../../../components/Layout'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'

function index() {
    const [inputValue, setInputValue] = useState("");

    const handleOnClick = () => {
        const inputText = inputValue.slice(8, -9);
        const toRun = new Function(inputText)
        toRun();
    }

    return (
        <Layout>
        <div>
            <h1>XSS Attack</h1>
            <div className={styles.inputContainer}>
                <TextInput type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <Button onClick={handleOnClick}>Enter</Button>
            </div>
        </div>
        </Layout>
    )
}

export default index
