import d from 'debug';
import koa from 'koa';
import util from 'util';
import mount from 'koa-mount';
import koaStatic from 'koa-static';
import bodyParser from 'koa-body';
import gzip from 'koa-gzip';
import config from './config';

let debug = d('eon:index');
let app = koa();

app.use(gzip());
app.use(bodyParser());
app.use(koaStatic('assets'));

app.use(function*(next) {
  try {
    yield next;
    if (this.result) {
      this.body = this.result;
    }
  } catch (err) {
    this.status = err.status || 500;
    this.body = {
      errors: [err.description || 'Server error']
    };
    this.app.emit('error', err, this);
  }
});

app.use(mount('/api', require('./lib/rest.js')));

app.listen(config.port);
debug('Api listening @ %s', config.port);
