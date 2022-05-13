<template>
  <div>
    <h2 class="underline">부서 목록</h2>
    <table>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 30%" />
        <col style="width: 30%" />
        <col style="width: 30%" />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>부서번호</th>
          <th>부서명</th>
          <th>지역</th>
        </tr>
      </thead>
      <tbody>
        <dept-list-item
          v-for="(dept, index) in depts"
          :key="dept.deptNo"
          :dept="dept"
          :index="index"
        ></dept-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "@/api/http";
import DeptListItem from "@/components/dept/DeptListItem.vue";

export default {
  components: {
    DeptListItem,
  },
  data() {
    return {
      depts: [],
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
