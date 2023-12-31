"use client";
import { ChangeEventHandler } from "react";

export interface Props {
  value: string;
  onChange: ChangeEventHandler;
  label?: string;
  disabled?: boolean;
  error?: string;
}

export default function CDate(props: Props) {
  const { label, error, disabled, value, onChange } = props;
  return (
    <label className="block">
      {label && (
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
      )}
      <input
        type="date"
        id="start"
        name="trip-start"
        value={value}
        min="2018-01-01"
        max="2018-12-31"
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
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
