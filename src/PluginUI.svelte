<script>
  import { GlobalCSS } from "figma-plugin-ds-svelte";

  import { Button, Label, SelectMenu } from "figma-plugin-ds-svelte";

  const layers = ["Component", "Instance", "Frame", "Group"];

  let conventionItems = [
    {
      value: "pascalCase",
      label: "Pascal Case: FooBar",
      group: null,
      selected: true,
    },
    {
      value: "camelCase",
      label: "Camel Case: fooBar",
      group: null,
      selected: false,
    },
    {
      value: "kebabCase",
      label: "Kebab Case: foo-bar",
      group: null,
      selected: false,
    },
    {
      value: "snakeCase",
      label: "Snake Case: foo_bar",
      group: null,
      selected: false,
    },
  ];

  let disabled = true;
  let onlySelection = false;
  let nameConvention;
  let selectedLayers = [];
  let savedData = {};

  onmessage = (event) => {
    if (event.data.pluginMessage) {
      savedData = event.data.pluginMessage;

      nameConvention.selected = false;
      nameConvention = savedData.nameConvention;

      switch (nameConvention.value) {
        case "camelCase":
          conventionItems[1] = nameConvention;
          break;
        case "kebabCase":
          conventionItems[2] = nameConvention;
          break;
        case "snakeCase":
          conventionItems[3] = nameConvention;
          break;
        default:
          conventionItems[0] = nameConvention;
          break;
      }

      selectedLayers = savedData.layers;
      onlySelection = savedData.isSelection;
    } else {
      selectedLayers = ["Component", "Instance"];
    }
  };

  $: disabled = selectedLayers.length < 1;

  function renameLayers() {
    parent.postMessage(
      {
        pluginMessage: {
          type: "rename-layers",
          data: {
            nameConvention: nameConvention,
            layers: selectedLayers,
            isSelection: onlySelection,
          },
        },
      },
      "*"
    );
  }

  function cancel() {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }
</script>

<div class="wrapper p-xxsmall">
  <Label>Name convention</Label>
  <SelectMenu
    bind:menuItems={conventionItems}
    bind:value={nameConvention}
    class="mb-xxsmall"
  />

  <Label>Layer type</Label>
  <!-- <p class="warning">please check types at least one.</p> -->
  {#each layers as layer}
    <div class="nc-Checkbox">
      <input
        type="checkbox"
        bind:group={selectedLayers}
        id={layer}
        value={layer}
      />
      <label for={layer}>
        {layer}
      </label>
    </div>
  {/each}

  <Label>Option</Label>
  <div class="nc-Checkbox">
    <input type="checkbox" id={onlySelection} bind:checked={onlySelection} />
    <label for={onlySelection}> Only selection layers </label>
  </div>

  <div class="p-xxsmall">
    <Button on:click={renameLayers} bind:disabled>Rename</Button>
  </div>
</div>

<style>
  .nc-Checkbox {
    align-items: center;
    cursor: default;
    display: flex;
    position: relative;
  }

  .nc-Checkbox input {
    opacity: 0;
    width: 10px;
    height: 10px;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
  }
  .nc-Checkbox input:checked + label:before {
    border: 1px solid var(--blue);
    background-color: var(--blue);
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: 1px 2px;
  }
  .nc-Checkbox input:disabled + label {
    color: var(--black);
    opacity: 0.3;
  }
  .nc-Checkbox input:checked:disabled + label:before {
    border: 1px solid transparent;
    background-color: var(--black8);
  }

  .nc-Checkbox label {
    color: var(--black8);
    display: flex;
    font-family: var(--font-stack);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    line-height: var(--font-line-height);
    letter-spacing: var(--font-letter-spacing-pos-xsmall);
    margin-left: -16px;
    padding: var(--size-xxsmall) var(--size-xsmall) var(--size-xxsmall)
      var(--size-small);
    user-select: none;
  }
  .nc-Checkbox label:before {
    border: 1px solid var(--black8);
    border-radius: var(--border-radius-small);
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 2px 10px 0 -8px;
    flex-shrink: 0;
  }

  .nc-Checkbox input:enabled:checked:focus + label:before {
    border: 1px solid var(--white);
    box-shadow: 0 0 0 2px var(--blue);
    border-radius: var(--border-radius-small);
  }

  .nc-Checkbox input:enabled:focus + label:before {
    border: 1px solid var(--blue);
    box-shadow: 0 0 0 1px var(--blue);
  }

  .warning {
    padding: 0 calc(var(--size-xxsmall) / 2) 0 var(--size-xxsmall);
    color: tomato;
    font-size: var(--font-size-small);
  }
</style>
