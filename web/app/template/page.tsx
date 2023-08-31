import { templates } from "../mock/template";
import { Template } from "../module";
import CItemTemplate from "./components/CItemTemplate";

export default function Template() {
  return (
    <div className="grid gap-4 grid-cols-3">
      {templates.map((template: Template) => (
        <CItemTemplate
          key={template.id}
          id={template.id}
          name={template.name}
          labels={template.items.map((el) => el.name)}
        />
      ))}
      <CItemTemplate name="Create new" />
    </div>
  );
}
