const array = [];
for (let i = 1; i <= 10; i++) {
  array.push(i);
}
console.log(array);

// // const filter = array.filter((num) => {
// //   if (num === 0) {
// //     return;
// //   }
// //   return num % 2 === 0;
// // });
// // console.log(filter);

// // for (let i = 0; i <= 10; i++) {
// //   if (i === 6) {
// //     continue;
// //   }
// //   if (i % 2 === 0) {
// //     console.log(i);
// //   }
// // }
// const newArr = array.map();
// // console.log(newArr);

// const empty = [];
// for (let i = 1; i <= 10; i++) {
//   empty.push(i);
// }
// console.log(empty);

// const tableWithMap = empty.map((num) => num * 5);
// console.log(tableWithMap);

// const tableWithFor = (num) => {
//   for (let i = 1; i <= 10; i++) {
//     multiply = num * i;
//     console.log(multiply);
//   }
// };
// tableWithFor(5);

// let multiply;
// function table(num) {
//   const tableWithForEach = array.forEach((el) => {
//     if (el === 0) {
//       return;
//     }
//     multiply = el * num;
//     console.log(multiply);
//   });
// }
// table(5)

// function table(num) {
//   const functionWithMap = array.map((el) => el * num);
//   console.log(functionWithMap);
// }
// table(5);

// const sum = (num) =>
//   Array(num)
//     .fill("*")
//     .reduce((preVal, curVal, idx) => preVal + ++idx, 0);
// console.log(sum(5));

// const arr = [5, 7, 9, 6, 20].reduce(
//   (preValue, currentValue) => preValue + currentValue,
//   10
// );
// console.log(arr);

// const array = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
// console.log(array);
// const newArray = array.filter((el, indx, arr) => arr.indexOf(el) === indx);
// console.log(newArray);

// const array1 = [2, 4, 6, 8, 10];
// const isEven = array1.every((num) => num % 2 === 0);
// console.log(isEven);

// const array2 = [1, 2, 3, 4, 5];
// const hasEven = array2.some((number) => number % 2 === 0);
// console.log(hasEven);

// const removDuplicates = (arr) => {
//   const fil = arr.filter((el, indx, arr) => arr.indexOf(el) === indx);
//   console.log(fil);
// };
// removDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);

// const removDuplicates = (arr) => {
//   const blackArray = [];
//   arr.forEach((el) => {
//     if (blackArray.includes(el)) {
//       return;
//     } else {
//       blackArray.push(el);
//     }
//   });
//   console.log(blackArray);
// };
// removDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);

// const names = ["abbas", "muzzakkir", "mezab", "anas", "faran"];
// console.log(names);

// const largetstName = names.reduce((prevName, curName) => {
//   if (prevName.length < curName.length) {
//     return curName;
//   } else {
//     return prevName;
//   }
// }, "");
// console.log(largetstName);

// const people = ["m", "anas", "farhan Shaikh", "tar", "t"];

// const longestString = people.reduce((prevString, curString, idx, boxx) => {
//   if (curString.length > prevString.length) {
//     return curString;
//   } else {
//     return prevString;
//   }
// }, "");

// const myArray = [];
// for (let i = 0; i < 10; i = i + 2) {
//   myArray.push(i);
// }
// console.log(myArray);

// =========================RECURSION METHOD========================

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

console.log(multiply([5, 10, 5, 20, 20], 5));

// ========================Countdown Array==========================

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const hoo = countdown(n - 1);
    hoo.unshift(n);
    return hoo;
  }
}
const HugeArray = countdown(20);
console.log(HugeArray);

// =======================FCC Data Structure Last Question=========================

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  if (userObj.data.friends[friend] === true) {
    console.log(userObj.data.friends);
    return userObj.data.friends;
  } else {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));

