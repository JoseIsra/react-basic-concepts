import React from "react";

/* 
@params children: children props to the container as we know so far
@params loadgin: any prop received from the parent component
@React.Children -> react built property to map all the children of the component
to use them in an array so we can handle each child 

@React.cloneElement -> react built property to set a new property to 
the component children, we need to use it with React.Children or only it's 
going to work once
*/

export const TodoHeader = ({ children, loading }) => {
  return (
    <section className="text-2xl text-center">
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </section>
  );
};
