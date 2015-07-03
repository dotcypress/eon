import d from 'debug';
import Router from 'koa-router';

let debug = d('eon:rest');
let rest = new Router();

rest.get('/ping', function*() {
  this.result = new Date();
});

export default rest.middleware();
