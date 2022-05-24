<script lang="ts">
  import { nodeaction } from './nodeaction';
  import type { Node } from "$lib/node";
  
  export let node: Node;
</script>

{#if node.type == "text"}
  <p class="fixed" use:nodeaction={node}>{node.content}</p>
{:else if node.type == "image"}
  <img class="fixed" use:nodeaction={node} src={node.src} alt={node.alt}/>
{:else if node.type == "group"}
  {#each node.nodes as loopNode}
    <svelte:self node={loopNode}/>
  {/each}
{:else if node.type == "rectangle"}
  <div use:nodeaction={node} style="width: {node.width}px; height: {node.height}px;" class="fixed bg-gray-500"></div>
{:else if node.type == "oval"}
  <div use:nodeaction={node} style="width: {node.width}px; height: {node.height}px;" class="fixed rounded-full bg-gray-500"></div>
{/if}