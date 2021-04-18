import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import HtmlinsertionInstructions from './HtmlinsertionInstructions'

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
                <h1>HTML Injection Attack</h1>
                <div className="inputContainer">
                    <TextInput type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter Name" />
                    <Button onClick={handleOnClick}>Enter</Button>
                </div>
                <span>Your Name: </span>
                <span dangerouslySetInnerHTML={{ __html: displayValue }} />
            </div>

            <HtmlinsertionInstructions />

        </Layout>
    )
}

export default index