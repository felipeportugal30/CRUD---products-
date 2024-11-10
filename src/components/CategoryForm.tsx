import React, { useState } from 'react';
import CategoryEnum from './CategoryEnum';

type CategoryFormProps = {
  value: CategoryEnum | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategoryForm = ({ value, onChange }: CategoryFormProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false);
  };

  return (
    <div style={{ position: 'relative', margin: '40px 0', width: '300px' }}>
      <select
        value={value ?? ''}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: `1px solid black`,
          background: 'none',
          width: '103.5%',
          padding: '0 0 7px 10px',
          outline: 'none',
          fontSize: '16px',
        }}
      >
        <option value="" disabled></option>
        {Object.values(CategoryEnum).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label
        style={{
          fontSize: isFocused || value ? '12px' : '16px',
          top: isFocused || value ? '-10px' : '50%',
          color: isFocused || value ? '#727272' : '',
          backgroundColor: 'none',
          position: 'absolute',
          left: '10px',
          transform: 'translateY(-50%)',
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
          letterSpacing: '0.5px',
          paddingBottom: '12px',
        }}
      >
        Category
      </label>
    </div>
  );
};

export default CategoryForm;
