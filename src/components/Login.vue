<template>
  <div class="row">
    <form action="">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email"></input>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter Password"></input>
      </div>
      <button class="btn btn-outline-success" @click.prevent="signIn()">Sign in</button>
      <button class="btn btn-outline-danger" @click.prevent="signOut()">Sign out</button>
    </form>
  </div>
</template>

<script>
  // Go to Google Firebase
  // 1. Enable Signin method : Email
  // 2. Add a User in Users

  import Firebase from 'firebase'
  export default {
    methods: {
      signIn() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          if(errorCode === 'auth/wrong-password' ){
            alert('wrong-password');
          } else {
            alert(errorMessage);
          }
        })

      },
      signOut() {
        Firebase.auth().signOut().then(function(){
          alert('logged out');
        }).catch(function(e){
          alert('error');
        })
      },
      test() {
        console.log("this is a test function");
      }
    }
  }
</script>
