import React, { useState } from 'react';
import { UnderlinedHeading } from '../shared/Text';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

function CategorySlider(props) {
  const [isAccordionOn, toggleAccordion] = useState(true);
  const { category } = props;

  const handleAccordionToggle = () => {
    toggleAccordion(!isAccordionOn);
  };

  return (
    <div>
      <UnderlinedHeading>
        {category}

        {isAccordionOn ? (
          <FaArrowDown onClick={handleAccordionToggle} />
        ) : (
          <FaArrowUp onClick={handleAccordionToggle} />
        )}
      </UnderlinedHeading>
      {isAccordionOn ? <h1>hi</h1> : null}
    </div>
  );
}

export default CategorySlider;
