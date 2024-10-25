
export const BurgerStack = ({ stack, removeBurger}) => {
    return (
      <>
        <ul>
          {stack.map((i, index) => (
            // eslint-disable-next-line react/jsx-key
            <li key={index} 
            style={{ backgroundColor: i.color }}
            onClick={() => removeBurger(i, index)}>
            {i.name}
             
            </li>
          ))}
        </ul>
      </>
    );
  };
  