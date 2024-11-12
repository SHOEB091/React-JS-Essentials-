import React from 'react';


//To avoid props.username is undefined, we can set a default value for the props  or we Destructuring the props in the function parameter
function Card({ username = "Anonymous", btnText = "Visit Me" }) {
  console.log(username); //visit Me is the default value 
  
  return (
    <div className="relative h-[400px] w-[300px] rounded-md shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1729582017869-a0c84b5c91b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
