var word = "hello world";
var result = "";
function myFunc() {
  for (var i in word) {
    if (i % 2 == 0) {
      var upper = word[i].toUpperCase();
      result += upper;
    } else {
      var lower = word[i].toLowerCase();
      result += lower;
    }
  }
  console.log(result);
}
myFunc();

var arr = [];
var res = "";
for (var i = 0; i < 51; i++) {
  arr.push(i);
}
function test() {
  for (i in arr) {
    if (i % 3 == 0 && i % 5 == 0) {
      // console.log("foobar : divisible by 5 and 3", { i });
      res += "foobar";
    } else if (i % 3 == 0) {
      // console.log("foo: divisible by 3", { i });
      res += "foo";
    } else if (i % 5 == 0) {
      // console.log("bar divisible by 5", { i });
      res += "bar";
    } else {
      // console.log({ i });
      res += i;
    }
  }
  console.log(res);
}
test();
