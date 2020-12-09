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
        "@doc.email": username
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9Vc2Vyc1Jlc291cmNlLmpzIl0sIm5hbWVzIjpbIk9SSUdJTlMiLCJIQVNIX0RJR0VTVCIsIklURVJBVElPTlMiLCJUT0tFTl9BTEdPUklUSE0iLCJLRVlJRCIsIklTU1VFUiIsIkFVVE9fTE9DS0lORyIsIlJFR0lTVFJBVElPTl9JU19BTExPV0VEIiwiUFVCTElDX0tFWSIsIlBSSVZBVEVfS0VZIiwiU0VDUkVUIiwiREVGQVVMVF9VU0VSUyIsInByb2Nlc3MiLCJlbnYiLCJNb2R1bGUiLCJTRVNTSU9OUyIsIlJlc291cmNlIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJCb2R5UGFyc2VNaXhpbiIsIkNoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4iLCJDaGVja0FwaVZlcnNpb25SZXNvdXJjZU1peGluIiwiQ2hlY2tTZXNzaW9uc01peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsIm1peGluIiwiaW5qZWN0IiwiY2hhaW5zIiwiYWN0aW9uIiwiVXRpbHMiLCJfIiwic3RhdHVzZXMiLCJOUyIsIk9LIiwiQ1JFQVRFRCIsIk5PX0NPTlRFTlQiLCJVTkFVVEhPUklaRUQiLCJGT1JCSURERU4iLCJVc2Vyc1Jlc291cmNlIiwiaW5pdGlhbEhvb2siLCJvbmx5IiwiZW50aXR5TmFtZSIsIl9zZXNzaW9ucyIsIl9zZXNzaW9uc0ZhY3RvcnkiLCJzaWdudXAiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInBpY2siLCJjb250ZXh0IiwicmVxdWVzdCIsImJvZHkiLCJuZXdVc2VyIiwiY29sbGVjdGlvbiIsImNyZWF0ZSIsInN0YXR1cyIsInRocm93Iiwic2lnbm91dCIsInNlc3Npb25Db29raWUiLCJjb29raWVEb21haW4iLCJjb25maWdzIiwic2Vzc2lvbiIsInVpZCIsImRlc3Ryb3kiLCJkb21haW4iLCJvbGREb21haW4iLCJ0ZXN0IiwiZ2V0IiwiaG9zdG5hbWUiLCJSZWdFeHAiLCJjb29raWVzIiwic2V0IiwiaHR0cE9ubHkiLCJ5ZXMiLCJtYXhBZ2UiLCJhdXRob3JpemUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsImZpbmRCeSIsInZlcmlmeVBhc3N3b3JkIiwiZW1haWxWZXJpZmllZCIsImlzTG9ja2VkIiwiZGF0YSIsImFwcFN0YXRlIiwiYXV0aGVudGljYXRvciIsImV4cGlyZXNJbiIsImlkVG9rZW4iLCJpZFRva2VuUGF5bG9hZCIsInByb2ZpbGUiLCJlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIiwibmFtZSIsIm5pY2tuYW1lIiwicGljdHVyZSIsInN1YiIsInVwZGF0ZWRfYXQiLCJ1cGRhdGVkQXQiLCJ0b0lTT1N0cmluZyIsInJlZnJlc2hUb2tlbiIsInNjb3BlIiwic3RhdGUiLCJwZXJtaXNzaW9ucyIsInJlcXVlc3RlZFNjb3BlcyIsInF1ZXJ5IiwiZmlsdGVyZWRTY29wZXMiLCJzcGxpdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImFsbFNjb3BlcyIsImNvbmNhdCIsInB1c2giLCJqb2luIiwiYWRtaW5TY29wZXMiLCJpc0FkbWluIiwidG9rZW4iLCJqd3QiLCJzaWduIiwia2V5IiwiYWxnb3JpdGhtIiwia2V5aWQiLCJhdWRpZW5jZSIsInN1YmplY3QiLCJpc3N1ZXIiLCJhY2Nlc3NfdG9rZW4iLCJuZXdTZXNzaW9uIiwiaWQiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsInNlc3Npb25Db29raWVUVEwiLCJOdW1iZXIiLCJjb29raWVFeHBpcmVkQXQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7O0FBRUE7Ozs7QUFsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFPQSxNQUFNO0FBQ0pBLEVBQUFBLE9BREk7QUFDS0MsRUFBQUEsV0FETDtBQUNrQkMsRUFBQUEsVUFEbEI7QUFDOEJDLEVBQUFBLGVBRDlCO0FBQytD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QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUF1Q3RCRixJQXZDc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRkF5Q3RCQyxRQXpDc0Isc01BOEN0QkEsUUE5Q3NCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUErQ3RCQSxRQS9Dc0IsOEpBbUR0QkssTUFuRHNCLDRKQStEdEJBLE1BL0RzQiwrSkF1R3RCQSxNQXZHc0I7QUFzUDFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBSZWNvcmRJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZSc7XG5cbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3Qge1xuICBPUklHSU5TLCBIQVNIX0RJR0VTVCwgSVRFUkFUSU9OUywgVE9LRU5fQUxHT1JJVEhNLCBLRVlJRCwgSVNTVUVSLCBBVVRPX0xPQ0tJTkcsIFJFR0lTVFJBVElPTl9JU19BTExPV0VELFxuICBQVUJMSUNfS0VZLCBQUklWQVRFX0tFWSwgU0VDUkVULCBERUZBVUxUX1VTRVJTXG59ID0gcHJvY2Vzcy5lbnY7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNFU1NJT05TLFxuICAgIFJlc291cmNlLFxuICAgIENvbmZpZ3VyYWJsZU1peGluLCBCb2R5UGFyc2VNaXhpbixcbiAgICBDaGVja1NjaGVtYVZlcnNpb25SZXNvdXJjZU1peGluLFxuICAgIENoZWNrQXBpVmVyc2lvblJlc291cmNlTWl4aW4sXG4gICAgQ2hlY2tTZXNzaW9uc01peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG5hbWVCeSwgbWl4aW4sIGluamVjdCwgY2hhaW5zLCBhY3Rpb24sXG4gICAgVXRpbHM6IHsgXywgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IE9LID0gc3RhdHVzZXMoJ09LJyk7XG4gIGNvbnN0IENSRUFURUQgPSBzdGF0dXNlcygnY3JlYXRlZCcpO1xuICBjb25zdCBOT19DT05URU5UID0gc3RhdHVzZXMoJ25vIGNvbnRlbnQnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBGT1JCSURERU4gPSBzdGF0dXNlcygnZm9yYmlkZGVuJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQGNoYWlucyhbXG4gICAgJ2xpc3QnLCAnZGV0YWlsJywgJ2NyZWF0ZScsICd1cGRhdGUnLCAnc2lnbnVwJywgJ3NpZ25vdXQnLCAnYXV0aG9yaXplJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tBcGlWZXJzaW9uJyk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tTY2hlbWFWZXJzaW9uJyk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygncGFyc2VCb2R5Jywge1xuICAgICAgb25seTogWydjcmVhdGUnLCAndXBkYXRlJywgJ3NpZ251cCcsICdhdXRob3JpemUnXVxuICAgIH0pO1xuICAgIHRoaXMuaW5pdGlhbEhvb2soJ2NoZWNrU2Vzc2lvbicsIHtcbiAgICAgIG9ubHk6IFsnc2lnbm91dCddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ2hlY2tTZXNzaW9uc01peGluKVxuICBAbWl4aW4oQ2hlY2tTY2hlbWFWZXJzaW9uUmVzb3VyY2VNaXhpbilcbiAgQG1peGluKENoZWNrQXBpVmVyc2lvblJlc291cmNlTWl4aW4pXG4gIEBtaXhpbihCb2R5UGFyc2VNaXhpbilcbiAgQG1peGluKENvbmZpZ3VyYWJsZU1peGluKVxuICBjbGFzcyBVc2Vyc1Jlc291cmNlPCBEID0gUmVjb3JkSW50ZXJmYWNlID4gZXh0ZW5kcyBSZXNvdXJjZSB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBnZXQgZW50aXR5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICd1c2VyJztcbiAgICB9XG5cbiAgICBAaW5qZWN0KGBGYWN0b3J5PCR7U0VTU0lPTlN9PmApXG4gICAgQHByb3BlcnR5IF9zZXNzaW9uc0ZhY3Rvcnk6ICgpID0+IENvbGxlY3Rpb25JbnRlcmZhY2U8RD47XG4gICAgQHByb3BlcnR5IGdldCBfc2Vzc2lvbnMoKTogQ29sbGVjdGlvbkludGVyZmFjZTxEPiB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbnNGYWN0b3J5KClcbiAgICB9XG5cbiAgICBAYWN0aW9uIGFzeW5jIHNpZ251cCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzaWdudXAnKTtcbiAgICAgIGlmKFJFR0lTVFJBVElPTl9JU19BTExPV0VEID09ICd5ZXMnKXtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IF8ucGljayh0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5LCBbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10pO1xuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgdGhpcy5jb2xsZWN0aW9uLmNyZWF0ZShwYXlsb2FkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0YXR1cyA9IENSRUFURUQ7XG4gICAgICAgIHJldHVybiBuZXdVc2VyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRocm93KEZPUkJJRERFTik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBzaWdub3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc29sZS5sb2coJ3NpZ25vdXQnKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2Vzc2lvbkNvb2tpZSxcbiAgICAgICAgY29va2llRG9tYWluXG4gICAgICB9ID0gdGhpcy5jb25maWdzO1xuICAgICAgaWYgKHRoaXMuc2Vzc2lvbiAhPSBudWxsICYmIHRoaXMuc2Vzc2lvbi51aWQgIT0gbnVsbClcbiAgICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IFtkb21haW4sIG9sZERvbWFpbl0gPSAvKC4qbG9jYWxob3N0LiopfCguKjEyN1xcLjBcXC4wXFwuMS4qKS8udGVzdCh0aGlzLmNvbnRleHQuZ2V0KCdvcmlnaW4nKSB8fCB0aGlzLmNvbnRleHQuZ2V0KCdYLUZvcndhcmRlZC1Gb3InKSlcbiAgICAgICAgPyBbdGhpcy5jb250ZXh0Lmhvc3RuYW1lLCBudWxsXVxuICAgICAgICA6IG5ldyBSZWdFeHAoXCIuKiN7Y29va2llRG9tYWlufS4qXCIpLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgICAgPyBbY29va2llRG9tYWluLCBcImFwaS4je2Nvb2tpZURvbWFpbn1cIl1cbiAgICAgICAgICA6IFtudWxsLCBudWxsXTtcbiAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChzZXNzaW9uQ29va2llLCAnJywge1xuICAgICAgICBodHRwT25seTogeWVzLFxuICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChgJHtzZXNzaW9uQ29va2llfUV4cGlyZWRBdGAsICcnLCB7XG4gICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICB9KVxuICAgICAgaWYgKG9sZERvbWFpbiAhPSBudWxsKVxuICAgICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgJycsIHtcbiAgICAgICAgICBodHRwT25seTogeWVzLFxuICAgICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgICAgICBkb21haW46IG9sZERvbWFpbixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KGAke3Nlc3Npb25Db29raWV9RXhwaXJlZEF0YCwgJycsIHtcbiAgICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgICAgZG9tYWluOiBvbGREb21haW4sXG4gICAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgJycsIHtcbiAgICAgICAgaHR0cE9ubHk6IHllcyxcbiAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChgJHtzZXNzaW9uQ29va2llfUV4cGlyZWRBdGAsICcnLCB7bWF4QWdlOiAxMDAwfSlcbiAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSBOT19DT05URU5UO1xuICAgIH1cblxuICAgIEBhY3Rpb24gYXN5bmMgYXV0aG9yaXplKCkge1xuICAgICAgY29uc29sZS5sb2coJ2F1dGhvcml6ZScpO1xuICAgICAgY29uc3Qge1xuICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmQsXG4gICAgICB9ID0gdGhpcy5jb250ZXh0LnJlcXVlc3QuYm9keTtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmNvbGxlY3Rpb24uZmluZEJ5KHtcIkBkb2MuZW1haWxcIjogdXNlcm5hbWV9KTtcbiAgICAgIGlmICh1c2VyID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRocm93KFVOQVVUSE9SSVpFRCwgJ0NyZWRlbnRpYWxzIGFyZSBpbmNvcnJlY3QnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcbiAgICAgICAgaWYgKCF1c2VyLnZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkKSkgdGhpcy5jb250ZXh0LnRocm93KFVOQVVUSE9SSVpFRCwgJ0NyZWRlbnRpYWxzIGFyZSBpbmNvcnJlY3QnKTtcbiAgICAgICAgaWYgKCF1c2VyLmVtYWlsVmVyaWZpZWQpIHRoaXMuY29udGV4dC50aHJvdyhGT1JCSURERU4sICdVbnZlcmlmaWVkJyk7XG4gICAgICAgIGlmICh1c2VyLmlzTG9ja2VkKSB0aGlzLmNvbnRleHQudGhyb3coRk9SQklEREVOLCAnTG9ja2VkJyk7XG4gICAgICAgIC8vIGNvbnN0IGhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyh0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5LnBhc3N3b3JkLCB1c2VyLnNhbHQsIDEwMDAwLCA2NCwgSEFTSF9ESUdFU1QpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgICAgLy8gaWYgKGhhc2ggPT0gdXNlci5wYXNzd29yZEhhc2gpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBhcHBTdGF0ZTogbnVsbCxcbiAgICAgICAgICBhdXRoZW50aWNhdG9yOiAnYXV0aGVudGljYXRvcjpzZWxmLWhvc3RlZCcsXG4gICAgICAgICAgZXhwaXJlc0luOiAzNjAwMDAwLFxuICAgICAgICAgIGlkVG9rZW46IG51bGwsXG4gICAgICAgICAgaWRUb2tlblBheWxvYWQ6IG51bGwsXG4gICAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBlbWFpbF92ZXJpZmllZDogdXNlci5lbWFpbFZlcmlmaWVkLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgbmlja25hbWU6IHVzZXIubmlja25hbWUsXG4gICAgICAgICAgICBwaWN0dXJlOiB1c2VyLnBpY3R1cmUsXG4gICAgICAgICAgICBzdWI6IHVzZXIuc3ViLFxuICAgICAgICAgICAgdXBkYXRlZF9hdDogdXNlci51cGRhdGVkQXQudG9JU09TdHJpbmcoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiBudWxsLFxuICAgICAgICAgIHNjb3BlOiAnb3BlbmlkIGVtYWlsIHByb2ZpbGUnLFxuICAgICAgICAgIHN0YXRlOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdXNlci5wZXJtaXNzaW9ucyB8fCBbXTtcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkU2NvcGVzID0gdGhpcy5jb250ZXh0LnJlcXVlc3QuYm9keS5zY29wZSB8fCB0aGlzLmNvbnRleHQucXVlcnkuc2NvcGU7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkU2NvcGVzID0gcmVxdWVzdGVkU2NvcGVzLnNwbGl0KCcgJykuZmlsdGVyKCh4KSA9PlxuICAgICAgICAgIHguaW5jbHVkZXMoJzonKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGFsbFNjb3BlcyA9IGZpbHRlcmVkU2NvcGVzLmNvbmNhdChwZXJtaXNzaW9ucyk7XG5cbiAgICAgICAgLy8gdXNlciBicm9hZGNhc3QgcHVibGlzaFxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL3VzZXJfYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIHB1Ymxpc2ggcmVxdWVzdFxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX3JlcS4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX3JlcS4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgc3Vic2NyaWJlIG9uIHJlc3Bvc2VcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIHN1YnNjcmliZSBvbiBhbnlcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvdXNlcl9zdWIuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvdXNlcl9zdWIuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIHJlcyBxdWV1ZXNcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL3VzZXJfcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL3VzZXJfcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBicm9hZGNhc3QgcXVldWVzXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL3VzZXJfYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgc3Vic2NyaXB0aW9uIHF1ZXVlc1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL3VzZXJfc3ViLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvdXNlcl9zdWIuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvdXNlcl9zdWIuJHt1c2VyLnN1Yn0uKmApO1xuXG4gICAgICAgIGRhdGEuc2NvcGUgPSBhbGxTY29wZXMuam9pbignICcpO1xuXG4gICAgICAgIGNvbnN0IGFkbWluU2NvcGVzID0gW107XG4gICAgICAgIGlmICh1c2VyLmlzQWRtaW4pIHtcbiAgICAgICAgICAvLyBicm9hZGNhc3QgcHVibGlzaFxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICAvLyBwdWJsaXNoIHJlcXVlc3RcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL2FkbWluX3JlcS4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICAvLyBzdWJzY3JpYmUgb24gcmVzcG9zZVxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHN1YnNjcmliZSBvbiBhbnlcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9zdWIuKi4qYCk7XG4gICAgICAgICAgLy8gcmVzIHF1ZXVlc1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYWRtaW5fcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIGJyb2FkY2FzdCBxdWV1ZXNcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL2FkbWluX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICAvLyBzdWJzY3JpcHRpb24gcXVldWVzXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS9hZG1pbl9zdWIuKi4qYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5zY29wZSA9PSBudWxsKSBkYXRhLnNjb3BlID0gJyc7XG5cbiAgICAgICAgZGF0YS5zY29wZSArPSAnICcgKyBhZG1pblNjb3Blcy5qb2luKCcgJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1BSSVZBVEVfS0VZXFxuJywgUFJJVkFURV9LRVkpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKGRhdGEsIHsga2V5OiBQUklWQVRFX0tFWSB9LCB7XG4gICAgICAgICAgYWxnb3JpdGhtOiBUT0tFTl9BTEdPUklUSE0sXG4gICAgICAgICAga2V5aWQ6IEtFWUlELFxuICAgICAgICAgIGF1ZGllbmNlOiBbJ2FwaSddLFxuICAgICAgICAgIHN1YmplY3Q6IHVzZXIuc3ViLFxuICAgICAgICAgIGlzc3VlcjogSVNTVUVSLFxuICAgICAgICAgIGV4cGlyZXNJbjogNzIwMFxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YS5hY2Nlc3NfdG9rZW4gPSB0b2tlbjtcblxuICAgICAgICBjb25zdCBuZXdTZXNzaW9uID0ge1xuICAgICAgICAgIHVpZDogdXNlci5pZCxcbiAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgZGF0YS5leHBpcmVzSW4pXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IGF3YWl0IHRoaXMuX3Nlc3Npb25zLmNyZWF0ZShuZXdTZXNzaW9uKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHNlc3Npb25Db29raWUsXG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZVRUTCxcbiAgICAgICAgICBjb29raWVEb21haW4sXG4gICAgICAgIH0gPSB0aGlzLmNvbmZpZ3M7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IC8oLipsb2NhbGhvc3QuKil8KC4qMTI3XFwuMFxcLjBcXC4xLiopLy50ZXN0KHRoaXMuY29udGV4dC5nZXQoJ29yaWdpbicpIHx8IHRoaXMuY29udGV4dC5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpKVxuICAgICAgICAgID8gdGhpcy5jb250ZXh0Lmhvc3RuYW1lXG4gICAgICAgICAgOiBuZXcgUmVnRXhwKFwiLioje2Nvb2tpZURvbWFpbn0uKlwiKS50ZXN0KHRoaXMuY29udGV4dC5nZXQoJ29yaWdpbicpIHx8IHRoaXMuY29udGV4dC5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpKVxuICAgICAgICAgICAgPyBjb29raWVEb21haW5cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KHNlc3Npb25Db29raWUsIHRoaXMuc2Vzc2lvbi5pZCwge1xuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgIG1heEFnZTogTnVtYmVyKHNlc3Npb25Db29raWVUVEwpICogMTAwMCxcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGNvb2tpZUV4cGlyZWRBdCA9IERhdGUubm93KCkgKyBOdW1iZXIoc2Vzc2lvbkNvb2tpZVRUTCkgKiAxMDAwXG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChgJHtzZXNzaW9uQ29va2llfUV4cGlyZWRBdGAsIGNvb2tpZUV4cGlyZWRBdCwge1xuICAgICAgICAgIG1heEFnZTogTnVtYmVyKHNlc3Npb25Db29raWVUVEwpICogMTAwMCxcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gT0s7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19