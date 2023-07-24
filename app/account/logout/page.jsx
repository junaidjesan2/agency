"use client";
export default function page() {
  const confirmation = window.confirm("Do you want to Log Out?");
  if (confirmation) {
    localStorage.removeItem("registerValue");
    window.location.replace("http://localhost:3000");
    alert("Log Out Successfully");
  }else{
    window.location.reload()
  }
}
