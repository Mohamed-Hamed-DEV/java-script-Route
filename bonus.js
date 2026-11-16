function createCounter(init) {
  var temp = init;

  return {
    increment: function () {
      temp++;
      return temp;
    },

    decrement: function () {
      temp--;
      return temp;
    },

    reset: function () {
      temp = init;
      return temp;
    },
  };
}

