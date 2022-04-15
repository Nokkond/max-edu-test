<template>
<div class="success">
  <h3>Заявка отправлена.</h3>
  <img src="@/assets/success.png">
</div>
</template>

<script>
export default {
  name: "SubmitSuccess"
}
</script>

<style scoped>
.success {
  margin-top: 50px;
  color: #6a6969;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  height: 200px;
}
</style>
