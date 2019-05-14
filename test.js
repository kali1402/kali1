const str = '퇴근시간은 언제오나? 퇴근 퇴근 퇴근';

const str2 = str.replace('퇴근', '출근');

const str3 = str.replace(/(퇴근)/g, '$1 빨리하고싶다.');

console.log(str);

console.log(str2);

console.log(str3);