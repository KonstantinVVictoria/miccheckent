const fs = require("fs");
const args = process.argv.slice(2);
const component_name = args[0];
const path = require("path");

if (!fs.existsSync("./components")) {
  console.log("Component folder exists");
  create_component_folder();
}

if (!fs.existsSync(`./components/${component_name}`))
  create_component(component_name);

function create_component_folder() {
  fs.mkdirSync("./components");
}

function create_component(name) {
  const folder = `./components/${name}`;
  const file = (file_name) => `${folder}/${file_name}`;
  fs.mkdirSync(`./components/${name}/`);
  fs.writeFileSync(file("view.tsx"), create_views(name));
  fs.writeFileSync(file("styles.module.css"), create_css(name));
  fs.writeFileSync(file("types.ts"), create_types(name));
}

function create_views(component_name) {
  const template = `import styles from "./styles.module.css";
import { ${component_name}Props } from "./types";

export default function ${component_name}(props: ${component_name}Props) {
  return <div className={styles.main_container}></div>
}
`;
  return template;
}

function create_css(component_name) {
  const template = `.main_container {
  background-color: blue;
}
`;
  return template;
}

function create_types(component_name) {
  const template = `export type ${component_name}Props = {
    children?: React.ReactNode;
};
`;
  return template;
}
