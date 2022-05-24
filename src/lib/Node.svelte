<script lang="ts">
  import { nodeaction } from './nodeaction';
  import type { Node } from "$lib/node";
  
  $: activeClass = node.selected ? "border border-gray-300" : ""

  export let node: Node;
</script>

{#if node.type == "text"}

  {#if node.editable}
    <input bind:value={node.content} placeholder="Edit text" on:blur={() => { node.editable = false }}/>
  {:else}
    <p class="fixed {activeClass}" on:dblclick={() => {
      node.editable = !node.editable;
    }} use:nodeaction={node}>{node.content}</p>
  {/if}

{:else if node.type == "image"}
  <img class="fixed {activeClass}" use:nodeaction={node} src={node.src} alt={node.alt}/>
{:else if node.type == "group"}
  {#each node.nodes as loopNode}
    <svelte:self node={loopNode}/>
  {/each}
{:else if node.type == "rectangle"}
  <div use:nodeaction={node} style="width: {node.width}px; height: {node.height}px;" class="position-fixed bg-info {activeClass}"></div>
{:else if node.type == "oval"}
  <div use:nodeaction={node} style="width: {node.width}px; height: {node.height}px;" class="position-fixed rounded-full bg-info {activeClass}"></div>
{/if}