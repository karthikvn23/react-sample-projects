import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';

class ListContacts extends Component{
    static propTypes ={
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (searchInputValue) => {
        this.setState({
            query: searchInputValue.trim()
        })
    }

    render(){
       const { query } = this.state
       const { contacts, onDeleteContact } = this.props
        console.log(query)
       const showingContacts =  query === '' ?
           contacts : contacts.filter((c)=>
           {   console.log(c.name)
               return c.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())})


      return(
          <div className='list-contacts'>
              <div className='list-contacts-top'>
                  <input
                      className='search-contacts'
                      type='text'
                      placeholder='search contacts'
                      value={this.state.query}
                      onChange={(event) => (this.updateQuery(event.target.value))}
                  />
                  <Link
                     to='/create'
                     className='add-contact'>
                     Add Contact
                  </Link>
              </div>

              {showingContacts.length !== contacts.length &&
                  <div className='showing-contacts'>
                      <span>
                          Showing {showingContacts.length} of {contacts.length}
                      </span>
                  </div>
              }

              <ol className='contact-list'>
                  {showingContacts.map(
                      (contact) => (
                          <li key={contact.id} className='contact-list-item'>
                              <div
                                  className='contact-avatar'
                                  style={
                                      {
                                          backgroundImage: `url(${contact.avatarURL})`
                                      }
                                  }
                              />
                              <div className='contact-details'>
                                  <p>{contact.name}</p>
                                  <p>{contact.handle}</p>
                              </div>
                              <button
                                  onClick={() => this.props.onDeleteContact(contact)}
                                  className='contact-remove'>
                                  Remove
                              </button>
                          </li>
                      )
                  )}
              </ol>
          </div>
      )
    }
}

export default ListContacts
