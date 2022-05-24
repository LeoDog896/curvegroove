<script lang="ts">
  import { nodedrag } from './nodedrag';
  import type { Node } from "$lib/node";
  
  export let node: Node;
</script>

{#if node.type == "text"}
  <p class="fixed" use:nodedrag={node}>{node.content}</p>
{:else if node.type == "image"}
  <img class="fixed" use:nodedrag={node} src={node.src} alt={node.alt}/>
{:else if node.type == "group"}
  {#each node.nodes as loopNode}
    <svelte:self node={loopNode}/>
  {/each}
{:else if node.type == "rectangle"}
  <div use:nodedrag={node} style="width: {node.width}px; height: {node.height}px;" class="fixed bg-gray-500"></div>
{:else if node.type == "oval"}
  <div use:nodedrag={node} style="width: {node.width}px; height: {node.height}px;" class="fixed rounded-full bg-gray-500"></div>
{/if}