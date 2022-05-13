<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ dept.deptNo }}</td>
    <td>
      <router-link :to="{ name: 'detail', params: { deptNo: dept.deptNo } }">{{
        dept.dName
      }}</router-link>
    </td>
    <td>{{ dept.loc }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    dept: Object,
    index: Number,
  },
};
</script>

<style></style>
