interface Email {
  value:string;
  selected:boolean;
}
const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];
interface NumberProducts {
  value:number;
  selected:boolean;
}
const numberOfProducts: NumberProducts[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | NumberProducts) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function(pro){
  const item = createDropdownItem(pro);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);

});