// =========================template literale=====================

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [
//     `<li class="text-warning">${arr[0]}</li>`,
//     `<li class="text-warning">${arr[1]}</li>`,
//     `<li class="text-warning">${arr[2]}</li>`,
//   ];
//   console.log(failureItems);
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// const failureItems = [
//     `<li class="text-warning">${arr[0]}</li>`,
//   `<li class="text-warning">${arr[1]}</li>`,
//   `<li class="text-warning">${arr[2]}</li>`
//   ];

// =====================longest word in astring ====================
// function findLongestWordLength(str) {
//   let string = str.split(" ");
//   console.log(string);
//   string.reduce((prevStr, curStr) => {
//     if (prevStr.length < curStr.length) {
//       console.log(curStr.length)
//       return curStr
//     } else {
//       return prevStr;
//     }

//   }, "");
//   return str.length;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//============================repeat string ==========================

// function repeatStringNumTimes(str, num) {
//   if (num > 0) {
//     let newStr = "";
//     for (let i = 0; i < num; i++) {
//       newStr += str;
//     }
//   } else {
//     return "";
//   }
// }

// repeatStringNumTimes("abc", 3);

// ============================reverse a string =======================

// function reverseString(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.unshift(str[i]);
//   }
//   str = arr.join("");
//   console.log(str);
//   return str;
// }

// reverseString("hello world");

// ===========================factorial ================================

// function factorialize(num) {
//   if (num < 0) {
//     return -1;
//   } else if (num === 0) {
//     return 1;
//   } else {
//     return num * factorialize(num - 1);
//   }
// };

// factorialize(5);

// ===================Longest word in the string==========================

function findLongestWordLength(str) {
  let arr = str.split(" ");
  console.log(arr);
  let variable = "";
  arr.forEach((word) => {
    if (word.length > variable.length) {
      variable = word;
    }
  });
  return variable.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// =========================confirm the ending==========================

// function confirmEnding(str, target) {
//   const regex = /str/;

//   return str;
// }

// confirmEnding("Bastian", "n");

// ================================Above question solution ==========================

// function confirmEnding(str, target) {
//   if (str.slice(str.length - target.length) === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// confirmEnding("He has to give me a new name", "name");

// ============================= Truncate a string=========================

function truncateString(str, num) {
  console.log(str.length);
  console.log(str.slice(0, num));
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ================================finders keepers=============================

function findElement(arr, func) {
  console.log(arr.find(func));
  return arr.find(func);
}

findElement([1, 3, 4, 5, 6, 7, 8, 9, 10], (num) => num % 2 === 0);

// ================================funtional programming==========================

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookName) {
  const newBookList = bookList.push(bookName);
  console.log(newBookList);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
  }
}

const newBookList = add(bookList, "A Brief History of Time");
const newerBookList = remove(
  bookList,
  "On The Electrodynamics of Moving Bodies"
);
const newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);

// =======================map functionality========================

// const users = [
//   { name: "John", age: 34, phone: 7977166580 },
//   { name: "Amy", age: 20, phone: 7977166589 },
//   { name: "camperCat", age: 10, phone: 7977166588 },
// ];

// const names = users.map((user) => { age : user["age"] , name : user["name"] });
// console.log(names);
// The console would display the value [ 'John', 'Amy', 'camperCat' ].

// =============================filter + map==============================

// The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line

// const filteredList = watchList
//   .map((movie) => movie.imdbRating)
//   .filter((rating) => rating >= 8.0);
// // Only change code above this line

// console.log(filteredList);

//==========================correct the map funtion and get the movie title as well as rating inside an object ====================

// const extractedData = watchList
//   .map((movie) => movie.imdbRating)
//   .filter((rating) => rating >= 8.0);
// console.log(extractedData);

// ======================sentisify a string =============================

