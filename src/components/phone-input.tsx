"use client";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
        Telefon*
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        pattern="[+0-9]+"
        title="Wprowadź numer telefonu (tylko cyfry i znak +)"
        maxLength={15}
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="+48 123 456 789"
        onKeyPress={(e) => {
          if (!/[0-9+]/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
