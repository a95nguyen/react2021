import PropTypes from 'prop-types'
import Button from './Buttons'

const Header = ({title, onAdd, onShow }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={onShow ? 'red' : 'green'} text={onShow ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header