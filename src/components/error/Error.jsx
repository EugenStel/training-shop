import './error.scss'

export const Error = () => {
    return (
        <div className="error" data-test-id='error'>
            <p>Во время загрузки произошла ошибка. Проверьте подключение к интернету, или попробуйте зайти позже!!</p>
        </div>
    )
}