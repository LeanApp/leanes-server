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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SESSIONS,
    Resource,
    ConfigurableMixin,
    BodyParseMixin,
    CheckSchemaVersionResourceMixin,
    CheckSessionsMixin,
    initialize,
    partOf,
    meta,
    method,
    property,
    nameBy,
    mixin,
    inject,
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
    this.initialHook('checkSchemaVersion');
    this.initialHook('parseBody', {
      only: ['create', 'update', 'signup', 'authorize']
    });
    this.initialHook('checkSession', {
      only: ['signout']
    });
  }), _dec3 = partOf(Module), _dec4 = mixin(CheckSessionsMixin), _dec5 = mixin(CheckSchemaVersionResourceMixin), _dec6 = mixin(BodyParseMixin), _dec7 = mixin(ConfigurableMixin), _dec8 = _flowRuntime.default.decorate(function () {
    return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_UsersResourceTypeParametersSymbol].D))));
  }), _dec9 = inject(`Factory<${SESSIONS}>`), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = (_class2 = (_temp = (_t$TypeParametersSymb = _flowRuntime.default.TypeParametersSymbol, _class3 = class UsersResource extends Resource {
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "entityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "entityName"), _class2.prototype), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_sessionsFactory", [_dec8, _dec9, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_sessions", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_sessions"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signup", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signup"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signout", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signout"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "authorize", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "authorize"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9Vc2Vyc1Jlc291cmNlLmpzIl0sIm5hbWVzIjpbIk9SSUdJTlMiLCJIQVNIX0RJR0VTVCIsIklURVJBVElPTlMiLCJUT0tFTl9BTEdPUklUSE0iLCJLRVlJRCIsIklTU1VFUiIsIkFVVE9fTE9DS0lORyIsIlJFR0lTVFJBVElPTl9JU19BTExPV0VEIiwiUFVCTElDX0tFWSIsIlBSSVZBVEVfS0VZIiwiU0VDUkVUIiwiREVGQVVMVF9VU0VSUyIsInByb2Nlc3MiLCJlbnYiLCJNb2R1bGUiLCJTRVNTSU9OUyIsIlJlc291cmNlIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJCb2R5UGFyc2VNaXhpbiIsIkNoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4iLCJDaGVja1Nlc3Npb25zTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm1ldGhvZCIsInByb3BlcnR5IiwibmFtZUJ5IiwibWl4aW4iLCJpbmplY3QiLCJVdGlscyIsIl8iLCJzdGF0dXNlcyIsIk5TIiwiT0siLCJDUkVBVEVEIiwiTk9fQ09OVEVOVCIsIlVOQVVUSE9SSVpFRCIsIkZPUkJJRERFTiIsIlVzZXJzUmVzb3VyY2UiLCJjaGFpbnMiLCJpbml0aWFsSG9vayIsIm9ubHkiLCJlbnRpdHlOYW1lIiwiX3Nlc3Npb25zIiwiX3Nlc3Npb25zRmFjdG9yeSIsInNpZ251cCIsInBheWxvYWQiLCJwaWNrIiwiY29udGV4dCIsInJlcXVlc3QiLCJib2R5IiwibmV3VXNlciIsImNvbGxlY3Rpb24iLCJjcmVhdGUiLCJzdGF0dXMiLCJ0aHJvdyIsInNpZ25vdXQiLCJzZXNzaW9uQ29va2llIiwiY29va2llRG9tYWluIiwiY29uZmlncyIsInNlc3Npb24iLCJ1aWQiLCJkZXN0cm95IiwiZG9tYWluIiwib2xkRG9tYWluIiwidGVzdCIsImdldCIsImhvc3RuYW1lIiwiUmVnRXhwIiwiY29va2llcyIsInNldCIsImh0dHBPbmx5IiwieWVzIiwibWF4QWdlIiwiYXV0aG9yaXplIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXIiLCJmaW5kQnkiLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJ2ZXJpZnlQYXNzd29yZCIsImVtYWlsVmVyaWZpZWQiLCJpc0xvY2tlZCIsImRhdGEiLCJhcHBTdGF0ZSIsImF1dGhlbnRpY2F0b3IiLCJleHBpcmVzSW4iLCJpZFRva2VuIiwiaWRUb2tlblBheWxvYWQiLCJwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiLCJuYW1lIiwibmlja25hbWUiLCJwaWN0dXJlIiwic3ViIiwidXBkYXRlZF9hdCIsInVwZGF0ZWRBdCIsInRvSVNPU3RyaW5nIiwicmVmcmVzaFRva2VuIiwic2NvcGUiLCJzdGF0ZSIsInBlcm1pc3Npb25zIiwicmVxdWVzdGVkU2NvcGVzIiwicXVlcnkiLCJmaWx0ZXJlZFNjb3BlcyIsInNwbGl0IiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwiYWxsU2NvcGVzIiwiY29uY2F0IiwicHVzaCIsImpvaW4iLCJhZG1pblNjb3BlcyIsImlzQWRtaW4iLCJ0b2tlbiIsImp3dCIsInNpZ24iLCJrZXkiLCJhbGdvcml0aG0iLCJrZXlpZCIsImF1ZGllbmNlIiwic3ViamVjdCIsImlzc3VlciIsImFjY2Vzc190b2tlbiIsIm5ld1Nlc3Npb24iLCJpZCIsImV4cGlyZXMiLCJEYXRlIiwibm93Iiwic2Vzc2lvbkNvb2tpZVRUTCIsIk51bWJlciIsImNvb2tpZUV4cGlyZWRBdCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7QUFFQTs7OztBQWxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQU9BLE1BQU07QUFDSkEsRUFBQUEsT0FESTtBQUNLQyxFQUFBQSxXQURMO0FBQ2tCQyxFQUFBQSxVQURsQjtBQUM4QkMsRUFBQUEsZUFEOUI7QUFDK0NDLEVBQUFBLEtBRC9DO0FBQ3NEQyxF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Ly8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgUmVjb3JkSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9SZWNvcmRJbnRlcmZhY2UnO1xuXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmNvbnN0IHtcbiAgT1JJR0lOUywgSEFTSF9ESUdFU1QsIElURVJBVElPTlMsIFRPS0VOX0FMR09SSVRITSwgS0VZSUQsIElTU1VFUiwgQVVUT19MT0NLSU5HLCBSRUdJU1RSQVRJT05fSVNfQUxMT1dFRCxcbiAgUFVCTElDX0tFWSwgUFJJVkFURV9LRVksIFNFQ1JFVCwgREVGQVVMVF9VU0VSU1xufSA9IHByb2Nlc3MuZW52O1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTRVNTSU9OUyxcbiAgICBSZXNvdXJjZSxcbiAgICBDb25maWd1cmFibGVNaXhpbiwgQm9keVBhcnNlTWl4aW4sXG4gICAgQ2hlY2tTY2hlbWFWZXJzaW9uUmVzb3VyY2VNaXhpbixcbiAgICBDaGVja1Nlc3Npb25zTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIHByb3BlcnR5LCBuYW1lQnksIG1peGluLCBpbmplY3QsXG4gICAgVXRpbHM6IHsgXywgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IE9LID0gc3RhdHVzZXMoJ09LJyk7XG4gIGNvbnN0IENSRUFURUQgPSBzdGF0dXNlcygnY3JlYXRlZCcpO1xuICBjb25zdCBOT19DT05URU5UID0gc3RhdHVzZXMoJ25vIGNvbnRlbnQnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBGT1JCSURERU4gPSBzdGF0dXNlcygnZm9yYmlkZGVuJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQGNoYWlucyhbXG4gICAgJ2xpc3QnLCAnZGV0YWlsJywgJ2NyZWF0ZScsICd1cGRhdGUnLCAnc2lnbnVwJywgJ3NpZ25vdXQnLCAnYXV0aG9yaXplJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tTY2hlbWFWZXJzaW9uJyk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygncGFyc2VCb2R5Jywge1xuICAgICAgb25seTogWydjcmVhdGUnLCAndXBkYXRlJywgJ3NpZ251cCcsICdhdXRob3JpemUnXVxuICAgIH0pO1xuICAgIHRoaXMuaW5pdGlhbEhvb2soJ2NoZWNrU2Vzc2lvbicsIHtcbiAgICAgIG9ubHk6IFsnc2lnbm91dCddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ2hlY2tTZXNzaW9uc01peGluKVxuICBAbWl4aW4oQ2hlY2tTY2hlbWFWZXJzaW9uUmVzb3VyY2VNaXhpbilcbiAgQG1peGluKEJvZHlQYXJzZU1peGluKVxuICBAbWl4aW4oQ29uZmlndXJhYmxlTWl4aW4pXG4gIGNsYXNzIFVzZXJzUmVzb3VyY2U8IEQgPSBSZWNvcmRJbnRlcmZhY2UgPiBleHRlbmRzIFJlc291cmNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IGdldCBlbnRpdHlOYW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ3VzZXInO1xuICAgIH1cblxuICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtTRVNTSU9OU30+YClcbiAgICBAcHJvcGVydHkgX3Nlc3Npb25zRmFjdG9yeTogKCkgPT4gQ29sbGVjdGlvbkludGVyZmFjZTxEPjtcbiAgICBAcHJvcGVydHkgZ2V0IF9zZXNzaW9ucygpOiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+IHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uc0ZhY3RvcnkoKVxuICAgIH1cblxuICAgIEBhY3Rpb24gYXN5bmMgc2lnbnVwKCkge1xuICAgICAgaWYoUkVHSVNUUkFUSU9OX0lTX0FMTE9XRUQgPT0gJ3llcycpe1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gXy5waWNrKHRoaXMuY29udGV4dC5yZXF1ZXN0LmJvZHksIFsnZW1haWwnLCAncGFzc3dvcmQnXSk7XG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKHBheWxvYWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gQ1JFQVRFRDtcbiAgICAgICAgcmV0dXJuIG5ld1VzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQudGhyb3coRk9SQklEREVOKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAYWN0aW9uIGFzeW5jIHNpZ25vdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNlc3Npb25Db29raWUsXG4gICAgICAgIGNvb2tpZURvbWFpblxuICAgICAgfSA9IHRoaXMuY29uZmlncztcbiAgICAgIGlmICh0aGlzLnNlc3Npb24gIT0gbnVsbCAmJiB0aGlzLnNlc3Npb24udWlkICE9IG51bGwpXG4gICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICBjb25zdCBbZG9tYWluLCBvbGREb21haW5dID0gLyguKmxvY2FsaG9zdC4qKXwoLioxMjdcXC4wXFwuMFxcLjEuKikvLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgID8gW3RoaXMuY29udGV4dC5ob3N0bmFtZSwgbnVsbF1cbiAgICAgICAgOiBuZXcgUmVnRXhwKFwiLioje2Nvb2tpZURvbWFpbn0uKlwiKS50ZXN0KHRoaXMuY29udGV4dC5nZXQoJ29yaWdpbicpIHx8IHRoaXMuY29udGV4dC5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpKVxuICAgICAgICAgID8gW2Nvb2tpZURvbWFpbiwgXCJhcGkuI3tjb29raWVEb21haW59XCJdXG4gICAgICAgICAgOiBbbnVsbCwgbnVsbF07XG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgJycsIHtcbiAgICAgICAgaHR0cE9ubHk6IHllcyxcbiAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoYCR7c2Vzc2lvbkNvb2tpZX1FeHBpcmVkQXRgLCAnJywge1xuICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgfSlcbiAgICAgIGlmIChvbGREb21haW4gIT0gbnVsbClcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KHNlc3Npb25Db29raWUsICcnLCB7XG4gICAgICAgICAgaHR0cE9ubHk6IHllcyxcbiAgICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgICAgZG9tYWluOiBvbGREb21haW4sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChgJHtzZXNzaW9uQ29va2llfUV4cGlyZWRBdGAsICcnLCB7XG4gICAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgICAgIGRvbWFpbjogb2xkRG9tYWluLFxuICAgICAgICB9KVxuICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KHNlc3Npb25Db29raWUsICcnLCB7XG4gICAgICAgIGh0dHBPbmx5OiB5ZXMsXG4gICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoYCR7c2Vzc2lvbkNvb2tpZX1FeHBpcmVkQXRgLCAnJywge21heEFnZTogMTAwMH0pXG4gICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gTk9fQ09OVEVOVDtcbiAgICB9XG5cbiAgICBAYWN0aW9uIGFzeW5jIGF1dGhvcml6ZSgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcm5hbWUsIHBhc3N3b3JkLFxuICAgICAgfSA9IHRoaXMuY29udGV4dC5yZXF1ZXN0LmJvZHk7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5jb2xsZWN0aW9uLmZpbmRCeSh7ZW1haWw6IHVzZXJuYW1lfSk7XG4gICAgICBpZiAodXNlciA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50aHJvdyhVTkFVVEhPUklaRUQsICdDcmVkZW50aWFscyBhcmUgaW5jb3JyZWN0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XG4gICAgICAgIGlmICghdXNlci52ZXJpZnlQYXNzd29yZChwYXNzd29yZCkpIHRoaXMuY29udGV4dC50aHJvdyhVTkFVVEhPUklaRUQsICdDcmVkZW50aWFscyBhcmUgaW5jb3JyZWN0Jyk7XG4gICAgICAgIGlmICghdXNlci5lbWFpbFZlcmlmaWVkKSB0aGlzLmNvbnRleHQudGhyb3coRk9SQklEREVOLCAnVW52ZXJpZmllZCcpO1xuICAgICAgICBpZiAodXNlci5pc0xvY2tlZCkgdGhpcy5jb250ZXh0LnRocm93KEZPUkJJRERFTiwgJ0xvY2tlZCcpO1xuICAgICAgICAvLyBjb25zdCBoYXNoID0gY3J5cHRvLnBia2RmMlN5bmModGhpcy5jb250ZXh0LnJlcXVlc3QuYm9keS5wYXNzd29yZCwgdXNlci5zYWx0LCAxMDAwMCwgNjQsIEhBU0hfRElHRVNUKS50b1N0cmluZygnaGV4Jyk7XG4gICAgICAgIC8vIGlmIChoYXNoID09IHVzZXIucGFzc3dvcmRIYXNoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgYXBwU3RhdGU6IG51bGwsXG4gICAgICAgICAgYXV0aGVudGljYXRvcjogJ2F1dGhlbnRpY2F0b3I6c2VsZi1ob3N0ZWQnLFxuICAgICAgICAgIGV4cGlyZXNJbjogMzYwMDAwMCxcbiAgICAgICAgICBpZFRva2VuOiBudWxsLFxuICAgICAgICAgIGlkVG9rZW5QYXlsb2FkOiBudWxsLFxuICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIG5pY2tuYW1lOiB1c2VyLm5pY2tuYW1lLFxuICAgICAgICAgICAgcGljdHVyZTogdXNlci5waWN0dXJlLFxuICAgICAgICAgICAgc3ViOiB1c2VyLnN1YixcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHVzZXIudXBkYXRlZEF0LnRvSVNPU3RyaW5nKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZnJlc2hUb2tlbjogbnVsbCxcbiAgICAgICAgICBzY29wZTogJ29wZW5pZCBlbWFpbCBwcm9maWxlJyxcbiAgICAgICAgICBzdGF0ZTogJydcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHVzZXIucGVybWlzc2lvbnMgfHwgW107XG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZFNjb3BlcyA9IHRoaXMuY29udGV4dC5yZXF1ZXN0LmJvZHkuc2NvcGUgfHwgdGhpcy5jb250ZXh0LnF1ZXJ5LnNjb3BlO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFNjb3BlcyA9IHJlcXVlc3RlZFNjb3Blcy5zcGxpdCgnICcpLmZpbHRlcigoeCkgPT5cbiAgICAgICAgICB4LmluY2x1ZGVzKCc6JylcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBhbGxTY29wZXMgPSBmaWx0ZXJlZFNjb3Blcy5jb25jYXQocGVybWlzc2lvbnMpO1xuXG4gICAgICAgIC8vIHVzZXIgYnJvYWRjYXN0IHB1Ymxpc2hcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBwdWJsaXNoIHJlcXVlc3RcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvdXNlcl9yZXEuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvdXNlcl9yZXEuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIHN1YnNjcmliZSBvbiByZXNwb3NlXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBzdWJzY3JpYmUgb24gYW55XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfc3ViLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL3VzZXJfc3ViLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciByZXMgcXVldWVzXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgYnJvYWRjYXN0IHF1ZXVlc1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL3VzZXJfYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL3VzZXJfYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIHN1YnNjcmlwdGlvbiBxdWV1ZXNcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL3VzZXJfc3ViLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL3VzZXJfc3ViLiR7dXNlci5zdWJ9LipgKTtcblxuICAgICAgICBkYXRhLnNjb3BlID0gYWxsU2NvcGVzLmpvaW4oJyAnKTtcblxuICAgICAgICBjb25zdCBhZG1pblNjb3BlcyA9IFtdO1xuICAgICAgICBpZiAodXNlci5pc0FkbWluKSB7XG4gICAgICAgICAgLy8gYnJvYWRjYXN0IHB1Ymxpc2hcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL2FkbWluX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gcHVibGlzaCByZXF1ZXN0XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXEuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX3JlcS4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gc3Vic2NyaWJlIG9uIHJlc3Bvc2VcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICAvLyBzdWJzY3JpYmUgb24gYW55XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9zdWIuKi4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIC8vIHJlcyBxdWV1ZXNcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYWRtaW5fcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvYWRtaW5fcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICAvLyBicm9hZGNhc3QgcXVldWVzXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FkbWluX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FkbWluX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gc3Vic2NyaXB0aW9uIHF1ZXVlc1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hZG1pbl9zdWIuKi4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hZG1pbl9zdWIuKi4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuc2NvcGUgPT0gbnVsbCkgZGF0YS5zY29wZSA9ICcnO1xuXG4gICAgICAgIGRhdGEuc2NvcGUgKz0gJyAnICsgYWRtaW5TY29wZXMuam9pbignICcpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdQUklWQVRFX0tFWVxcbicsIFBSSVZBVEVfS0VZKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihkYXRhLCB7IGtleTogUFJJVkFURV9LRVkgfSwge1xuICAgICAgICAgIGFsZ29yaXRobTogVE9LRU5fQUxHT1JJVEhNLFxuICAgICAgICAgIGtleWlkOiBLRVlJRCxcbiAgICAgICAgICBhdWRpZW5jZTogWydhcGknXSxcbiAgICAgICAgICBzdWJqZWN0OiB1c2VyLnN1YixcbiAgICAgICAgICBpc3N1ZXI6IElTU1VFUixcbiAgICAgICAgICBleHBpcmVzSW46IDcyMDBcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGEuYWNjZXNzX3Rva2VuID0gdG9rZW47XG5cbiAgICAgICAgY29uc3QgbmV3U2Vzc2lvbiA9IHtcbiAgICAgICAgICB1aWQ6IHVzZXIuaWQsXG4gICAgICAgICAgZXhwaXJlczogbmV3IERhdGUoRGF0ZS5ub3coKSArIGRhdGEuZXhwaXJlc0luKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBhd2FpdCB0aGlzLl9zZXNzaW9ucy5jcmVhdGUobmV3U2Vzc2lvbik7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzZXNzaW9uQ29va2llLFxuICAgICAgICAgIHNlc3Npb25Db29raWVUVEwsXG4gICAgICAgICAgY29va2llRG9tYWluLFxuICAgICAgICB9ID0gdGhpcy5jb25maWdzO1xuICAgICAgICBjb25zdCBkb21haW4gPSAvKC4qbG9jYWxob3N0LiopfCguKjEyN1xcLjBcXC4wXFwuMS4qKS8udGVzdCh0aGlzLmNvbnRleHQuZ2V0KCdvcmlnaW4nKSB8fCB0aGlzLmNvbnRleHQuZ2V0KCdYLUZvcndhcmRlZC1Gb3InKSlcbiAgICAgICAgICA/IHRoaXMuY29udGV4dC5ob3N0bmFtZVxuICAgICAgICAgIDogbmV3IFJlZ0V4cChcIi4qI3tjb29raWVEb21haW59LipcIikudGVzdCh0aGlzLmNvbnRleHQuZ2V0KCdvcmlnaW4nKSB8fCB0aGlzLmNvbnRleHQuZ2V0KCdYLUZvcndhcmRlZC1Gb3InKSlcbiAgICAgICAgICAgID8gY29va2llRG9tYWluXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChzZXNzaW9uQ29va2llLCB0aGlzLnNlc3Npb24uaWQsIHtcbiAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICBtYXhBZ2U6IE51bWJlcihzZXNzaW9uQ29va2llVFRMKSAqIDEwMDAsXG4gICAgICAgICAgZG9tYWluLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjb29raWVFeHBpcmVkQXQgPSBEYXRlLm5vdygpICsgTnVtYmVyKHNlc3Npb25Db29raWVUVEwpICogMTAwMFxuICAgICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoYCR7c2Vzc2lvbkNvb2tpZX1FeHBpcmVkQXRgLCBjb29raWVFeHBpcmVkQXQsIHtcbiAgICAgICAgICBtYXhBZ2U6IE51bWJlcihzZXNzaW9uQ29va2llVFRMKSAqIDEwMDAsXG4gICAgICAgICAgZG9tYWluLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0YXR1cyA9IE9LO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==