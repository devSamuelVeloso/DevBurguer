import PropTypes from 'prop-types'
import { ContainerButton } from './styles.js'

export function Button({children, ...rest}) {
    return(
        <ContainerButton {...rest}>{children}</ContainerButton>
    )
}

Button.PropTypes = {
    children: PropTypes.string
}