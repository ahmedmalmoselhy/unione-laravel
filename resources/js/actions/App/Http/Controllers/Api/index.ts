import AuthController from './AuthController'
import PasswordResetController from './PasswordResetController'
const Api = {
    AuthController: Object.assign(AuthController, AuthController),
PasswordResetController: Object.assign(PasswordResetController, PasswordResetController),
}

export default Api