"use client";
import { ChangeEvent } from "react";
import { inputClasses } from "./utils";

export interface Props {
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
}

export default function CNumber(props: Props) {
  const { label, error, disabled, value, onChange } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
  };
  return (
    <label className="block">
      {label && (
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
      )}
      <input
        type="number"
        value={value}
        disabled={disabled}
        className={inputClasses}
        onChange={handleChange}
      />
      {error && (
        <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      )}
    </label>
  );
}
