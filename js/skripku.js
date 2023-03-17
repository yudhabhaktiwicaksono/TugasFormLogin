function masuk() {
  let frm, username, password;

  frm = window.document.getElementById("form_login");
  username = frm.nama.value;
  password = frm.password.value;

  if (username == "mimin" && password == "mimin123") {
    alert(`Selamat Datang  ${username} , Anda Administrator`);
  } else if (username == "budi" && password == "budi123") {
    alert(`Selamat Datang ${username}, Anda Operator`);
  } else {
    alert("Maaf Anda Gagal Login");
  }
}
