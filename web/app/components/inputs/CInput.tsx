"use client";
import { ChangeEvent, ChangeEventHandler } from "react";
import { inputClasses } from "./utils";

export interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
}

export default function CInput(props: Props) {
  const { label, error, disabled, value, onChange } = props;
  return (
    <label className="block">
      {label && (
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
      )}
      <input
        type="text"
        value={value}
        disabled={disabled}
        className={inputClasses}
        onChange={onChange}
        placeholder={props.placeholder}
      />
      {error && (
        <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      )}
    </label>
  );
}
