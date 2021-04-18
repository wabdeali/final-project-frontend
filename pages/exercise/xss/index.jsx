import React, { useState } from "react";
import Layout from "../../../components/Layout";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import XssInstructions from "./XssInstructions";

function index() {
    const [inputValue, setInputValue] = useState("");

    const handleOnClick = () => {
        const inputText = inputValue.slice(8, -9);
        const toRun = new Function(inputText);
        toRun();
    };

    return (
        <Layout>
            <div>
                <h1>XSS Attack</h1>
                <div className="inputContainer">
                    <TextInput
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button onClick={handleOnClick}>Enter</Button>
                </div>
            </div>

            <XssInstructions />

        </Layout>
    );
}

export default index;
