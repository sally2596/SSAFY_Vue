export default {
  template: `
  <div class="regist">
  <h1 class="underline">부서 상세 정보</h1>
  <div class="regist_form">
      <label for="deptNo">부서번호</label>
      <input type="text" id="deptNo" v-model="dept.deptNo" readonly/><br />
      <label for="dName">부서명</label>
      <input type="text" id="dName" v-model="dept.dName"/><br />
      <label for="loc">지역</label>
      <input type="text" id="loc" v-model="dept.loc" /><br />
      <button @click="modifyDept">수정</button>
      <button @click="deleteDept">삭제</button>
      <button @click="moveList">목록</button>
  </div>
</div>  
  `,
  data() {
    return {
      dept: {},
      deptNo: 0,
    };
  },
  created() {
    this.deptNo = new URL(document.location).searchParams.get("deptNo");
    this.getDept();
  },
  methods: {
    getDept() {
      axios
        .get(`http://127.0.0.1:8080/myapp_rest/api/depts/${this.deptNo}`)
        .then(({ data }) => (this.dept = data));
    },
    modifyDept() {
      axios
        .put(`http://127.0.0.1:8080/myapp_rest/api/depts/${this.deptNo}`, {
          deptNo: this.dept.deptNo,
          dName: this.dept.dName,
          loc: this.dept.loc,
        })
        .then(() => {
          alert("수정에 성공하였습니다.");
          this.moveList();
        });
    },
    deleteDept() {
      axios
        .delete(`http://127.0.0.1:8080/myapp_rest/api/depts/${this.deptNo}`)
        .then(() => {
          alert("삭제에 성공하였습니다.");
          this.moveList();
        });
    },
    moveList() {
      location.href = "./list.html";
    },
  },
};
