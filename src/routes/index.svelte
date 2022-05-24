<script lang="ts">
  import NodeElem from "$lib/Node.svelte"
  import type { Node, NodeBase } from "$lib/node";

  interface Scene {
    nodes: Node[]
  }

  const scenes: Scene[] = [{ 
    nodes: []
  }]

  interface Button {
    name: string;
    defaultNode: NodeBase
  }

  const buttons: Button[] = [{
    name: "Add Rectangle",
    defaultNode: {
      type: "rectangle",
      width: 100,
      height: 100
    }
  }, {
    name: "Add oval",
    defaultNode: {
      type: "oval",
      width: 100,
      height: 100
    }
  }, {
    name: "Add Text",
    defaultNode: {
      type: "text",
      content: "Hello World!"
    }
  }]

  $: activeScene = scenes[0]
</script>
<div>
  {#each buttons as button}
    <div class="inline p-8 border-gray-300 w-full">
      <button on:click={() => {
        activeScene.nodes = [...activeScene.nodes, {
          ...button.defaultNode,
          position: { x: 0, y: 0 }
        }]
      }}>{button.name}</button>
    </div>
  {/each}
</div>
{#each activeScene.nodes as node}
  <NodeElem {node}></NodeElem>
{/each}
