import styles from './TextInput.module.scss'

function TextInput(props) {
    return (
        <input className={styles.textInput} type="text" {...props} />
    )
}

export default TextInput