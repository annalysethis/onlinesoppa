import React, {useState} from 'react'


const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(!isShown);
  
    return (
      <>
        {toggle(show)}
        {isShown && content(hide)}
      </>
    );
  };

  export default ToggleContent;