<script lang="ts">
  import NodeElem from "$lib/Node.svelte"
  import type { Node } from "$lib/node";

  interface Scene {
    nodes: Node[]
  }

  const scenes: Scene[] = [{ 
    nodes: []
  }]

  $: activeScene = scenes[0]
</script>
<div class="p-8 border-gray-300 w-full">
  <button on:click={() => {
    activeScene.nodes = [...activeScene.nodes, {
      type: "rectangle",
      width: 100,
      height: 100,
      position: { x: 0, y: 0 }
    }]
  }}>Add Rectangle</button>
</div>
{#each activeScene.nodes as node}
  <NodeElem {node}></NodeElem>
{/each}
