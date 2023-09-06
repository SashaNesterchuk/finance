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
          route={`template/${template.id}`}
        />
      ))}
      <CItemTemplate name="Create new" route="template/create" />
    </div>
  );
}
