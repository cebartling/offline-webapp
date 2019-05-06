<template>
  <section class="container">
    <div>
      <h1 class="title">
        Offline Worksheets demo
      </h1>
    </div>
    <div>
      <worksheet-listing></worksheet-listing>
    </div>
  </section>
</template>

<script>
import WorksheetListing from '~/components/WorksheetListing'

export default {
  components: { WorksheetListing }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
