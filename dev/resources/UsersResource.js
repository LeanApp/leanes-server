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

var _coBody = _interopRequireDefault(require("co-body"));

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
  TOKEN_ALGORITHM,
  KEYID,
  ISSUER,
  REGISTRATION_IS_ALLOWED,
  PUBLIC_KEY,
  PRIVATE_KEY
} = process.env;

var _default = Module => {
  let _t$TypeParametersSymb;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SESSIONS,
    Resource,
    ConfigurableMixin,
    BodyParseMixin,
    CheckSchemaVersionResourceMixin,
    CheckApiVersionResourceMixin,
    CheckSessionsMixin,
    QueryableResourceMixin,
    initialize,
    partOf,
    meta,
    property,
    nameBy,
    mixin,
    inject,
    chains,
    action,
    method,
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
    return [_flowRuntime.default.extends(Resource), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("entityName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.property("_sessionsFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("_sessions", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.method("signup"), _flowRuntime.default.method("signout", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("parseBody", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("authorize")];
  })), _dec2 = chains(['list', 'detail', 'create', 'update', 'signup', 'signout', 'authorize'], function () {
    this.initialHook('checkApiVersion');
    this.initialHook('checkSchemaVersion');
    this.initialHook('parseBody', {
      only: ['create', 'update', 'signup', 'authorize']
    });
    this.initialHook('checkSession', {
      only: ['signout']
    });
  }), _dec3 = partOf(Module), _dec4 = mixin(QueryableResourceMixin), _dec5 = mixin(CheckSessionsMixin), _dec6 = mixin(CheckSchemaVersionResourceMixin), _dec7 = mixin(CheckApiVersionResourceMixin), _dec8 = mixin(BodyParseMixin), _dec9 = mixin(ConfigurableMixin), _dec10 = _flowRuntime.default.decorate(function () {
    return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_UsersResourceTypeParametersSymbol].D))));
  }), _dec11 = inject(`Factory<${SESSIONS}>`), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_class2 = (_temp = (_t$TypeParametersSymb = _flowRuntime.default.TypeParametersSymbol, _class3 = class UsersResource extends Resource {
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

    async parseBody(...args) {
      const {
        parsed,
        raw
      } = await (0, _coBody.default)(this.context._req, {
        returnRawBody: this.withRawBody
      });
      console.log('??????????/parseBody', parsed);
      this.context.request.body = parsed;
      this.context.request.raw = raw;
      return args;
    }

    async authorize() {
      console.log('authorize', this.context.request.body);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "entityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "entityName"), _class2.prototype), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_sessionsFactory", [_dec10, _dec11, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_sessions", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_sessions"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signup", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signup"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signout", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signout"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "parseBody", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "parseBody"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "authorize", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "authorize"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9Vc2Vyc1Jlc291cmNlLmpzIl0sIm5hbWVzIjpbIlRPS0VOX0FMR09SSVRITSIsIktFWUlEIiwiSVNTVUVSIiwiUkVHSVNUUkFUSU9OX0lTX0FMTE9XRUQiLCJQVUJMSUNfS0VZIiwiUFJJVkFURV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTW9kdWxlIiwiU0VTU0lPTlMiLCJSZXNvdXJjZSIsIkNvbmZpZ3VyYWJsZU1peGluIiwiQm9keVBhcnNlTWl4aW4iLCJDaGVja1NjaGVtYVZlcnNpb25SZXNvdXJjZU1peGluIiwiQ2hlY2tBcGlWZXJzaW9uUmVzb3VyY2VNaXhpbiIsIkNoZWNrU2Vzc2lvbnNNaXhpbiIsIlF1ZXJ5YWJsZVJlc291cmNlTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibmFtZUJ5IiwibWl4aW4iLCJpbmplY3QiLCJjaGFpbnMiLCJhY3Rpb24iLCJtZXRob2QiLCJVdGlscyIsIl8iLCJzdGF0dXNlcyIsIk5TIiwiT0siLCJDUkVBVEVEIiwiTk9fQ09OVEVOVCIsIlVOQVVUSE9SSVpFRCIsIkZPUkJJRERFTiIsIlVzZXJzUmVzb3VyY2UiLCJpbml0aWFsSG9vayIsIm9ubHkiLCJlbnRpdHlOYW1lIiwiX3Nlc3Npb25zIiwiX3Nlc3Npb25zRmFjdG9yeSIsInNpZ251cCIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwicGljayIsImNvbnRleHQiLCJyZXF1ZXN0IiwiYm9keSIsIm5ld1VzZXIiLCJjb2xsZWN0aW9uIiwiY3JlYXRlIiwic3RhdHVzIiwidGhyb3ciLCJzaWdub3V0Iiwic2Vzc2lvbkNvb2tpZSIsImNvb2tpZURvbWFpbiIsImNvbmZpZ3MiLCJzZXNzaW9uIiwidWlkIiwiZGVzdHJveSIsImRvbWFpbiIsIm9sZERvbWFpbiIsInRlc3QiLCJnZXQiLCJob3N0bmFtZSIsIlJlZ0V4cCIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSIsInllcyIsIm1heEFnZSIsInBhcnNlQm9keSIsImFyZ3MiLCJwYXJzZWQiLCJyYXciLCJfcmVxIiwicmV0dXJuUmF3Qm9keSIsIndpdGhSYXdCb2R5IiwiYXV0aG9yaXplIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXIiLCJmaW5kQnkiLCJ2ZXJpZnlQYXNzd29yZCIsImVtYWlsVmVyaWZpZWQiLCJpc0xvY2tlZCIsImRhdGEiLCJhcHBTdGF0ZSIsImF1dGhlbnRpY2F0b3IiLCJleHBpcmVzSW4iLCJpZFRva2VuIiwiaWRUb2tlblBheWxvYWQiLCJwcm9maWxlIiwiZW1haWwiLCJlbWFpbF92ZXJpZmllZCIsIm5hbWUiLCJuaWNrbmFtZSIsInBpY3R1cmUiLCJzdWIiLCJ1cGRhdGVkX2F0IiwidXBkYXRlZEF0IiwidG9JU09TdHJpbmciLCJyZWZyZXNoVG9rZW4iLCJzY29wZSIsInN0YXRlIiwicGVybWlzc2lvbnMiLCJyZXF1ZXN0ZWRTY29wZXMiLCJxdWVyeSIsImZpbHRlcmVkU2NvcGVzIiwic3BsaXQiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJhbGxTY29wZXMiLCJjb25jYXQiLCJwdXNoIiwiam9pbiIsImFkbWluU2NvcGVzIiwiaXNBZG1pbiIsInRva2VuIiwiand0Iiwic2lnbiIsImtleSIsImFsZ29yaXRobSIsImtleWlkIiwiYXVkaWVuY2UiLCJzdWJqZWN0IiwiaXNzdWVyIiwiYWNjZXNzX3Rva2VuIiwibmV3U2Vzc2lvbiIsImlkIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJzZXNzaW9uQ29va2llVFRMIiwiTnVtYmVyIiwiY29va2llRXhwaXJlZEF0IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBU0EsTUFBTTtBQUNKQSxFQUFBQSxlQURJO0FBQ2FDLEVBQUFBLEtBRGI7QUFDb0JDLEVB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RSxlQUFlLEdBQUdKLElBQUksQ0FBQ0MsR0FBTCxLQUFhRSxNQUFNLENBQUNELGdCQUFELENBQU4sR0FBMkIsSUFBaEU7QUFDQSxhQUFLekYsT0FBTCxDQUFhcUIsT0FBYixDQUFxQkMsR0FBckIsQ0FBMEIsR0FBRWIsYUFBYyxXQUExQyxFQUFzRGtGLGVBQXRELEVBQXVFO0FBQ3JFbEUsVUFBQUEsTUFBTSxFQUFFaUUsTUFBTSxDQUFDRCxnQkFBRCxDQUFOLEdBQTJCLElBRGtDO0FBRXJFMUUsVUFBQUE7QUFGcUUsU0FBdkU7QUFJQSxhQUFLZixPQUFMLENBQWFNLE1BQWIsR0FBc0J0QixFQUF0QjtBQUNBLGVBQU95RCxJQUFQO0FBQ0Q7QUFDRjs7QUF2TnlELEdBdkNuQyxnRkF3Q1BtRCxVQXhDTyxHQXdDTUEsVUF4Q04sVUF5Q1ZDLE1BekNVLEdBeUNELEVBekNDLDJFQXdDdEJ2SCxNQXhDc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUF5Q3RCRixJQXpDc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRkEyQ3RCQyxRQTNDc0IsdU1BZ0R0QkEsUUFoRHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFpRHRCQSxRQWpEc0IsOEpBcUR0QkssTUFyRHNCLDRKQWlFdEJBLE1BakVzQiwrSkF5R3RCQyxNQXpHc0IsaUtBaUh0QkQsTUFqSHNCO0FBZ1ExQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgUmVjb3JkSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9SZWNvcmRJbnRlcmZhY2UnO1xuXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmltcG9ydCBwYXJzZSBmcm9tICdjby1ib2R5JztcblxuY29uc3Qge1xuICBUT0tFTl9BTEdPUklUSE0sIEtFWUlELCBJU1NVRVIsIFJFR0lTVFJBVElPTl9JU19BTExPV0VELFxuICBQVUJMSUNfS0VZLCBQUklWQVRFX0tFWSxcbn0gPSBwcm9jZXNzLmVudjtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU0VTU0lPTlMsXG4gICAgUmVzb3VyY2UsXG4gICAgQ29uZmlndXJhYmxlTWl4aW4sIEJvZHlQYXJzZU1peGluLFxuICAgIENoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4sXG4gICAgQ2hlY2tBcGlWZXJzaW9uUmVzb3VyY2VNaXhpbixcbiAgICBDaGVja1Nlc3Npb25zTWl4aW4sXG4gICAgUXVlcnlhYmxlUmVzb3VyY2VNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBuYW1lQnksIG1peGluLCBpbmplY3QsIGNoYWlucywgYWN0aW9uLCBtZXRob2QsXG4gICAgVXRpbHM6IHsgXywgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IE9LID0gc3RhdHVzZXMoJ09LJyk7XG4gIGNvbnN0IENSRUFURUQgPSBzdGF0dXNlcygnY3JlYXRlZCcpO1xuICBjb25zdCBOT19DT05URU5UID0gc3RhdHVzZXMoJ25vIGNvbnRlbnQnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBGT1JCSURERU4gPSBzdGF0dXNlcygnZm9yYmlkZGVuJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQGNoYWlucyhbXG4gICAgJ2xpc3QnLCAnZGV0YWlsJywgJ2NyZWF0ZScsICd1cGRhdGUnLCAnc2lnbnVwJywgJ3NpZ25vdXQnLCAnYXV0aG9yaXplJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tBcGlWZXJzaW9uJyk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tTY2hlbWFWZXJzaW9uJyk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygncGFyc2VCb2R5Jywge1xuICAgICAgb25seTogWydjcmVhdGUnLCAndXBkYXRlJywgJ3NpZ251cCcsICdhdXRob3JpemUnXVxuICAgIH0pO1xuICAgIHRoaXMuaW5pdGlhbEhvb2soJ2NoZWNrU2Vzc2lvbicsIHtcbiAgICAgIG9ubHk6IFsnc2lnbm91dCddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oUXVlcnlhYmxlUmVzb3VyY2VNaXhpbilcbiAgQG1peGluKENoZWNrU2Vzc2lvbnNNaXhpbilcbiAgQG1peGluKENoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4pXG4gIEBtaXhpbihDaGVja0FwaVZlcnNpb25SZXNvdXJjZU1peGluKVxuICBAbWl4aW4oQm9keVBhcnNlTWl4aW4pXG4gIEBtaXhpbihDb25maWd1cmFibGVNaXhpbilcbiAgY2xhc3MgVXNlcnNSZXNvdXJjZTwgRCA9IFJlY29yZEludGVyZmFjZSA+IGV4dGVuZHMgUmVzb3VyY2Uge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IGVudGl0eU5hbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAndXNlcic7XG4gICAgfVxuXG4gICAgQGluamVjdChgRmFjdG9yeTwke1NFU1NJT05TfT5gKVxuICAgIEBwcm9wZXJ0eSBfc2Vzc2lvbnNGYWN0b3J5OiAoKSA9PiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+O1xuICAgIEBwcm9wZXJ0eSBnZXQgX3Nlc3Npb25zKCk6IENvbGxlY3Rpb25JbnRlcmZhY2U8RD4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25zRmFjdG9yeSgpXG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBzaWdudXAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2lnbnVwJyk7XG4gICAgICBpZihSRUdJU1RSQVRJT05fSVNfQUxMT1dFRCA9PSAneWVzJyl7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBfLnBpY2sodGhpcy5jb250ZXh0LnJlcXVlc3QuYm9keSwgWydlbWFpbCcsICdwYXNzd29yZCddKTtcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IHRoaXMuY29sbGVjdGlvbi5jcmVhdGUocGF5bG9hZCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSBDUkVBVEVEO1xuICAgICAgICByZXR1cm4gbmV3VXNlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50aHJvdyhGT1JCSURERU4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBhY3Rpb24gYXN5bmMgc2lnbm91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzaWdub3V0Jyk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNlc3Npb25Db29raWUsXG4gICAgICAgIGNvb2tpZURvbWFpblxuICAgICAgfSA9IHRoaXMuY29uZmlncztcbiAgICAgIGlmICh0aGlzLnNlc3Npb24gIT0gbnVsbCAmJiB0aGlzLnNlc3Npb24udWlkICE9IG51bGwpXG4gICAgICAgIGF3YWl0IHRoaXMuc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICBjb25zdCBbZG9tYWluLCBvbGREb21haW5dID0gLyguKmxvY2FsaG9zdC4qKXwoLioxMjdcXC4wXFwuMFxcLjEuKikvLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgID8gW3RoaXMuY29udGV4dC5ob3N0bmFtZSwgbnVsbF1cbiAgICAgICAgOiBuZXcgUmVnRXhwKFwiLioje2Nvb2tpZURvbWFpbn0uKlwiKS50ZXN0KHRoaXMuY29udGV4dC5nZXQoJ29yaWdpbicpIHx8IHRoaXMuY29udGV4dC5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpKVxuICAgICAgICAgID8gW2Nvb2tpZURvbWFpbiwgXCJhcGkuI3tjb29raWVEb21haW59XCJdXG4gICAgICAgICAgOiBbbnVsbCwgbnVsbF07XG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgJycsIHtcbiAgICAgICAgaHR0cE9ubHk6IHllcyxcbiAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoYCR7c2Vzc2lvbkNvb2tpZX1FeHBpcmVkQXRgLCAnJywge1xuICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgfSlcbiAgICAgIGlmIChvbGREb21haW4gIT0gbnVsbClcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KHNlc3Npb25Db29raWUsICcnLCB7XG4gICAgICAgICAgaHR0cE9ubHk6IHllcyxcbiAgICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgICAgZG9tYWluOiBvbGREb21haW4sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChgJHtzZXNzaW9uQ29va2llfUV4cGlyZWRBdGAsICcnLCB7XG4gICAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgICAgIGRvbWFpbjogb2xkRG9tYWluLFxuICAgICAgICB9KVxuICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KHNlc3Npb25Db29raWUsICcnLCB7XG4gICAgICAgIGh0dHBPbmx5OiB5ZXMsXG4gICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoYCR7c2Vzc2lvbkNvb2tpZX1FeHBpcmVkQXRgLCAnJywge21heEFnZTogMTAwMH0pXG4gICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gTk9fQ09OVEVOVDtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIHBhcnNlQm9keSguLi5hcmdzKSB7XG4gICAgICBjb25zdCB7IHBhcnNlZCwgcmF3IH0gPSBhd2FpdCBwYXJzZSh0aGlzLmNvbnRleHQuX3JlcSwge3JldHVyblJhd0JvZHk6IHRoaXMud2l0aFJhd0JvZHl9KTtcbiAgICAgIGNvbnNvbGUubG9nKCc/Pz8/Pz8/Pz8/L3BhcnNlQm9keScsIHBhcnNlZCk7XG4gICAgICB0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5ID0gcGFyc2VkO1xuICAgICAgdGhpcy5jb250ZXh0LnJlcXVlc3QucmF3ID0gcmF3O1xuICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBhdXRob3JpemUoKSB7XG4gICAgICBjb25zb2xlLmxvZygnYXV0aG9yaXplJywgdGhpcy5jb250ZXh0LnJlcXVlc3QuYm9keSk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHVzZXJuYW1lLCBwYXNzd29yZCxcbiAgICAgIH0gPSB0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5O1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuY29sbGVjdGlvbi5maW5kQnkoe1wiQGRvYy5lbWFpbFwiOiB1c2VybmFtZX0pO1xuICAgICAgaWYgKHVzZXIgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQudGhyb3coVU5BVVRIT1JJWkVELCAnQ3JlZGVudGlhbHMgYXJlIGluY29ycmVjdCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuICAgICAgICBpZiAoIXVzZXIudmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQpKSB0aGlzLmNvbnRleHQudGhyb3coVU5BVVRIT1JJWkVELCAnQ3JlZGVudGlhbHMgYXJlIGluY29ycmVjdCcpO1xuICAgICAgICBpZiAoIXVzZXIuZW1haWxWZXJpZmllZCkgdGhpcy5jb250ZXh0LnRocm93KEZPUkJJRERFTiwgJ1VudmVyaWZpZWQnKTtcbiAgICAgICAgaWYgKHVzZXIuaXNMb2NrZWQpIHRoaXMuY29udGV4dC50aHJvdyhGT1JCSURERU4sICdMb2NrZWQnKTtcbiAgICAgICAgLy8gY29uc3QgaGFzaCA9IGNyeXB0by5wYmtkZjJTeW5jKHRoaXMuY29udGV4dC5yZXF1ZXN0LmJvZHkucGFzc3dvcmQsIHVzZXIuc2FsdCwgMTAwMDAsIDY0LCBIQVNIX0RJR0VTVCkudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAvLyBpZiAoaGFzaCA9PSB1c2VyLnBhc3N3b3JkSGFzaCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGFwcFN0YXRlOiBudWxsLFxuICAgICAgICAgIGF1dGhlbnRpY2F0b3I6ICdhdXRoZW50aWNhdG9yOnNlbGYtaG9zdGVkJyxcbiAgICAgICAgICBleHBpcmVzSW46IDM2MDAwMDAsXG4gICAgICAgICAgaWRUb2tlbjogbnVsbCxcbiAgICAgICAgICBpZFRva2VuUGF5bG9hZDogbnVsbCxcbiAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGVtYWlsX3ZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBuaWNrbmFtZTogdXNlci5uaWNrbmFtZSxcbiAgICAgICAgICAgIHBpY3R1cmU6IHVzZXIucGljdHVyZSxcbiAgICAgICAgICAgIHN1YjogdXNlci5zdWIsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiB1c2VyLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWZyZXNoVG9rZW46IG51bGwsXG4gICAgICAgICAgc2NvcGU6ICdvcGVuaWQgZW1haWwgcHJvZmlsZScsXG4gICAgICAgICAgc3RhdGU6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGVybWlzc2lvbnMgPSB1c2VyLnBlcm1pc3Npb25zIHx8IFtdO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRTY29wZXMgPSB0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5LnNjb3BlIHx8IHRoaXMuY29udGV4dC5xdWVyeS5zY29wZTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTY29wZXMgPSByZXF1ZXN0ZWRTY29wZXMuc3BsaXQoJyAnKS5maWx0ZXIoKHgpID0+XG4gICAgICAgICAgeC5pbmNsdWRlcygnOicpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWxsU2NvcGVzID0gZmlsdGVyZWRTY29wZXMuY29uY2F0KHBlcm1pc3Npb25zKTtcblxuICAgICAgICAvLyB1c2VyIGJyb2FkY2FzdCBwdWJsaXNoXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgcHVibGlzaCByZXF1ZXN0XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBzdWJzY3JpYmUgb24gcmVzcG9zZVxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgc3Vic2NyaWJlIG9uIGFueVxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgcmVzIHF1ZXVlc1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL3VzZXJfcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIGJyb2FkY2FzdCBxdWV1ZXNcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBzdWJzY3JpcHRpb24gcXVldWVzXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvdXNlcl9zdWIuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG5cbiAgICAgICAgZGF0YS5zY29wZSA9IGFsbFNjb3Blcy5qb2luKCcgJyk7XG5cbiAgICAgICAgY29uc3QgYWRtaW5TY29wZXMgPSBbXTtcbiAgICAgICAgaWYgKHVzZXIuaXNBZG1pbikge1xuICAgICAgICAgIC8vIGJyb2FkY2FzdCBwdWJsaXNoXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHB1Ymxpc2ggcmVxdWVzdFxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXEuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHN1YnNjcmliZSBvbiByZXNwb3NlXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gc3Vic2NyaWJlIG9uIGFueVxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgICAvLyByZXMgcXVldWVzXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gYnJvYWRjYXN0IHF1ZXVlc1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBxdWV1ZXNcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLnNjb3BlID09IG51bGwpIGRhdGEuc2NvcGUgPSAnJztcblxuICAgICAgICBkYXRhLnNjb3BlICs9ICcgJyArIGFkbWluU2NvcGVzLmpvaW4oJyAnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUFJJVkFURV9LRVlcXG4nLCBQUklWQVRFX0tFWSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oZGF0YSwgeyBrZXk6IFBSSVZBVEVfS0VZIH0sIHtcbiAgICAgICAgICBhbGdvcml0aG06IFRPS0VOX0FMR09SSVRITSxcbiAgICAgICAgICBrZXlpZDogS0VZSUQsXG4gICAgICAgICAgYXVkaWVuY2U6IFsnYXBpJ10sXG4gICAgICAgICAgc3ViamVjdDogdXNlci5zdWIsXG4gICAgICAgICAgaXNzdWVyOiBJU1NVRVIsXG4gICAgICAgICAgZXhwaXJlc0luOiA3MjAwXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLmFjY2Vzc190b2tlbiA9IHRva2VuO1xuXG4gICAgICAgIGNvbnN0IG5ld1Nlc3Npb24gPSB7XG4gICAgICAgICAgdWlkOiB1c2VyLmlkLFxuICAgICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBkYXRhLmV4cGlyZXNJbilcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gYXdhaXQgdGhpcy5fc2Vzc2lvbnMuY3JlYXRlKG5ld1Nlc3Npb24pO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZSxcbiAgICAgICAgICBzZXNzaW9uQ29va2llVFRMLFxuICAgICAgICAgIGNvb2tpZURvbWFpbixcbiAgICAgICAgfSA9IHRoaXMuY29uZmlncztcbiAgICAgICAgY29uc3QgZG9tYWluID0gLyguKmxvY2FsaG9zdC4qKXwoLioxMjdcXC4wXFwuMFxcLjEuKikvLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgICAgPyB0aGlzLmNvbnRleHQuaG9zdG5hbWVcbiAgICAgICAgICA6IG5ldyBSZWdFeHAoXCIuKiN7Y29va2llRG9tYWlufS4qXCIpLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgICAgICA/IGNvb2tpZURvbWFpblxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgdGhpcy5zZXNzaW9uLmlkLCB7XG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgbWF4QWdlOiBOdW1iZXIoc2Vzc2lvbkNvb2tpZVRUTCkgKiAxMDAwLFxuICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY29va2llRXhwaXJlZEF0ID0gRGF0ZS5ub3coKSArIE51bWJlcihzZXNzaW9uQ29va2llVFRMKSAqIDEwMDBcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KGAke3Nlc3Npb25Db29raWV9RXhwaXJlZEF0YCwgY29va2llRXhwaXJlZEF0LCB7XG4gICAgICAgICAgbWF4QWdlOiBOdW1iZXIoc2Vzc2lvbkNvb2tpZVRUTCkgKiAxMDAwLFxuICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdGF0dXMgPSBPSztcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=