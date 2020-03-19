import registerUserForm from '../components/registerUserForm.js'
import loginUserForm from '../components/loginUserForm.js'

export default {
    components: {
        registerUserForm,
        loginUserForm
    },

    template: `
    <div>
    <h1>hej</h1>
    <registerUserForm />
    
    <loginUserForm />
    </div>
    `
}