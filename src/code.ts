import jsConvert from "js-convert-case";

// TODO: UIに応じて操作
// FIXME: replace func when add KebabCase to js-convert-case
const toKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

figma.showUI(__html__, { width: 360, height: 360 });

let savedData = figma.root.getPluginData("ncv");

if (savedData) savedData = JSON.parse(savedData);

figma.ui.postMessage(savedData);

figma.ui.onmessage = (message) => {
  if (message.type === "rename-layers") {
    const data = message.data;

    const isSelection = data.isSelection;
    const layers = data.layers;
    const nameConvention = data.nameConvention.value;

    const layerTypes = layers.map((type) => type.toUpperCase());

    if (layerTypes.includes("COMPONENT")) {
      layerTypes.push("COMPONENT_SET");
    }

    const nodes = isSelection
      ? figma.currentPage.selection.filter((n) => layerTypes.includes(n.type))
      : figma.currentPage.findAll((n) => layerTypes.includes(n.type));

    figma.root.setPluginData("ncv", JSON.stringify(data));

    for (let node of nodes) {
      if (node.parent.type !== "COMPONENT_SET") {
        let name = node.name;

        switch (nameConvention) {
          case "camelCase":
            node.name = jsConvert.toCamelCase(name);
            break;
          case "kebabCase":
            node.name = toKebabCase(name);
            break;
          case "snakeCase":
            node.name = jsConvert.toSnakeCase(name);
            break;
          default:
            node.name = jsConvert.toPascalCase(name);
            break;
        }
      }
    }
    figma.closePlugin(
      `${nodes.length} layers have renamed to ${nameConvention}`
    );
  }
};
