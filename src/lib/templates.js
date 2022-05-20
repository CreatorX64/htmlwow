import fs from "fs";
import path from "path";

export const getTemplates = () => {
  const templatesDataPath = path.join(process.cwd(), "data", "templates.json");
  const data = JSON.parse(fs.readFileSync(templatesDataPath));
  return data.templates;
};
