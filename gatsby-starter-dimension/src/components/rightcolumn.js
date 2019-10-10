import React from "react"
import PropTypes from 'prop-types'


const Rightcolumn = () => (
    
  <div style={{ 
      flex:  `3`,
      width: `100%`,
      textAlign:  `center`,
    }}>
      
  </div>

)

Rightcolumn.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Rightcolumn