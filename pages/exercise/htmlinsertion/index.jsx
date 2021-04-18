import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import HtmlinsertionInstructions from './HtmlinsertionInstructions'
import styles from '../../../styles/hero.module.css'

function index() {
    const [inputValue, setInputValue] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [displayValue, setDisplayValue] = useState("")

    const handleOnClick = () => {
        setDisplayValue(inputValue)
    }

    return (
        <Layout>
            <div className={styles.hero}>
                <div className={styles.h1}>
                    <h1>HTML Insertion Attack</h1>
                </div>

                <div className="inputContainer">
                    <TextInput type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter Name" />
                    <Button onClick={handleOnClick}>Enter</Button>
                </div>
            </div>

            <HtmlinsertionInstructions />

        </Layout>
    )
}

export default index