function sentensify(str) {
  // Only change code below this line
  let array = str.split("-");
  console.log(array);
  let sentence = array.join(" ");
  console.log(sentence);
  return sentence;
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");

// ==================use reduce method to analyze data =====================
// Before using it comment out every Const of watchList
// The global variable
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

function getRating(watchList) {
  // Add your code below this line
  const averageRating =
    // Use filter to find films directed by Christopher Nolan
    watchList
      .filter((film) => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map((film) => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter((film) => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
}

console.log(getRating(watchList));

// ================convert string to URL Slug =======================
// Have to change this code ===============
// Only change code below this line
function urlSlug(title) {
  console.log(
    title
      .trim()
      .split(" ")
      .filter((word) => word)
      .map((word) => word[0].toLowerCase() + word.slice(1).toLowerCase())
      .join("-")
  );
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

// ====================return largest numbers from arrays of array =====================

function largestOfFour(arr) {
  const arrOfLarg = [];
  arr.forEach((array) => arrOfLarg.push(Math.max(...array)));
  return arrOfLarg;

  // const largestNumber = [];
  // for(let i = 0; i < arr.length ; i++){
  //   largestNumber.push(Math.max(...arr[i]));
  // }
  // return largestNumber;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// ==========================  mutation====================//

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

// ----------------------chunky monkey-----------------------//

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

//======================use recursion to create a range of numbers=====================

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// ==============Iterate Through All an Array's Items Using For Loops===============

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
  // Only change code above this line
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// =-===================Iterate Through the Keys of an Object with a for...in Statement===============

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));

// ===================Truncate a String========================

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ====================Where do I Belong=====================

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);

// ==========================profile lookup======================

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// ======================loop through a javasript object =================

var object = {
  k1: "value1",
  k2: "value2",
  k3: "value3",
};

for (var key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(key + " -> " + object[key]); // k1 -> value1 ...
  }
}

// -===================Practice from notion concepts ===============

// function test() {
//   const a = (b = 123);
// }
// test();
// console.log(typeof a, typeof b);

// const user = {
//   name: "nasir",
//   role: "admin",
//   address: {
//     street: "alpha",
//   },
// };

// const copyUser = { ...user };
// copyUser.name = "bar";
// copyUser.address.street = "beta";

// function addItem(item, items = []) {
//   items.push(item);
//   console.log(items);
// }
// addItem("lorem");
// addItem("ipsum");

// const res = "a1122".split("").map(Number);
// .filter(Boolean);
//   .reduce((a, b) => a + b);
// console.log(res);

// console.log([..."foo bar"].map((charc) => charc.toLowerCase()).join("_"));

// function sumOfArray(array) {
//   return array.reduce((a, b) => a + b);
// }
// console.log(sumOfArray([4, -3, 1, 5]));
// console.log(sumOfArray([]));
// console.log(sumOfArray([-2]));

// const obj = {
//   name: "dajjal",
//   address: {},
// };
// obj.address.street = "noway";
// console.log(obj);
// obj?.address.street;
// obj.address?.street;
// obj?.address?.street;

// const obj = {
//   a: 1,
//   b: 3,
//   a: -1,
// };
// console.log(Object.values(obj));

// const falana = {
//   name: "handve",
//   printName() {
//     console.log(this.name);
//   },
// };
// const method = falana.printName;
// method();

// let a = 1,
//   b = 2,
//   c = 3;

// [a, b, c] = [b, a];

// console.log(a, b, c);

// const obj1 = { foo: 2, bar: 4 };

// const entries = Object.entries(obj1)
//   .map((el) => [el[0], el[1] * 2])
//   .map((el) => [el[1], el[0] + 1]);

// console.log(Object.fromEntries(entries));

// let count = 0;

// console.log(count++);
// console.log(count);

const countFunc = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

const num1 = countFunc();

const num2 = countFunc();

console.log(num1(), num1());
console.log(num2(), num2());

const printBtn = document.getElementById("btn");

const printName = (num1, num2) => {
  console.log(num1, num2);
  let result = num1 + num2;
  alert(`Result : ${num1} + ${num2} = ${result}`);
};

const nameData = () => {
  debugger;
  let message1 = parseInt(prompt("Enter first number?", ""));
  let message2 = parseInt(prompt("Enter second number?", ""));
  printName(message1, message2);
};

printBtn.addEventListener("click", nameData);

const fruits = ["apple", "banana", "sabun"];

// for (let fruit of fruits) {
//   console.log(fruit);
//   alert(fruit);
// }

// for (let key in fruits) {
//   alert(fruits[key]);
// }

const person = {
  name: "Abbas",
  isAdmin: true,
  age: 22,
};

// for (let key in person) {
//   alert(key);
//   alert(person[key]);
// }

let clonedPerson = {};

// ================OBJECT ASSIGN TESTING==============

// Object.assign(clonedPerson, person);

// clonedPerson.name = "BAba";
// clonedPerson.age = 23;

// ==============================

for (let key in person) {
  clonedPerson[key] = person[key];
}
delete clonedPerson.isAdmin;
clonedPerson.name = "BAba";
clonedPerson.age = 23;

console.log(clonedPerson);
console.log(person);

const any = {
  name: "Abb",
  study: {
    course: "mechanical",
    duration: 30,
  },
  gender: "male",
};

// const clonedAny = Object.assign({}, any);
const clonedAny = { ...any, study: { ...any.study } };
console.log(clonedAny);
console.log(any);
clonedAny.gender = "female";
clonedAny.study.duration = 10000;

// ===================Prime number====================

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
showPrimes(5);

// ==========================counter==========================
function sayHi() {
  console.log("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

console.log(`Called ${sayHi.counter} times`); // Called 2 times

// ==========================rest perameter=====================

function sumAll(...args) {
  // args is the name for the array
  console.log(args);
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3, 4)); // 6

function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Abbas", "Imperator");

// =======================The arguments variable

// ==There is also a special array-like object named `arguments` that contains all arguments by their index.

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for(let arg of arguments)console.log(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

// ===================bind =====================

const visitor = {
  name: "Abbas",
  role: "visitor",
  resignYear: 2020,
};

const print = function () {
  console.log(
    this.name +
      " " +
      "worked here as" +
      " " +
      this.role +
      " " +
      "and resign in" +
      " " +
      this.resignYear
  );
};

let printVisitor = print.bind(visitor);
printVisitor();

// ========================promisses=====================

const isVisitorVisited = async () => {
  try {
    const data = await fetch("https://jseholder.typiccom/todos");
    console.log(data);
    const users = data.json();
    console.log(users);
    console.log("executed");
  } catch ({ message }) {
    console.log(message);
  }
};

isVisitorVisited();

//=====================object destructuring ============================

const obj = {
  name: "abbas",
  address: "kalyan",
  age: 22,
  info: {
    gender: "male",
  },
};

const { name } = obj;
console.log(name);

const {
  info: { gender },
} = obj;
console.log(gender);

for (let key in obj) {
  console.log(key);
}
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} : ${value}`);
}

const emp1 = {
  id: 1,
  name: "test1",
  address: {
    city: "Mumbai",
    street: {
      name: "LoL street",
      houseNo: 25,
    },
  },
};

const emp2 = {
  id: 1,
  name: "test1",
  address: {
    city: "Mumbai",
    street: {
      name: "LoL street",
      houseNo: 25,
    },
  },
};

let result = false;
for (let key in emp2) {
  if (emp1.hasOwnProperty(key)) {
    if (typeof emp2[key] === "object") {
      for (let keys in emp2[key]) {
        if (typeof emp2[key][keys] === "object") {
          for (let nestedKey in emp2[key][keys]) {
            if (emp1[key][keys][nestedKey] === emp2[key][keys][nestedKey]) {
              result = true;
            } else {
              result = false;
            }
          }
        } else if (emp2[key][keys] === emp1[key][keys]) {
          result = true;
        } else {
          result = false;
        }
      }
    } else if (emp1[key] === emp2[key]) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = false;
  }
}
console.log(result);
