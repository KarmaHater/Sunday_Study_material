const exampleStream = [
  "host:a,role:web,availability-zone:us-east-1a",
  "host:b,role:web,availability-zone:us-east-1b",
  "host:a,role:web,availability-zone:us-east-1a",
  "host:c,role:db,db_role:master,availability-zone:us-east-1e",
  "host:d,role:db,db_role:replica,availability-zone:us-east-1a",
  "host:e,role:intake,availability-zone:us-east-1a",
  "host:e,role:intake,availability-zone:us-east-1a",
  "host:f,role:kafka,availability-zone:us-east-1a"
];

function getTagCounts(stream) {
  const result = {};
  stream.forEach(tags => {
    const arrayOfTag = tags.split(",");
    arrayOfTag.forEach(tag => {
      if (result[tag]) {
        result[tag] = result[tag] + 1;
      } else {
        result[tag] = 1;
      }
    });
  });

  const resultArray = Object.keys(result).map((key, value) => [key, value]);

  return resultArray.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
}

// console.log(getTagCounts(exampleStream));

const jobs = [
  // job_id, job_time, child_job_ids
  // [1, 30, [2, 4]],
  [2, 10, [3]],
  [4, 60, []],
  [3, 20, []]
];

let collectionTime = 0;
function getTotalJobTime(jobId) {
  // first get the job
  const job = jobs.filter(job => job[0] === jobId)[0];
  const childJobs = job[2];
  if (job[2].length === 0) {
    // if it does not have children
    return job[1];
  } else if (childJobs.length > 1) {
    //   if  it have more then one chlid
  } else {
    // console.log(job[2], "job[2]");
    return getTotalJobTime(job[2][0]) + job[1];
  }
}

// console.log(getTotalJobTime(1)); // 30 + (10+20) + 60 = 120
// console.log(getTotalJobTime(2)); // 10+20 = 30
// console.log(getTotalJobTime(4)); // 60

//   // console.log(getTotalJobTime(2)) // 10+20 = 30
//   // -> get job 2:
//   //     [2, 10, [3]],
//   //     self time 10
//   // children: [3]

//   // get job 3:
//   //     [3, 20, []],
//   //       20
//   // 10+20

var nestedObject = {
  info: {
    data: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something2: "foo2",
            something3: "foo2"
          }
        }
      }
    }
  }
};

const contains = object => {
  let count = 0;

  const helper = object => {
    if (object === undefined) {
      return;
    }
    const keys = Object.keys(object);

    if (keys.length > 1) {
      keys.forEach(() => {
        count = count + 1;
      });
    } else {
      count = count + 1;
      return helper(object[keys[0]]);
    }
  };

  helper(object);

  return count;
};

console.log(contains(nestedObject));

const sumSquares = (item, extra) => {
  let counter = 0;

  if (extra) {
    counter = extra * extra + counter;
  }

  const helper = item => {
    if (Array.isArray(item)) {
      item.map(num => {
        return helper(num);
      });
    } else {
      counter = item * item + counter;
    }
  };

  helper(item);

  return counter;
};

// console.log(sumSquares([1, 2], 3));
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// var l = [[[[[[[[[1]]]]]]]]];
// console.log(sumSquares(l)); // 1 = 1

// l = [10, [[10], 10], [10]];
// console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

const replicate = (time, content) => {
  let result = [];
  const helper = (time, content) => {
    if (time === 0) {
      return;
    } else {
      result.push(content);
      return helper(time - 1, content);
    }
  };

  helper(time, content);

  return result;
};

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []

// const reverse a string
let newString = "";

const repeat = string => {
  if (!string) return newString;

  const lastLetter = string[string.length - 1];
  newString += lastLetter;
  repeat(string.substr(0, string.length - 1));

  return newString;
};

// console.log(repeat("12234566"));

const fuckYou = () => {
  let max = 0;

  const helper = ar => {
    ar.map(item => {
      if (item === undefined) return;

      if (Array.isArray(item)) {
        helper(item);
      } else {
        if (item > max) {
          max = item;
        }
      }
    });
  };
  helper(ar);

  return max;
};

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

// console.log(fuckYou(ar));

// Count Spaces in A String

// Find Last Occurrence of Character in String

