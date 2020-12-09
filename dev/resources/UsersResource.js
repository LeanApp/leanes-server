"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _CollectionInterface2 = require("../interfaces/CollectionInterface");

var _RecordInterface2 = require("../interfaces/RecordInterface");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-server.
//
// leanes-server is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-server is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with leanes-server.  If not, see <https://www.gnu.org/licenses/>.
const RecordInterface = _flowRuntime.default.tdz(() => _RecordInterface2.RecordInterface);

const CollectionInterface = _flowRuntime.default.tdz(() => _CollectionInterface2.CollectionInterface);

const {
  ORIGINS,
  HASH_DIGEST,
  ITERATIONS,
  TOKEN_ALGORITHM,
  KEYID,
  ISSUER,
  AUTO_LOCKING,
  REGISTRATION_IS_ALLOWED,
  PUBLIC_KEY,
  PRIVATE_KEY,
  SECRET,
  DEFAULT_USERS
} = process.env;

var _default = Module => {
  let _t$TypeParametersSymb;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SESSIONS,
    Resource,
    ConfigurableMixin,
    BodyParseMixin,
    CheckSchemaVersionResourceMixin,
    CheckApiVersionResourceMixin,
    CheckSessionsMixin,
    initialize,
    partOf,
    meta,
    property,
    nameBy,
    mixin,
    inject,
    chains,
    action,
    Utils: {
      _,
      statuses
    }
  } = Module.NS;
  const OK = statuses('OK');
  const CREATED = statuses('created');
  const NO_CONTENT = statuses('no content');
  const UNAUTHORIZED = statuses('unauthorized');
  const FORBIDDEN = statuses('forbidden');

  const _UsersResourceTypeParametersSymbol = Symbol("UsersResourceTypeParameters");

  let UsersResource = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("UsersResource", UsersResource => {
    const D = UsersResource.typeParameter("D", undefined, _flowRuntime.default.ref(RecordInterface));
    return [_flowRuntime.default.extends(Resource), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("entityName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.property("_sessionsFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("_sessions", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.method("signup"), _flowRuntime.default.method("signout", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("authorize")];
  })), _dec2 = chains(['list', 'detail', 'create', 'update', 'signup', 'signout', 'authorize'], function () {
    this.initialHook('checkApiVersion');
    this.initialHook('checkSchemaVersion');
    this.initialHook('parseBody', {
      only: ['create', 'update', 'signup', 'authorize']
    });
    this.initialHook('checkSession', {
      only: ['signout']
    });
  }), _dec3 = partOf(Module), _dec4 = mixin(CheckSessionsMixin), _dec5 = mixin(CheckSchemaVersionResourceMixin), _dec6 = mixin(CheckApiVersionResourceMixin), _dec7 = mixin(BodyParseMixin), _dec8 = mixin(ConfigurableMixin), _dec9 = _flowRuntime.default.decorate(function () {
    return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_UsersResourceTypeParametersSymbol].D))));
  }), _dec10 = inject(`Factory<${SESSIONS}>`), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = (_class2 = (_temp = (_t$TypeParametersSymb = _flowRuntime.default.TypeParametersSymbol, _class3 = class UsersResource extends Resource {
    get entityName() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType2.assert('user');
    }

    constructor(...args) {
      const _typeParameters = {
        D: _flowRuntime.default.typeParameter("D")
      };
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_sessionsFactory", _descriptor, this);
      this[_UsersResourceTypeParametersSymbol] = _typeParameters;
    }

    get _sessions() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_UsersResourceTypeParametersSymbol].D));

      return _returnType3.assert(this._sessionsFactory());
    }

    async signup() {
      console.log('signup');

      if (REGISTRATION_IS_ALLOWED == 'yes') {
        const payload = _.pick(this.context.request.body, ['email', 'password']);

        const newUser = await this.collection.create(payload);
        this.context.status = CREATED;
        return newUser;
      } else {
        this.context.throw(FORBIDDEN);
      }
    }

    async signout() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      console.log('signout');
      const {
        sessionCookie,
        cookieDomain
      } = this.configs;
      if (this.session != null && this.session.uid != null) await this.session.destroy();
      const [domain, oldDomain] = /(.*localhost.*)|(.*127\.0\.0\.1.*)/.test(this.context.get('origin') || this.context.get('X-Forwarded-For')) ? [this.context.hostname, null] : new RegExp(".*#{cookieDomain}.*").test(this.context.get('origin') || this.context.get('X-Forwarded-For')) ? [cookieDomain, "api.#{cookieDomain}"] : [null, null];
      this.context.cookies.set(sessionCookie, '', {
        httpOnly: yes,
        maxAge: 1000,
        domain: domain
      });
      this.context.cookies.set(`${sessionCookie}ExpiredAt`, '', {
        maxAge: 1000,
        domain: domain
      });
      if (oldDomain != null) this.context.cookies.set(sessionCookie, '', {
        httpOnly: yes,
        maxAge: 1000,
        domain: oldDomain
      });
      this.context.cookies.set(`${sessionCookie}ExpiredAt`, '', {
        maxAge: 1000,
        domain: oldDomain
      });
      this.context.cookies.set(sessionCookie, '', {
        httpOnly: yes,
        maxAge: 1000
      });
      this.context.cookies.set(`${sessionCookie}ExpiredAt`, '', {
        maxAge: 1000
      });
      this.context.status = NO_CONTENT;
    }

    async authorize() {
      console.log('authorize');
      const {
        username,
        password
      } = this.context.request.body;
      const user = await this.collection.findBy({
        email: username
      });

      if (user == null) {
        this.context.throw(UNAUTHORIZED, 'Credentials are incorrect');
      } else {
        console.log('user', user);
        if (!user.verifyPassword(password)) this.context.throw(UNAUTHORIZED, 'Credentials are incorrect');
        if (!user.emailVerified) this.context.throw(FORBIDDEN, 'Unverified');
        if (user.isLocked) this.context.throw(FORBIDDEN, 'Locked'); // const hash = crypto.pbkdf2Sync(this.context.request.body.password, user.salt, 10000, 64, HASH_DIGEST).toString('hex');
        // if (hash == user.passwordHash) {

        const data = {
          appState: null,
          authenticator: 'authenticator:self-hosted',
          expiresIn: 3600000,
          idToken: null,
          idTokenPayload: null,
          profile: {
            email: user.email,
            email_verified: user.emailVerified,
            name: user.name,
            nickname: user.nickname,
            picture: user.picture,
            sub: user.sub,
            updated_at: user.updatedAt.toISOString()
          },
          refreshToken: null,
          scope: 'openid email profile',
          state: ''
        };
        const permissions = user.permissions || [];
        const requestedScopes = this.context.request.body.scope || this.context.query.scope;
        const filteredScopes = requestedScopes.split(' ').filter(x => x.includes(':'));
        const allScopes = filteredScopes.concat(permissions); // user broadcast publish

        allScopes.push(`api.read:%2Fapi/amq.topic/user_broad.${user.sub}.*`);
        allScopes.push(`api.write:%2Fapi/amq.topic/user_broad.${user.sub}.*`); // user publish request

        allScopes.push(`api.read:%2Fapi/amq.topic/user_req.${user.sub}.*`);
        allScopes.push(`api.write:%2Fapi/amq.topic/user_req.${user.sub}.*`); // user subscribe on respose

        allScopes.push(`api.read:%2Fapi/amq.topic/user_res.${user.sub}.*`);
        allScopes.push(`api.write:%2Fapi/amq.topic/user_res.${user.sub}.*`); // user subscribe on any

        allScopes.push(`api.read:%2Fapi/amq.topic/user_sub.${user.sub}.*`);
        allScopes.push(`api.write:%2Fapi/amq.topic/user_sub.${user.sub}.*`); // user res queues

        allScopes.push(`api.read:%2Fapi/user_res.${user.sub}.*`);
        allScopes.push(`api.write:%2Fapi/user_res.${user.sub}.*`);
        allScopes.push(`api.configure:%2Fapi/user_res.${user.sub}.*`); // user broadcast queues

        allScopes.push(`api.read:%2Fapi/user_broad.${user.sub}.*`);
        allScopes.push(`api.write:%2Fapi/user_broad.${user.sub}.*`);
        allScopes.push(`api.configure:%2Fapi/user_broad.${user.sub}.*`); // user subscription queues

        allScopes.push(`api.read:%2Fapi/user_sub.${user.sub}.*`);
        allScopes.push(`api.write:%2Fapi/user_sub.${user.sub}.*`);
        allScopes.push(`api.configure:%2Fapi/user_sub.${user.sub}.*`);
        data.scope = allScopes.join(' ');
        const adminScopes = [];

        if (user.isAdmin) {
          // broadcast publish
          adminScopes.push(`api.read:%2Fapi/amq.topic/admin_broad.${user.sub}.*`);
          adminScopes.push(`api.write:%2Fapi/amq.topic/admin_broad.${user.sub}.*`); // publish request

          adminScopes.push(`api.read:%2Fapi/amq.topic/admin_req.${user.sub}.*`);
          adminScopes.push(`api.write:%2Fapi/amq.topic/admin_req.${user.sub}.*`); // subscribe on respose

          adminScopes.push(`api.read:%2Fapi/amq.topic/admin_res.${user.sub}.*`);
          adminScopes.push(`api.write:%2Fapi/amq.topic/admin_res.${user.sub}.*`); // subscribe on any

          adminScopes.push(`api.read:%2Fapi/amq.topic/admin_sub.*.*`);
          adminScopes.push(`api.write:%2Fapi/amq.topic/admin_sub.*.*`); // res queues

          adminScopes.push(`api.read:%2Fapi/admin_res.${user.sub}.*`);
          adminScopes.push(`api.write:%2Fapi/admin_res.${user.sub}.*`);
          adminScopes.push(`api.configure:%2Fapi/admin_res.${user.sub}.*`); // broadcast queues

          adminScopes.push(`api.read:%2Fapi/admin_broad.${user.sub}.*`);
          adminScopes.push(`api.write:%2Fapi/admin_broad.${user.sub}.*`);
          adminScopes.push(`api.configure:%2Fapi/admin_broad.${user.sub}.*`); // subscription queues

          adminScopes.push(`api.read:%2Fapi/admin_sub.*.*`);
          adminScopes.push(`api.write:%2Fapi/admin_sub.*.*`);
          adminScopes.push(`api.configure:%2Fapi/admin_sub.*.*`);
        }

        if (data.scope == null) data.scope = '';
        data.scope += ' ' + adminScopes.join(' ');
        console.log('PRIVATE_KEY\n', PRIVATE_KEY);

        const token = _jsonwebtoken.default.sign(data, {
          key: PRIVATE_KEY
        }, {
          algorithm: TOKEN_ALGORITHM,
          keyid: KEYID,
          audience: ['api'],
          subject: user.sub,
          issuer: ISSUER,
          expiresIn: 7200
        });

        data.access_token = token;
        const newSession = {
          uid: user.id,
          expires: new Date(Date.now() + data.expiresIn)
        };
        this.session = await this._sessions.create(newSession);
        const {
          sessionCookie,
          sessionCookieTTL,
          cookieDomain
        } = this.configs;
        const domain = /(.*localhost.*)|(.*127\.0\.0\.1.*)/.test(this.context.get('origin') || this.context.get('X-Forwarded-For')) ? this.context.hostname : new RegExp(".*#{cookieDomain}.*").test(this.context.get('origin') || this.context.get('X-Forwarded-For')) ? cookieDomain : null;
        this.context.cookies.set(sessionCookie, this.session.id, {
          httpOnly: true,
          maxAge: Number(sessionCookieTTL) * 1000,
          domain
        });
        const cookieExpiredAt = Date.now() + Number(sessionCookieTTL) * 1000;
        this.context.cookies.set(`${sessionCookie}ExpiredAt`, cookieExpiredAt, {
          maxAge: Number(sessionCookieTTL) * 1000,
          domain
        });
        this.context.status = OK;
        return data;
      }
    }

  }), _class3[_t$TypeParametersSymb] = _UsersResourceTypeParametersSymbol, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init2;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "entityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "entityName"), _class2.prototype), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_sessionsFactory", [_dec9, _dec10, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_sessions", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_sessions"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signup", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signup"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signout", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signout"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "authorize", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "authorize"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9Vc2Vyc1Jlc291cmNlLmpzIl0sIm5hbWVzIjpbIk9SSUdJTlMiLCJIQVNIX0RJR0VTVCIsIklURVJBVElPTlMiLCJUT0tFTl9BTEdPUklUSE0iLCJLRVlJRCIsIklTU1VFUiIsIkFVVE9fTE9DS0lORyIsIlJFR0lTVFJBVElPTl9JU19BTExPV0VEIiwiUFVCTElDX0tFWSIsIlBSSVZBVEVfS0VZIiwiU0VDUkVUIiwiREVGQVVMVF9VU0VSUyIsInByb2Nlc3MiLCJlbnYiLCJNb2R1bGUiLCJTRVNTSU9OUyIsIlJlc291cmNlIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJCb2R5UGFyc2VNaXhpbiIsIkNoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4iLCJDaGVja0FwaVZlcnNpb25SZXNvdXJjZU1peGluIiwiQ2hlY2tTZXNzaW9uc01peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsIm1peGluIiwiaW5qZWN0IiwiY2hhaW5zIiwiYWN0aW9uIiwiVXRpbHMiLCJfIiwic3RhdHVzZXMiLCJOUyIsIk9LIiwiQ1JFQVRFRCIsIk5PX0NPTlRFTlQiLCJVTkFVVEhPUklaRUQiLCJGT1JCSURERU4iLCJVc2Vyc1Jlc291cmNlIiwiaW5pdGlhbEhvb2siLCJvbmx5IiwiZW50aXR5TmFtZSIsIl9zZXNzaW9ucyIsIl9zZXNzaW9uc0ZhY3RvcnkiLCJzaWdudXAiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInBpY2siLCJjb250ZXh0IiwicmVxdWVzdCIsImJvZHkiLCJuZXdVc2VyIiwiY29sbGVjdGlvbiIsImNyZWF0ZSIsInN0YXR1cyIsInRocm93Iiwic2lnbm91dCIsInNlc3Npb25Db29raWUiLCJjb29raWVEb21haW4iLCJjb25maWdzIiwic2Vzc2lvbiIsInVpZCIsImRlc3Ryb3kiLCJkb21haW4iLCJvbGREb21haW4iLCJ0ZXN0IiwiZ2V0IiwiaG9zdG5hbWUiLCJSZWdFeHAiLCJjb29raWVzIiwic2V0IiwiaHR0cE9ubHkiLCJ5ZXMiLCJtYXhBZ2UiLCJhdXRob3JpemUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsImZpbmRCeSIsImVtYWlsIiwidmVyaWZ5UGFzc3dvcmQiLCJlbWFpbFZlcmlmaWVkIiwiaXNMb2NrZWQiLCJkYXRhIiwiYXBwU3RhdGUiLCJhdXRoZW50aWNhdG9yIiwiZXhwaXJlc0luIiwiaWRUb2tlbiIsImlkVG9rZW5QYXlsb2FkIiwicHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIiwibmFtZSIsIm5pY2tuYW1lIiwicGljdHVyZSIsInN1YiIsInVwZGF0ZWRfYXQiLCJ1cGRhdGVkQXQiLCJ0b0lTT1N0cmluZyIsInJlZnJlc2hUb2tlbiIsInNjb3BlIiwic3RhdGUiLCJwZXJtaXNzaW9ucyIsInJlcXVlc3RlZFNjb3BlcyIsInF1ZXJ5IiwiZmlsdGVyZWRTY29wZXMiLCJzcGxpdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImFsbFNjb3BlcyIsImNvbmNhdCIsInB1c2giLCJqb2luIiwiYWRtaW5TY29wZXMiLCJpc0FkbWluIiwidG9rZW4iLCJqd3QiLCJzaWduIiwia2V5IiwiYWxnb3JpdGhtIiwia2V5aWQiLCJhdWRpZW5jZSIsInN1YmplY3QiLCJpc3N1ZXIiLCJhY2Nlc3NfdG9rZW4iLCJuZXdTZXNzaW9uIiwiaWQiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsInNlc3Npb25Db29raWVUVEwiLCJOdW1iZXIiLCJjb29raWVFeHBpcmVkQXQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7O0FBRUE7Ozs7QUFsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFPQSxNQUFNO0FBQ0pBLEVBQUFBLE9BREk7QUFDS0MsRUFBQUEsV0FETDtBQUNrQkMsRUFBQUEsVUFEbEI7QUFDOEJDLEVBQUFBLGVBRDlCO0FBQytD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQXVDdEJGLElBdkNzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQXlDdEJDLFFBekNzQixzTUE4Q3RCQSxRQTlDc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtFQStDdEJBLFFBL0NzQiw4SkFtRHRCSyxNQW5Ec0IsNEpBK0R0QkEsTUEvRHNCLCtKQXVHdEJBLE1BdkdzQjtBQXNQMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFJlY29yZEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJztcblxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5jb25zdCB7XG4gIE9SSUdJTlMsIEhBU0hfRElHRVNULCBJVEVSQVRJT05TLCBUT0tFTl9BTEdPUklUSE0sIEtFWUlELCBJU1NVRVIsIEFVVE9fTE9DS0lORywgUkVHSVNUUkFUSU9OX0lTX0FMTE9XRUQsXG4gIFBVQkxJQ19LRVksIFBSSVZBVEVfS0VZLCBTRUNSRVQsIERFRkFVTFRfVVNFUlNcbn0gPSBwcm9jZXNzLmVudjtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU0VTU0lPTlMsXG4gICAgUmVzb3VyY2UsXG4gICAgQ29uZmlndXJhYmxlTWl4aW4sIEJvZHlQYXJzZU1peGluLFxuICAgIENoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4sXG4gICAgQ2hlY2tBcGlWZXJzaW9uUmVzb3VyY2VNaXhpbixcbiAgICBDaGVja1Nlc3Npb25zTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbmFtZUJ5LCBtaXhpbiwgaW5qZWN0LCBjaGFpbnMsIGFjdGlvbixcbiAgICBVdGlsczogeyBfLCBzdGF0dXNlcyB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgT0sgPSBzdGF0dXNlcygnT0snKTtcbiAgY29uc3QgQ1JFQVRFRCA9IHN0YXR1c2VzKCdjcmVhdGVkJyk7XG4gIGNvbnN0IE5PX0NPTlRFTlQgPSBzdGF0dXNlcygnbm8gY29udGVudCcpO1xuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG4gIGNvbnN0IEZPUkJJRERFTiA9IHN0YXR1c2VzKCdmb3JiaWRkZW4nKTtcblxuICBAaW5pdGlhbGl6ZVxuICBAY2hhaW5zKFtcbiAgICAnbGlzdCcsICdkZXRhaWwnLCAnY3JlYXRlJywgJ3VwZGF0ZScsICdzaWdudXAnLCAnc2lnbm91dCcsICdhdXRob3JpemUnXG4gIF0sIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluaXRpYWxIb29rKCdjaGVja0FwaVZlcnNpb24nKTtcbiAgICB0aGlzLmluaXRpYWxIb29rKCdjaGVja1NjaGVtYVZlcnNpb24nKTtcbiAgICB0aGlzLmluaXRpYWxIb29rKCdwYXJzZUJvZHknLCB7XG4gICAgICBvbmx5OiBbJ2NyZWF0ZScsICd1cGRhdGUnLCAnc2lnbnVwJywgJ2F1dGhvcml6ZSddXG4gICAgfSk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tTZXNzaW9uJywge1xuICAgICAgb25seTogWydzaWdub3V0J11cbiAgICB9KTtcbiAgfSlcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDaGVja1Nlc3Npb25zTWl4aW4pXG4gIEBtaXhpbihDaGVja1NjaGVtYVZlcnNpb25SZXNvdXJjZU1peGluKVxuICBAbWl4aW4oQ2hlY2tBcGlWZXJzaW9uUmVzb3VyY2VNaXhpbilcbiAgQG1peGluKEJvZHlQYXJzZU1peGluKVxuICBAbWl4aW4oQ29uZmlndXJhYmxlTWl4aW4pXG4gIGNsYXNzIFVzZXJzUmVzb3VyY2U8IEQgPSBSZWNvcmRJbnRlcmZhY2UgPiBleHRlbmRzIFJlc291cmNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IGdldCBlbnRpdHlOYW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ3VzZXInO1xuICAgIH1cblxuICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtTRVNTSU9OU30+YClcbiAgICBAcHJvcGVydHkgX3Nlc3Npb25zRmFjdG9yeTogKCkgPT4gQ29sbGVjdGlvbkludGVyZmFjZTxEPjtcbiAgICBAcHJvcGVydHkgZ2V0IF9zZXNzaW9ucygpOiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+IHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uc0ZhY3RvcnkoKVxuICAgIH1cblxuICAgIEBhY3Rpb24gYXN5bmMgc2lnbnVwKCkge1xuICAgICAgY29uc29sZS5sb2coJ3NpZ251cCcpO1xuICAgICAgaWYoUkVHSVNUUkFUSU9OX0lTX0FMTE9XRUQgPT0gJ3llcycpe1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gXy5waWNrKHRoaXMuY29udGV4dC5yZXF1ZXN0LmJvZHksIFsnZW1haWwnLCAncGFzc3dvcmQnXSk7XG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKHBheWxvYWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gQ1JFQVRFRDtcbiAgICAgICAgcmV0dXJuIG5ld1VzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQudGhyb3coRk9SQklEREVOKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAYWN0aW9uIGFzeW5jIHNpZ25vdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zb2xlLmxvZygnc2lnbm91dCcpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBzZXNzaW9uQ29va2llLFxuICAgICAgICBjb29raWVEb21haW5cbiAgICAgIH0gPSB0aGlzLmNvbmZpZ3M7XG4gICAgICBpZiAodGhpcy5zZXNzaW9uICE9IG51bGwgJiYgdGhpcy5zZXNzaW9uLnVpZCAhPSBudWxsKVxuICAgICAgICBhd2FpdCB0aGlzLnNlc3Npb24uZGVzdHJveSgpO1xuICAgICAgY29uc3QgW2RvbWFpbiwgb2xkRG9tYWluXSA9IC8oLipsb2NhbGhvc3QuKil8KC4qMTI3XFwuMFxcLjBcXC4xLiopLy50ZXN0KHRoaXMuY29udGV4dC5nZXQoJ29yaWdpbicpIHx8IHRoaXMuY29udGV4dC5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpKVxuICAgICAgICA/IFt0aGlzLmNvbnRleHQuaG9zdG5hbWUsIG51bGxdXG4gICAgICAgIDogbmV3IFJlZ0V4cChcIi4qI3tjb29raWVEb21haW59LipcIikudGVzdCh0aGlzLmNvbnRleHQuZ2V0KCdvcmlnaW4nKSB8fCB0aGlzLmNvbnRleHQuZ2V0KCdYLUZvcndhcmRlZC1Gb3InKSlcbiAgICAgICAgICA/IFtjb29raWVEb21haW4sIFwiYXBpLiN7Y29va2llRG9tYWlufVwiXVxuICAgICAgICAgIDogW251bGwsIG51bGxdO1xuICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KHNlc3Npb25Db29raWUsICcnLCB7XG4gICAgICAgIGh0dHBPbmx5OiB5ZXMsXG4gICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KGAke3Nlc3Npb25Db29raWV9RXhwaXJlZEF0YCwgJycsIHtcbiAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgIH0pXG4gICAgICBpZiAob2xkRG9tYWluICE9IG51bGwpXG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChzZXNzaW9uQ29va2llLCAnJywge1xuICAgICAgICAgIGh0dHBPbmx5OiB5ZXMsXG4gICAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgICAgIGRvbWFpbjogb2xkRG9tYWluLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoYCR7c2Vzc2lvbkNvb2tpZX1FeHBpcmVkQXRgLCAnJywge1xuICAgICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgICAgICBkb21haW46IG9sZERvbWFpbixcbiAgICAgICAgfSlcbiAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChzZXNzaW9uQ29va2llLCAnJywge1xuICAgICAgICBodHRwT25seTogeWVzLFxuICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KGAke3Nlc3Npb25Db29raWV9RXhwaXJlZEF0YCwgJycsIHttYXhBZ2U6IDEwMDB9KVxuICAgICAgdGhpcy5jb250ZXh0LnN0YXR1cyA9IE5PX0NPTlRFTlQ7XG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBhdXRob3JpemUoKSB7XG4gICAgICBjb25zb2xlLmxvZygnYXV0aG9yaXplJyk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHVzZXJuYW1lLCBwYXNzd29yZCxcbiAgICAgIH0gPSB0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5O1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuY29sbGVjdGlvbi5maW5kQnkoe2VtYWlsOiB1c2VybmFtZX0pO1xuICAgICAgaWYgKHVzZXIgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQudGhyb3coVU5BVVRIT1JJWkVELCAnQ3JlZGVudGlhbHMgYXJlIGluY29ycmVjdCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuICAgICAgICBpZiAoIXVzZXIudmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQpKSB0aGlzLmNvbnRleHQudGhyb3coVU5BVVRIT1JJWkVELCAnQ3JlZGVudGlhbHMgYXJlIGluY29ycmVjdCcpO1xuICAgICAgICBpZiAoIXVzZXIuZW1haWxWZXJpZmllZCkgdGhpcy5jb250ZXh0LnRocm93KEZPUkJJRERFTiwgJ1VudmVyaWZpZWQnKTtcbiAgICAgICAgaWYgKHVzZXIuaXNMb2NrZWQpIHRoaXMuY29udGV4dC50aHJvdyhGT1JCSURERU4sICdMb2NrZWQnKTtcbiAgICAgICAgLy8gY29uc3QgaGFzaCA9IGNyeXB0by5wYmtkZjJTeW5jKHRoaXMuY29udGV4dC5yZXF1ZXN0LmJvZHkucGFzc3dvcmQsIHVzZXIuc2FsdCwgMTAwMDAsIDY0LCBIQVNIX0RJR0VTVCkudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAvLyBpZiAoaGFzaCA9PSB1c2VyLnBhc3N3b3JkSGFzaCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGFwcFN0YXRlOiBudWxsLFxuICAgICAgICAgIGF1dGhlbnRpY2F0b3I6ICdhdXRoZW50aWNhdG9yOnNlbGYtaG9zdGVkJyxcbiAgICAgICAgICBleHBpcmVzSW46IDM2MDAwMDAsXG4gICAgICAgICAgaWRUb2tlbjogbnVsbCxcbiAgICAgICAgICBpZFRva2VuUGF5bG9hZDogbnVsbCxcbiAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGVtYWlsX3ZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBuaWNrbmFtZTogdXNlci5uaWNrbmFtZSxcbiAgICAgICAgICAgIHBpY3R1cmU6IHVzZXIucGljdHVyZSxcbiAgICAgICAgICAgIHN1YjogdXNlci5zdWIsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiB1c2VyLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWZyZXNoVG9rZW46IG51bGwsXG4gICAgICAgICAgc2NvcGU6ICdvcGVuaWQgZW1haWwgcHJvZmlsZScsXG4gICAgICAgICAgc3RhdGU6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGVybWlzc2lvbnMgPSB1c2VyLnBlcm1pc3Npb25zIHx8IFtdO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRTY29wZXMgPSB0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5LnNjb3BlIHx8IHRoaXMuY29udGV4dC5xdWVyeS5zY29wZTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTY29wZXMgPSByZXF1ZXN0ZWRTY29wZXMuc3BsaXQoJyAnKS5maWx0ZXIoKHgpID0+XG4gICAgICAgICAgeC5pbmNsdWRlcygnOicpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWxsU2NvcGVzID0gZmlsdGVyZWRTY29wZXMuY29uY2F0KHBlcm1pc3Npb25zKTtcblxuICAgICAgICAvLyB1c2VyIGJyb2FkY2FzdCBwdWJsaXNoXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgcHVibGlzaCByZXF1ZXN0XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBzdWJzY3JpYmUgb24gcmVzcG9zZVxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgc3Vic2NyaWJlIG9uIGFueVxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgcmVzIHF1ZXVlc1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL3VzZXJfcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIGJyb2FkY2FzdCBxdWV1ZXNcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBzdWJzY3JpcHRpb24gcXVldWVzXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvdXNlcl9zdWIuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG5cbiAgICAgICAgZGF0YS5zY29wZSA9IGFsbFNjb3Blcy5qb2luKCcgJyk7XG5cbiAgICAgICAgY29uc3QgYWRtaW5TY29wZXMgPSBbXTtcbiAgICAgICAgaWYgKHVzZXIuaXNBZG1pbikge1xuICAgICAgICAgIC8vIGJyb2FkY2FzdCBwdWJsaXNoXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHB1Ymxpc2ggcmVxdWVzdFxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXEuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHN1YnNjcmliZSBvbiByZXNwb3NlXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gc3Vic2NyaWJlIG9uIGFueVxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgICAvLyByZXMgcXVldWVzXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gYnJvYWRjYXN0IHF1ZXVlc1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBxdWV1ZXNcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLnNjb3BlID09IG51bGwpIGRhdGEuc2NvcGUgPSAnJztcblxuICAgICAgICBkYXRhLnNjb3BlICs9ICcgJyArIGFkbWluU2NvcGVzLmpvaW4oJyAnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUFJJVkFURV9LRVlcXG4nLCBQUklWQVRFX0tFWSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oZGF0YSwgeyBrZXk6IFBSSVZBVEVfS0VZIH0sIHtcbiAgICAgICAgICBhbGdvcml0aG06IFRPS0VOX0FMR09SSVRITSxcbiAgICAgICAgICBrZXlpZDogS0VZSUQsXG4gICAgICAgICAgYXVkaWVuY2U6IFsnYXBpJ10sXG4gICAgICAgICAgc3ViamVjdDogdXNlci5zdWIsXG4gICAgICAgICAgaXNzdWVyOiBJU1NVRVIsXG4gICAgICAgICAgZXhwaXJlc0luOiA3MjAwXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLmFjY2Vzc190b2tlbiA9IHRva2VuO1xuXG4gICAgICAgIGNvbnN0IG5ld1Nlc3Npb24gPSB7XG4gICAgICAgICAgdWlkOiB1c2VyLmlkLFxuICAgICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBkYXRhLmV4cGlyZXNJbilcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gYXdhaXQgdGhpcy5fc2Vzc2lvbnMuY3JlYXRlKG5ld1Nlc3Npb24pO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZSxcbiAgICAgICAgICBzZXNzaW9uQ29va2llVFRMLFxuICAgICAgICAgIGNvb2tpZURvbWFpbixcbiAgICAgICAgfSA9IHRoaXMuY29uZmlncztcbiAgICAgICAgY29uc3QgZG9tYWluID0gLyguKmxvY2FsaG9zdC4qKXwoLioxMjdcXC4wXFwuMFxcLjEuKikvLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgICAgPyB0aGlzLmNvbnRleHQuaG9zdG5hbWVcbiAgICAgICAgICA6IG5ldyBSZWdFeHAoXCIuKiN7Y29va2llRG9tYWlufS4qXCIpLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgICAgICA/IGNvb2tpZURvbWFpblxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgdGhpcy5zZXNzaW9uLmlkLCB7XG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgbWF4QWdlOiBOdW1iZXIoc2Vzc2lvbkNvb2tpZVRUTCkgKiAxMDAwLFxuICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY29va2llRXhwaXJlZEF0ID0gRGF0ZS5ub3coKSArIE51bWJlcihzZXNzaW9uQ29va2llVFRMKSAqIDEwMDBcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KGAke3Nlc3Npb25Db29raWV9RXhwaXJlZEF0YCwgY29va2llRXhwaXJlZEF0LCB7XG4gICAgICAgICAgbWF4QWdlOiBOdW1iZXIoc2Vzc2lvbkNvb2tpZVRUTCkgKiAxMDAwLFxuICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSBPSztcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=