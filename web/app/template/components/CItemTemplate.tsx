"use client";

import { useRouter } from "next/navigation";

interface Props {
  id?: string;
  name: string;
  labels?: Array<string>;
}

export default function CItemTemplate(props: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/template/${props.id}`);
  };

  return (
    <div
      className="bg-sky-100 rounded-md px-12 py-16 hover:bg-sky-200"
      onClick={handleClick}
    >
      <div className="text-2xl font-bold">{props.name}</div>
      <div className={`mt-8 ${!props.labels && "invisible"}`}>
        {props.labels && props.labels.toString()}
      </div>
    </div>
  );
}
