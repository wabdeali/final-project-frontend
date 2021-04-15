import { useState } from "react";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout";
import TextInput from "../../../components/TextInput";

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
        <div>
            <h1>SQL Injection Attack</h1>
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
            <div>
                {
                    data && 
                    // <pre>{JSON.stringify(data, undefined, 2)}</pre>
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
            </div>
        </div>
        </Layout>
    )
}

export default index