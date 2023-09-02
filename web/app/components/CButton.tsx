import { MouseEventHandler, ReactNode, useMemo } from "react";

export interface Props {
  text?: string;
  children?: ReactNode;
  onClick: MouseEventHandler;
  success?: boolean;
  error?: boolean;
  warning?: boolean;
  circle?: boolean;
}

export default function CButton(props: Props) {
  const classes = useMemo(() => {
    const color = props.error
      ? "red"
      : props.success
      ? "green"
      : props.warning
      ? "yellow"
      : "sky";

    if (props.circle) {
      return `rounded-full p-4 bg-${color}-500 hover:bg-${color}-600 text-white`;
    }
    return `rounded px-4 py-2 bg-${color}-500 hover:bg-${color}-600 text-white`;
  }, [props.circle, props.error, props.success, props.warning]);

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
