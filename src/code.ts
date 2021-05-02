import jsConvert from "js-convert-case";

// TODO: UIに応じて操作
// FIXME: replace func when add KebabCase to js-convert-case
const toKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

figma.showUI(__html__, { width: 360, height: 360 });

figma.ui.onmessage = (message) => {
  if (message.type === "rename-layers") {
    const isSelection = message.data.isSelection;
    const layers = message.data.layers;
    const nameConvention = message.data.nameConvention;

    const layerTypes = layers.map((type) => type.toUpperCase());

    if (layerTypes.includes("COMPONENT")) {
      layerTypes.push("COMPONENT_SET");
    }

    const nodes = isSelection
      ? figma.currentPage.selection.filter((n) => layerTypes.includes(n.type))
      : figma.currentPage.findAll((n) => layerTypes.includes(n.type));

    console.log(nodes);

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
  }

  figma.closePlugin("Done");
};
