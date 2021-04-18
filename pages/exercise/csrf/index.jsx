import { useState } from "react";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout";
import TextInput from "../../../components/TextInput";
import CsrfInstructions from "./CsrfInstructions";
import styles from '../../../styles/hero.module.css'

function index() {

    const [username, setUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [success, setSuccess] = useState(null)

    const handleClick = () => {
        if (newPassword !== confirmNewPassword) {
            setSuccess("Passwords do not match")
            return
        }

        fetch(`http://localhost:3001/passwordreset/?username=${username}&newPassword=${newPassword}`)
            .then(res => res.json())
            .then(json => {
                if (json.message === 'success') {
                    setSuccess('Password was successfully changed')
                } else {
                    setSuccess('There was a problem updating the password')
                }
            })
    }

    return (
        <Layout>
             <div className={styles.hero}>
            <div className={styles.h1}>
                <h1>CSRF</h1>
                </div>
           
                <form>
                    <TextInput onChange={e => setUsername(e.target.value)} value={username} placeholder="Username" />
                    <TextInput type="password" onChange={e => setNewPassword(e.target.value)} value={newPassword} placeholder="Enter new password" />
                    <TextInput type="password" onChange={e => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} placeholder="Confirm new password" />
                </form>
                {success && <p>{success}</p>}
                <br />
                <Button onClick={handleClick}>Reset</Button>
            </div>

            <CsrfInstructions />

        </Layout>
    )
}

export default index