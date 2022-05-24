<script lang="ts">
  import { nodeaction } from './nodeaction';
  import type { Node } from "$lib/node";
  
  $: activeClass = node.selected ? "border border-primary" : ""

  export let node: Node;

  const selected = () => { 
    node.selected = !node.selected;
  }
</script>

{#if node.type == "text"}

  {#if node.editable}
    <input use:nodeaction={node} bind:value={node.content} class="position-fixed {activeClass}" placeholder="Edit text" on:blur={() => { node.editable = false }}/>
  {:else}
    <p on:click={selected} class="position-fixed {activeClass}" on:dblclick={() => {
      node.editable = !node.editable;
    }} use:nodeaction={node}>{node.content}</p>
  {/if}

{:else if node.type == "image"}
  <img on:click={selected} class="position-fixed {activeClass}" use:nodeaction={node} src={node.src} alt={node.alt}/>
{:else if node.type == "group"}
  {#each node.nodes as loopNode}
    <svelte:self node={loopNode}/>
  {/each}
{:else if node.type == "rectangle"}
  <div on:click={selected} use:nodeaction={node} style="width: {node.width}px; height: {node.height}px;" class="position-fixed bg-info {activeClass}"></div>
{:else if node.type == "oval"}
  <div on:click={selected} use:nodeaction={node} style="width: {node.width}px; height: {node.height}px;" class="position-fixed rounded-circle bg-info {activeClass}"></div>
{/if}