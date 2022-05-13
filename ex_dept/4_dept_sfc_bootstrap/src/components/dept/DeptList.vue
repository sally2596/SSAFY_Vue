<template>
  <b-card>
    <h2 class="underline">부서 목록</h2>
    <b-table striped hover :items="depts" :fields="fields">
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
    </b-table>
  </b-card>
</template>

<script>
import http from "@/api/http";

export default {
  data() {
    return {
      depts: [],
      fields: [
        {
          key: "index",
          label: "번호",
        },
        {
          key: "deptNo",
          label: "부서 번호",
          sortable: true,
        },
        {
          key: "dName",
          label: "부서명",
        },
        {
          key: "loc",
          label: "지역",
        },
      ],
    };
  },
  methods: {
    getDepts() {
      // axios 이용해서 백엔드 통신후 자신의 depts 데이터 채우는 작업!
      http
        .get("/depts")
        .then((response) => (this.depts = response.data))
        .catch((error) => alert(error));
    },
  },
  created() {
    this.getDepts();
  },
};
</script>

<style></style>
