import React, { useState } from 'react'
import styles from './htmlinsertion.module.scss'
import Layout from '../../../components/Layout'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'

function index() {
    const [inputValue, setInputValue] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [displayValue, setDisplayValue] = useState("")

    const handleOnClick = () => {
        setDisplayValue(inputValue)
    }

    return (
        <Layout>
        <div>
            <h1>HTML Insertion Attack</h1>
            <div className={styles.inputContainer}>
                <TextInput type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter Name"/>
                <Button onClick={handleOnClick}>Enter</Button>
            </div>
            <span>Your Name: </span> 
            <span dangerouslySetInnerHTML={{__html: displayValue}} />
        </div>
        </Layout>
    )
}

export default index