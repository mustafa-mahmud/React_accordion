import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showMe, setShowMe] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowMe(!showMe)}>
          {showMe ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showMe && <p>{info}</p>}
    </article>
  );
};

export default Question;
