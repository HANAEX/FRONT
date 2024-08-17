import React from 'react';

const ToggleModal = ({ selected, handleToggle, direction }) => {
  return (

    <div className='flex justify-center items-center'>
      <div name='button-group' className='flex py-1 rounded-md bg-slate-200'>
        <div name='button-right' onClick={handleToggle} className={`w-[100px] text-center rounded-md ${selected ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}>살래요</div>
        <div name='button-left' onClick={handleToggle} className={`w-[100px] text-center rounded-md ${!selected ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}>팔래요</div>
      </div>
    </div>
  );
};

export default ToggleModal;