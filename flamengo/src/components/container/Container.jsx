import './Container.css'
import Field from '../field/Field'
import Button from '../button/Button'

export default function Container() {
    return<>
    <div className='container'>
        <h1>Login</h1>
        <Field />
        <Button />
    </div>
    </>
}