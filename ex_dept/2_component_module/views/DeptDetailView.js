export default {
  template: `<form @submit.prevent>
  <table>
    <tbody>
      <tr>
        <th>부서 번호</th>
        <td>
          <input type="text" name="deptNo" v-model="dept.deptNo" placeholder="부서번호를 입력하세요" required="required" readonly/>
        </td>
      </tr>
      <tr>
        <th>부서 이름</th>
        <td>
          <input type="text" name="dName" v-model="dept.dName" placeholder="부서이름을 입력하세요" required="required"  />
        </td>
      </tr>
      <tr>
        <th>부서 지역</th>
        <td>
          <input type="text" name="loc" v-model="dept.loc" placeholder="지역을 입력하세요" />
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">
          <input type="button" @click="modifyDept()" value="수정" />
          <input type="button" @click="removeDept()" value="삭제" />
          <input type="button" @click="moveList()" value="취소" />
        </td>
      </tr>
    </tfoot>
  </table>
</form>`,
  data() {
    return {
      dept: [],
    };
  },
  methods: {
    getDeptDetail() {
      const params = new URL(document.location).searchParams;
      let deptNo = params.get("deptNo");
      axios
        .get("http://localhost:8080/myapp_rest/api/depts/" + deptNo)
        .then((response) => {
          this.dept = response.data;
        })
        .catch((error) => alert(error));
    },
    modifyDept() {
      console.log(this.dept);
      axios
        .put("http://localhost:8080/myapp_rest/api/depts/" + this.dept.deptNo, this.dept)
        .then((response) => console.log(response))
        .catch((error) => alert(error));
      location.href = "./list.html";
    },
    removeDept() {
      console.log(this.dept);
      axios
        .delete("http://localhost:8080/myapp_rest/api/depts/" + this.dept.deptNo)
        .then((response) => console.log(response))
        .catch((error) => alert(error));
      location.href = "./list.html";
    },
    moveList() {
      location.href = "./list.html";
    },
  },
  created() {
    this.getDeptDetail();
  },
};
