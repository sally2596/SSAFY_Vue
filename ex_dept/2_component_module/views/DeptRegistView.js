export default {
  template: `<form @submit.prevent>
  <table>
    <tbody>
      <tr>
        <th>부서 번호</th>
        <td>
          <input type="text" name="deptNo" v-model.number="deptNo" placeholder="부서번호를 입력하세요" required="required" />
        </td>
      </tr>
      <tr>
        <th>부서 이름</th>
        <td>
          <input type="text" name="dName" v-model="dName" placeholder="부서이름을 입력하세요" required="required" />
        </td>
      </tr>
      <tr>
        <th>부서 지역</th>
        <td>
          <input type="text" name="loc" v-model="loc" placeholder="지역을 입력하세요" />
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">
        <input type="button" @click="registDept()" value="등록" />
        <input type="submit" @click="moveList()" value="삭제" />
        </td>
      </tr>
    </tfoot>
  </table>
</form>`,
  data() {
    return {
      deptNo: "",
      dName: "",
      loc: "",
    };
  },
  methods: {
    registDept() {
      console.log(this.deptNo);
      axios
        .post("http://localhost:8080/myapp_rest/api/depts/", {
          deptNo: this.deptNo,
          dName: this.dName,
          loc: this.loc,
        })
        .then((response) => console.log(response))
        .catch((error) => alert(error));
      location.href = "./list.html";
    },
    moveList() {
      location.href = "./list.html";
    },
  },
};
