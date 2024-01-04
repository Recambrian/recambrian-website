<template>
  <div class="container">
    <div class="merry">
      <img
        src="~/assets/merry-christmas.png"
        alt="Merry Christmas"
        class="image"
      />
    </div>
    <div class="content">
      <h1 class="header">
        🎄 Ho ho ho! Santa's got extra surprises! Choose one for more holiday
        cheer: 🎁
      </h1>
      <ul class="list">
        <li class="item red">
          🌟 A magical 3-month journey with ChatGPT Premium - your wish is its
          command!
        </li>
        <li class="item green">
          ⏰ 2 joyful hours of tech support or tutoring - learn with elf-like
          expertise!
        </li>
        <li class="item red">
          🌐 A personal blog or website, hosted in your own wonderland (domain
          of your choice)!
        </li>
        <li class="item green">
          ✨ Elves at your service for moving, cleaning, or decluttering -
          making space for new memories!
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Merry Christmas',
      }
    },
  }
</script>

<style scoped>
  h1 {
    letter-spacing: normal;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e3342f;
  }

  .merry {
    width: 100%;
    max-width: 80rem; /* equivalent to max-w-screen-lg */
    margin: 0 auto;
    background: linear-gradient(to bottom, #950103, #790002);
    text-align: center; /* Centering the image */
  }

  .image {
    max-width: 100%;
    height: auto;
    width: 75%; /* Increased size */
    margin: 0 auto;
  }

  .content {
    background-color: white; /* Changed background to white */
    text-align: center; /* Centering the content */
    width: 100%;
    padding: 1rem;
  }

  .header {
    color: #38a169; /* equivalent to text-green-600 */
    font-family: 'Patrick Hand', cursive;
    font-size: 1.5rem; /* equivalent to text-2xl */
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .list {
    list-style-type: none;
    padding: 0;
  }

  .item {
    font-size: 1.125rem; /* equivalent to text-lg */
    margin-bottom: 0.5rem;
  }

  .red {
    color: #e3342f; /* equivalent to text-red-600 */
  }

  .green {
    color: #38a169; /* equivalent to text-green-600 */
  }
</style>
