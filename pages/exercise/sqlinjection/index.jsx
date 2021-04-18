import { useState } from "react";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout";
import TextInput from "../../../components/TextInput";
import SqlinjectionInstructions from './SqlinjectionInstructions'
import styles from '../../../styles/hero.module.css'

function index() {
    const [inputValue, setInputValue] = useState("")
    const [data, setData] = useState(null)

    const handleOnSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3001/namesearch/?name=${inputValue}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }

    return (
        <Layout>
            <div className={styles.hero}>
                <div className={styles.h1}>
                    <h1>SQL Injection</h1>
                </div>

                <div className="inputContainer">
                    <form onSubmit={handleOnSubmit}>
                        <TextInput
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            placeholder="Enter Name"
                        />
                        <Button type="submit">Search</Button>
                    </form>
                </div>
                <br />
                <br />
                {data && <div>
                    {
                        Array.isArray(data) &&
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>IP Adress</th>
                                </tr>
                                {
                                    data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.id}</td>
                                            <td>{row.first_name}</td>
                                            <td>{row.last_name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.gender}</td>
                                            <td>{row.ip_address}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                    {
                        data.message === "failed" &&
                        <pre style={{ color: 'red' }}>{JSON.stringify(data.error, undefined, 2)}</pre>
                    }
                    {
                        data.message === "notfound" &&
                        <p>No Data records found for the name given.</p>
                    }
                </div>}
            </div>

            <SqlinjectionInstructions />

        </Layout>
    )
}

export default index