import Item from "@/app/components/item";
import { templates } from "@/app/mock/template";

interface Props {
  params: {
    id: string;
  };
}

export default function TemplateId(props: Props) {
  const template = templates.find((el) => el.id === props.params.id);
  return (
    <div>
      <div>{template?.name}</div>
      {template?.items.map((el) => (
        <Item key={el.name} item={el} />
      ))}
    </div>
  );
}
