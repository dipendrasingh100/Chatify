import React, {useState} from 'react'
import "../css/newpopup.css"

const NewConversation = ({togglePopup, showPopup}) => {
    const [formData, setFormData] = useState({ id: '', name: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the form data (e.g., submit to a backend server)
      console.log(formData);
      // Close the popup
      togglePopup();
    };
    return (
      <div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>New Conversation</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />
  
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
  
                <button type="submit">Submit</button>
                <button onClick={togglePopup}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  

export default NewConversation
