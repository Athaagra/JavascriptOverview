var arrowFunc = () => {
   console.log('hello from an arrow function');
}

arrowFunc();

var logInfo = (info) => {
  console.log('info',info);
};

logInfo('foobar');


var createLogInfo = info => 'info ' + info;

createLogInfo('foobar');

(()=>{
  console.log('hello from an anonymous arrow function');
})();
