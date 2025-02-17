import axios from "axios";

const params = new URLSearchParams({
  userName: "priya",
  email: "priya@gmail.com",
  fullName: "priya",
  password: "priya",
  phoneNumber: "4238428343242",
});

axios
  .post("http://localhost:8080/auth/signup", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", 
    },
  })
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request error:", error.message);
    }
  });











// import axios from "axios";

// const params = new URLSearchParams({
//   userName: "priya",
//   email: "priya@gmail.com",
//   fullName: "priya",
//   password: "priya",
//   phoneNumber: "4238428343242",
// });


// axios
//   .post("http://localhost:8080/auth/signup", null, { params })
//   .then((response) => {
//     console.log("Success:", response.data);
//   })
//   .catch((error) => {
//     if (error.response) {
//       console.error("Error response:", error.response.data);
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//     } else {
//       console.error("Request error:", error.message);
//     }
//   });