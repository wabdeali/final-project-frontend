import { useState } from "react"
import Button from "../../../components/Button"
import Layout from "../../../components/Layout"
import TextInput from "../../../components/TextInput"
import BruteforceInstructions from "./BruteforceInstructions"
import styles from '../../../styles/hero.module.css'


function index() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        };

        fetch('http://localhost:3001/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.message === "success") {
                    setSuccess('Login was successfull')
                } else {
                    setSuccess('Login failed')
                }
            });
    }



    return (
        <Layout>
           <div className={styles.hero}>
            <div className={styles.h1}>
                <h1>BRUTE FORCE</h1>
                </div>
           
                <form onSubmit={handleSubmit}>
                    <TextInput onChange={e => setUsername(e.target.value)} value={username} placeholder="Username" name="username" />
                    <TextInput type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password" name="password" />
                    <Button type="submit">Login</Button>
                </form>
                <br />
                {success && <p>{success}</p>}
            </div>

            <BruteforceInstructions />

        </Layout>
    )
}


export default index