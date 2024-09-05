var fullname = "Ashok Vaishnav";

var obj = {
  fullname: "Hacked Full Name",

  prop: {
    fullname: "Inside prop",
    getFullname: function () {
      return this.fullname;
    },
  },

  getFullname: function () {
    return this.fullname;
  },

  getFullnameV2: () => {
    this.fullname;
  },

  getFullnameV3: (function () {
    return this.fullname;
  })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2()); // output of this is undefine becuse this inside arrow function mai jo this hota hai vo window varbal yaa global variabele ko refer karta hai
//console.log(obj.getFullnameV3()); this line give error because getFullnameV3 is not a function
