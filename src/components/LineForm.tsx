import { useState } from 'react';

type LineFormProps = {
  label: string;
  type?: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LineForm = ({
  label,
  value,
  onChange,
  type = 'text',
  name,
}: LineFormProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: 'relative', margin: '40px 0', width: '300px' }}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
        style={{
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          fontFamily: '',
          borderBottom: `1px solid black`,
          background: 'none',
          width: '100%',
          padding: '0 0 7px 10px',
          outline: 'none',
          transition: 'border-color 0.3s ease',
          fontSize: '16px',
        }}
      />
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
        {label}
      </label>
    </div>
  );
};

export default LineForm;
