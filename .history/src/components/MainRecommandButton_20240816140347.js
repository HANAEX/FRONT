// import React from 'react'

// const MainRecommandButton = ({text, scrollToSection}) => {
//   return (
//     <div className='bg-slate-400 px-4 py-1 rounded-md mb-2 cursor-pointer' onClick={scrollToSection}>
//       {text}
//     </div>
//   )
// }

// export default MainRecommandButton

import React from 'react';

const MainRecommandButton = ({ text, scrollToSection, isActive }) => {
  return (
    <div
      className={`px-4 py-1 rounded-md mb-2 cursor-pointer ${
        isActive ? 'bg-blue-500 text-white' : 'bg-slate-400'
      }`}
      onClick={scrollToSection}
    >
      {text}
    </div>
  );
};

export default MainRecommandButton;