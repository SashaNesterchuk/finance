"use client";
import { ChangeEventHandler } from "react";
import { inputClasses } from "./utils";

export interface Props {
  value: number | string;
  onChange: ChangeEventHandler;
  label?: string;
  disabled?: boolean;
  error?: string;
}

export default function CNumber(props: Props) {
  const { label, error, disabled, value, onChange } = props;
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
        onChange={onChange}
      />
      {error && (
        <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      )}
    </label>
  );
}
