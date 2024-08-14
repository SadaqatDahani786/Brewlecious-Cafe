/*
 ** **
 ** ** ** Feather Icons
 ** **
 */
feather.replace();

/*
 ** **
 ** ** ** Utils Funcs
 ** **
 */
const select = (query) => document.querySelector(query);
const selectAll = (query) => document.querySelectorAll(query);

/*
 ** **
 ** ** ** Close header alert
 ** **
 */
select(".header .alert button").addEventListener("click", (e) => {
  e.preventDefault();

  select(".header .alert").style.display = "none";

  select("aside.aside").style.marginTop = "104px";
});
