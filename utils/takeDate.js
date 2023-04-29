const takeDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  let hh = today.getHours() + ":" + today.getMinutes();
  today = mm + "/" + dd + "/" + yyyy + " | " + hh;
  return today;
};

export default takeDate;
