function tugas22() {
  var kata = "Saya ingin belajar bersama";
  var kata1 = kata.split(" ");
  kata1.forEach((item, index, array) => {
    console.log("Item : ", item, "Index ke ", index);
  })
}
tugas22();