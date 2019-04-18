console.log("-------------------");
console.log("");
console.log("");
console.log("");

const getByClassName = (className, startingElement) => {};

// const elt = document.getElementById('there_are_some_highlights_here_i_think');
// return getByClassName('highlight', elt);

// some useful interfaces on DOM.Element that can help here

// Element.prototype.children  <- gives you an array-like list of an element's children
// Element.prototyp.className <- gives the value
// ...

document.prototype.getByClassName = (className, startingElement) => {
  const results = [];
  // then grab all children of the body

  const help = (className, elm) => {
    if (elm === undefined) return;
    // first grab body and find starting element

    const hasMatch = elm.classList.any(cN => cN === className);

    if (hasMatch) {
      results.push(elm);
    }

    if (elm.children().length > 1) {
      // if the child has move children rerun the func with the element
      elm.children().forEach(elmChild => {
        return help(className, elmChild);
      });
    }
  };

  help(className, startingElement);

  return results;
};

document.prototype.getByClassName = (classNames, startingElement) => {
  const results = [];

  const paths = classNames.split(">") //[("one", "two", "three")];

  const helper = (p, elm) => {
    const hasMatch = elm.classList.any(cN => cN === p[0]);

    if (hasMatch && p.length === 1) {
      results.push(elm);
      return;
    } else if (hasMatch) {

      const first = p.unShift();

      elm.children().forEach(elm => {
        helper(p, elm);
      });

      p.shift(first)
    } else {
      return;
    }
  };

  helper(paths, startingElement);

  return results;
};


// town > neighborhood > street > house
// first see if the element hasMatch
// if it does when need to check the child
