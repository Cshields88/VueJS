<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <!-- Store Data with Firebase -->
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                    <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-success" @click="fetchData">Get Data</button>
                <h3>Users</h3>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users"><strong>Username:</strong> {{u.username}}
                      <br><strong>Email: </strong>{{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    submit() {
      // this.$http.post("data.json", this.user).then(
      //   response => {
      //     console.log(response);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
      // this.resource.save({}, this.user);
      this.resource.saveAlt();
    },
    fetchData() {
      this.$http
        .get("data.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
          console.log(resultArray);
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" }
    };
    this.resource = this.$resource("data.json", {}, customActions);
  }
};
</script>

<style>
</style>
