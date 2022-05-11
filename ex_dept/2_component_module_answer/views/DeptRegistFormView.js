export default {
  template: `
  <div class="regist">
  <h1 class="underline">부서 등록</h1>
  <div class="regist_form">
      <label for="deptNo">부서번호</label>
      <input type="text" id="deptNo" v-model="deptNo"/><br />
      <label for="dName">부서명</label>
      <input type="text" id="dName" v-model="dName"/><br />
      <label for="loc">지역</label>
      <input type="text" id="loc" v-model="loc" /><br />
      <button @click="registDept">등록</button>
      <button @click="moveList">목록</button>
  </div>
</div>  
  `,
  data() {
    return {
      deptNo: "",
      dName: "",
      loc: "",
    };
  },
  methods: {
    registDept() {
      axios
        .post("http://127.0.0.1:8080/myapp_rest/api/depts", {
          deptNo: this.deptNo,
          dName: this.dName,
          loc: this.loc,
        })
        .then(() => {
          alert("부서 등록에 성공하였습니다.");
          this.moveList();
        })
        .catch(() => alert("부서 등록에 실패하였습니다."));
    },
    moveList() {
      location.href = "./list.html";
    },
  },
};
