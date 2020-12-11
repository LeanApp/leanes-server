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
    NON_RENDERABLE,
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
    return [_flowRuntime.default.extends(Resource), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("entityName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.property("_sessionsFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("_sessions", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.method("signup", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.typeOf(NON_RENDERABLE)))), _flowRuntime.default.method("create", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.ref("object")))), _flowRuntime.default.method("signout", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("authorize")];
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
      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType4.assert('user');
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
      const _returnType5 = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_UsersResourceTypeParametersSymbol].D));

      return _returnType5.assert(this._sessionsFactory());
    }

    async signup() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.typeOf(NON_RENDERABLE), _flowRuntime.default.ref("Promise", _flowRuntime.default.typeOf(NON_RENDERABLE))));

      console.log('signup');

      if (REGISTRATION_IS_ALLOWED == 'yes') {
        const payload = _.pick(this.context.request.body, ['email', 'password']);

        const newUser = await this.collection.build(payload);
        newUser.password = payload.password;
        this.context.status = CREATED;
        return _returnType.assert(NON_RENDERABLE);
      } else {
        this.context.throw(FORBIDDEN);
      }
    }

    async create() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.ref("object"), _flowRuntime.default.ref("Promise", _flowRuntime.default.ref("object"))));

      if (this.collection != null) {
        const newUser = await this.collection.build(this.recordBody);
        newUser.password = this.recordBody.password;
        return _returnType2.assert(await newUser.save());
      } else {
        return _returnType2.assert({});
      }
    }

    async signout() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      console.log('signout');
      const {
        sessionCookie,
        cookieDomain
      } = this.configs;
      if (this.session != null && this.session.uid != null) await this.session.destroy();
      const [domain, oldDomain] = /(.*localhost.*)|(.*127\.0\.0\.1.*)/.test(this.context.get('origin') || this.context.get('X-Forwarded-For')) ? [this.context.hostname, null] : new RegExp(".*#{cookieDomain}.*").test(this.context.get('origin') || this.context.get('X-Forwarded-For')) ? [cookieDomain, "api.#{cookieDomain}"] : [null, null];

      if (domain != null) {
        this.context.cookies.set(sessionCookie, '', {
          httpOnly: true,
          maxAge: 1000,
          domain: domain
        });
        this.context.cookies.set(`${sessionCookie}ExpiredAt`, '', {
          maxAge: 1000,
          domain: domain
        });
      }

      if (oldDomain != null) {
        this.context.cookies.set(sessionCookie, '', {
          httpOnly: true,
          maxAge: 1000,
          domain: oldDomain
        });
        this.context.cookies.set(`${sessionCookie}ExpiredAt`, '', {
          maxAge: 1000,
          domain: oldDomain
        });
      }

      this.context.cookies.set(sessionCookie, '', {
        httpOnly: true,
        maxAge: 1000
      });
      this.context.cookies.set(`${sessionCookie}ExpiredAt`, '', {
        maxAge: 1000
      });
      this.context.status = NO_CONTENT;
    }

    async authorize() {
      console.log('authorize', this.context.request.body);
      const {
        username,
        password
      } = this.context.request.body;
      const user = await (await this.collection.findBy({
        "@doc.email": username
      })).first();

      if (user == null) {
        this.context.throw(UNAUTHORIZED, 'Credentials are incorrect');
      } else {
        if (!user.verifyPassword(password)) this.context.throw(UNAUTHORIZED, 'Credentials are incorrect');
        if (!user.emailVerified) this.context.throw(FORBIDDEN, 'Unverified');
        if (user.isLocked) this.context.throw(FORBIDDEN, 'Locked');
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
        const requestedScopes = this.context.request.body.scope || this.context.query.scope || '';
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
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_sessions", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_sessions"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signup", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signup"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "create", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "create"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "signout", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "signout"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "authorize", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "authorize"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9Vc2Vyc1Jlc291cmNlLmpzIl0sIm5hbWVzIjpbIlRPS0VOX0FMR09SSVRITSIsIktFWUlEIiwiSVNTVUVSIiwiUkVHSVNUUkFUSU9OX0lTX0FMTE9XRUQiLCJQVUJMSUNfS0VZIiwiUFJJVkFURV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTW9kdWxlIiwiU0VTU0lPTlMiLCJOT05fUkVOREVSQUJMRSIsIlJlc291cmNlIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJCb2R5UGFyc2VNaXhpbiIsIkNoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4iLCJDaGVja0FwaVZlcnNpb25SZXNvdXJjZU1peGluIiwiQ2hlY2tTZXNzaW9uc01peGluIiwiUXVlcnlhYmxlUmVzb3VyY2VNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwicHJvcGVydHkiLCJuYW1lQnkiLCJtaXhpbiIsImluamVjdCIsImNoYWlucyIsImFjdGlvbiIsIm1ldGhvZCIsIlV0aWxzIiwiXyIsInN0YXR1c2VzIiwiTlMiLCJPSyIsIkNSRUFURUQiLCJOT19DT05URU5UIiwiVU5BVVRIT1JJWkVEIiwiRk9SQklEREVOIiwiVXNlcnNSZXNvdXJjZSIsImluaXRpYWxIb29rIiwib25seSIsImVudGl0eU5hbWUiLCJfc2Vzc2lvbnMiLCJfc2Vzc2lvbnNGYWN0b3J5Iiwic2lnbnVwIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJwaWNrIiwiY29udGV4dCIsInJlcXVlc3QiLCJib2R5IiwibmV3VXNlciIsImNvbGxlY3Rpb24iLCJidWlsZCIsInBhc3N3b3JkIiwic3RhdHVzIiwidGhyb3ciLCJjcmVhdGUiLCJyZWNvcmRCb2R5Iiwic2F2ZSIsInNpZ25vdXQiLCJzZXNzaW9uQ29va2llIiwiY29va2llRG9tYWluIiwiY29uZmlncyIsInNlc3Npb24iLCJ1aWQiLCJkZXN0cm95IiwiZG9tYWluIiwib2xkRG9tYWluIiwidGVzdCIsImdldCIsImhvc3RuYW1lIiwiUmVnRXhwIiwiY29va2llcyIsInNldCIsImh0dHBPbmx5IiwibWF4QWdlIiwiYXV0aG9yaXplIiwidXNlcm5hbWUiLCJ1c2VyIiwiZmluZEJ5IiwiZmlyc3QiLCJ2ZXJpZnlQYXNzd29yZCIsImVtYWlsVmVyaWZpZWQiLCJpc0xvY2tlZCIsImRhdGEiLCJhcHBTdGF0ZSIsImF1dGhlbnRpY2F0b3IiLCJleHBpcmVzSW4iLCJpZFRva2VuIiwiaWRUb2tlblBheWxvYWQiLCJwcm9maWxlIiwiZW1haWwiLCJlbWFpbF92ZXJpZmllZCIsIm5hbWUiLCJuaWNrbmFtZSIsInBpY3R1cmUiLCJzdWIiLCJ1cGRhdGVkX2F0IiwidXBkYXRlZEF0IiwidG9JU09TdHJpbmciLCJyZWZyZXNoVG9rZW4iLCJzY29wZSIsInN0YXRlIiwicGVybWlzc2lvbnMiLCJyZXF1ZXN0ZWRTY29wZXMiLCJxdWVyeSIsImZpbHRlcmVkU2NvcGVzIiwic3BsaXQiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJhbGxTY29wZXMiLCJjb25jYXQiLCJwdXNoIiwiam9pbiIsImFkbWluU2NvcGVzIiwiaXNBZG1pbiIsInRva2VuIiwiand0Iiwic2lnbiIsImtleSIsImFsZ29yaXRobSIsImtleWlkIiwiYXVkaWVuY2UiLCJzdWJqZWN0IiwiaXNzdWVyIiwiYWNjZXNzX3Rva2VuIiwibmV3U2Vzc2lvbiIsImlkIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJzZXNzaW9uQ29va2llVFRMIiwiTnVtYmVyIiwiY29va2llRXhwaXJlZEF0IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOztBQUNBOztBQUVBOzs7O0FBbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBT0EsTUFBTTtBQUNKQSxFQUFBQSxlQURJO0FBQ2FDLEVBQUFBLEtBRGI7QUFDb0JDLEVBQUFBLE1BRHBCO0FBQzRCQyxFQUFBQSx1QkFENUI7QUFFSkMsRUFBQUEsVUFGSTtBQUVRQyxFQUFBQTtBQUZSLElBR0ZDLE9BQU8sQ0FBQ0MsR0FIWjs7ZUFLZ0JDLE1BQUQsSUFBWTtBQUFBOztBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLFFBREk7QUFDTUMsSUFBQUEsY0FETjtBQUVKQyxJQUFBQSxRQUZJO0FBR0pDLElBQUFBLGlCQUhJO0FBR2VDLElBQUFBLGNBSGY7QUFJSkMsSUFBQUEsK0JBSkk7QUFLSkMsSUFBQUEsNEJBTEk7QUFNSkMsSUFBQUEsa0JBTkk7QUFPSkMsSUFBQUEsc0JBUEk7QUFRSkMsSUFBQUEsVUFSSTtBQVFRQyxJQUFBQSxNQVJSO0FBUWdCQyxJQUFBQSxJQVJoQjtBQVFzQkMsSUFBQUEsUUFSdEI7QUFRZ0NDLElBQUFBLE1BUmhDO0FBUXdDQyxJQUFBQSxLQVJ4QztBQVErQ0MsSUFBQUEsTUFSL0M7QUFRdURDLElBQUFBLE1BUnZEO0FBUStEQyxJQUFBQSxNQVIvRDtBQVF1RUMsSUFBQUEsTUFSdkU7QUFTSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLENBQUY7QUFBS0MsTUFBQUE7QUFBTDtBQVRILE1BVUZ0QixNQUFNLENBQUN1QixFQVZYO0FBWUEsUUFBTUMsRUFBRSxHQUFHRixRQUFRLENBQUMsSUFBRCxDQUFuQjtBQUNBLFFBQU1HLE9BQU8sR0FBR0gsUUFBUSxDQUFDLFNBQUQsQ0FBeEI7QUFDQSxRQUFNSSxVQUFVLEdBQUdKLFFBQVEsQ0FBQyxZQUFELENBQTNCO0FBQ0EsUUFBTUssWUFBWSxHQUFHTCxRQUFRLENBQUMsY0FBRCxDQUE3QjtBQUNBLFFBQU1NLFNBQVMsR0FBR04sUUFBUSxDQUFDLFdBQUQsQ0FBMUI7O0FBakJ5Qjs7QUFBQSxNQXVDbkJPLGFBdkNtQix5Q0FtQnpCO0FBQUEsMERBb0J5Qix5Q0FwQnpCO0FBQUEseUNBb0JtRDFCLFFBcEJuRCxHQXFCRSw2RUFyQkYsRUFzQkUseUVBdEJGLEVBd0JFLHNFQUEwQiw2QkFBMUIsRUF4QkYsRUE0QkUsa0RBQzBCLDBEQUFRLDhDQUFvQixnQ0FBcEIsQ0FBUixFQUQxQixDQTVCRiw4R0E4QkUscUVBQXlCLDhDQUFzQixDQUF0QixDQUF6QixFQTlCRixFQWtDRSxrRUFBc0Isb0NBQVUsNEJBQU9ELGNBQVAsQ0FBVixDQUF0QixFQWxDRixFQStDRSxrRUFBc0Isb0NBQVUsa0NBQVYsQ0FBdEIsRUEvQ0YsRUF5REUsbUVBQXVCLG9DQUFVLDJCQUFWLENBQXZCLEVBekRGLEVBb0dFLHdDQXBHRjtBQUFBLElBbkJ5QixXQW9CeEJlLE1BQU0sQ0FBQyxDQUNOLE1BRE0sRUFDRSxRQURGLEVBQ1ksUUFEWixFQUNzQixRQUR0QixFQUNnQyxRQURoQyxFQUMwQyxTQUQxQyxFQUNxRCxXQURyRCxDQUFELEVBRUosWUFBWTtBQUNiLFNBQUthLFdBQUwsQ0FBaUIsaUJBQWpCO0FBQ0EsU0FBS0EsV0FBTCxDQUFpQixvQkFBakI7QUFDQSxTQUFLQSxXQUFMLENBQWlCLFdBQWpCLEVBQThCO0FBQzVCQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQixFQUErQixXQUEvQjtBQURzQixLQUE5QjtBQUdBLFNBQUtELFdBQUwsQ0FBaUIsY0FBakIsRUFBaUM7QUFDL0JDLE1BQUFBLElBQUksRUFBRSxDQUFDLFNBQUQ7QUFEeUIsS0FBakM7QUFHRCxHQVhNLENBcEJrQixVQWdDeEJwQixNQUFNLENBQUNYLE1BQUQsQ0FoQ2tCLFVBaUN4QmUsS0FBSyxDQUFDTixzQkFBRCxDQWpDbUIsVUFrQ3hCTSxLQUFLLENBQUNQLGtCQUFELENBbENtQixVQW1DeEJPLEtBQUssQ0FBQ1QsK0JBQUQsQ0FuQ21CLFVBb0N4QlMsS0FBSyxDQUFDUiw0QkFBRCxDQXBDbUIsVUFxQ3hCUSxLQUFLLENBQUNWLGNBQUQsQ0FyQ21CLFVBc0N4QlUsS0FBSyxDQUFDWCxpQkFBRCxDQXRDbUI7QUFBQSxXQWdERywwREFBUSw4Q0FBb0IseUVBQXBCLENBQVIsRUFoREg7QUFBQSxlQStDdEJZLE1BQU0sQ0FBRSxXQUFVZixRQUFTLEdBQXJCLENBL0NnQixnQkFtQnhCUyxVQW5Cd0Isb09BbUJ6QixNQW9CTW1CLGFBcEJOLFNBb0JtRDFCLFFBcEJuRCxDQW9CNEQ7QUFJMUQsUUFBYzZCLFVBQWQsR0FBbUM7QUFBQSx1REFBUCw2QkFBTzs7QUFDakMsaUNBQU8sTUFBUDtBQUNEOztBQU55RDtBQUFBO0FBQUEsV0FBdkM7QUFBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVMUQsUUFBY0MsU0FBZCxHQUFrRDtBQUFBLHVEQUF2Qiw4Q0FBb0IsMENBQXBCLENBQXVCOztBQUNoRCxpQ0FBTyxLQUFLQyxnQkFBTCxFQUFQO0FBQ0Q7O0FBRUQsVUFBY0MsTUFBZCxHQUF1RDtBQUFBLGlGQUF2Qiw0QkFBT2pDLGNBQVAsQ0FBdUIsRUFBL0Isb0NBQVEsNEJBQU9BLGNBQVAsQ0FBUixDQUErQjs7QUFDckRrQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUNBLFVBQUcxQyx1QkFBdUIsSUFBSSxLQUE5QixFQUFvQztBQUNsQyxjQUFNMkMsT0FBTyxHQUFHakIsQ0FBQyxDQUFDa0IsSUFBRixDQUFPLEtBQUtDLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsSUFBNUIsRUFBa0MsQ0FBQyxPQUFELEVBQVUsVUFBVixDQUFsQyxDQUFoQjs7QUFDQSxjQUFNQyxPQUFPLEdBQUcsTUFBTSxLQUFLQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQlAsT0FBdEIsQ0FBdEI7QUFDQUssUUFBQUEsT0FBTyxDQUFDRyxRQUFSLEdBQW1CUixPQUFPLENBQUNRLFFBQTNCO0FBQ0EsYUFBS04sT0FBTCxDQUFhTyxNQUFiLEdBQXNCdEIsT0FBdEI7QUFDQSxrQ0FBT3ZCLGNBQVA7QUFDRCxPQU5ELE1BTU87QUFDTCxhQUFLc0MsT0FBTCxDQUFhUSxLQUFiLENBQW1CcEIsU0FBbkI7QUFDRDtBQUNGOztBQUVELFVBQWNxQixNQUFkLEdBQXdDO0FBQUEsa0ZBQVIsa0NBQVEsRUFBaEIsb0NBQVEsa0NBQVIsQ0FBZ0I7O0FBQ3RDLFVBQUksS0FBS0wsVUFBTCxJQUFtQixJQUF2QixFQUE2QjtBQUMzQixjQUFNRCxPQUFPLEdBQUcsTUFBTSxLQUFLQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixLQUFLSyxVQUEzQixDQUF0QjtBQUNBUCxRQUFBQSxPQUFPLENBQUNHLFFBQVIsR0FBbUIsS0FBS0ksVUFBTCxDQUFnQkosUUFBbkM7QUFDQSxtQ0FBTyxNQUFNSCxPQUFPLENBQUNRLElBQVIsRUFBYjtBQUNELE9BSkQsTUFJTztBQUNMLG1DQUFPLEVBQVA7QUFDRDtBQUNGOztBQUVELFVBQWNDLE9BQWQsR0FBdUM7QUFBQSxrRkFBTiwyQkFBTSxFQUFkLG9DQUFRLDJCQUFSLENBQWM7O0FBQ3JDaEIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFlBQU07QUFDSmdCLFFBQUFBLGFBREk7QUFFSkMsUUFBQUE7QUFGSSxVQUdGLEtBQUtDLE9BSFQ7QUFJQSxVQUFJLEtBQUtDLE9BQUwsSUFBZ0IsSUFBaEIsSUFBd0IsS0FBS0EsT0FBTCxDQUFhQyxHQUFiLElBQW9CLElBQWhELEVBQ0UsTUFBTSxLQUFLRCxPQUFMLENBQWFFLE9BQWIsRUFBTjtBQUNGLFlBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCLHFDQUFxQ0MsSUFBckMsQ0FBMEMsS0FBS3JCLE9BQUwsQ0FBYXNCLEdBQWIsQ0FBaUIsUUFBakIsS0FBOEIsS0FBS3RCLE9BQUwsQ0FBYXNCLEdBQWIsQ0FBaUIsaUJBQWpCLENBQXhFLElBQ3hCLENBQUMsS0FBS3RCLE9BQUwsQ0FBYXVCLFFBQWQsRUFBd0IsSUFBeEIsQ0FEd0IsR0FFeEIsSUFBSUMsTUFBSixDQUFXLHFCQUFYLEVBQWtDSCxJQUFsQyxDQUF1QyxLQUFLckIsT0FBTCxDQUFhc0IsR0FBYixDQUFpQixRQUFqQixLQUE4QixLQUFLdEIsT0FBTCxDQUFhc0IsR0FBYixDQUFpQixpQkFBakIsQ0FBckUsSUFDRSxDQUFDUixZQUFELEVBQWUscUJBQWYsQ0FERixHQUVFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FKTjs7QUFLQSxVQUFJSyxNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNsQixhQUFLbkIsT0FBTCxDQUFheUIsT0FBYixDQUFxQkMsR0FBckIsQ0FBeUJiLGFBQXpCLEVBQXdDLEVBQXhDLEVBQTRDO0FBQzFDYyxVQUFBQSxRQUFRLEVBQUUsSUFEZ0M7QUFFMUNDLFVBQUFBLE1BQU0sRUFBRSxJQUZrQztBQUcxQ1QsVUFBQUEsTUFBTSxFQUFFQTtBQUhrQyxTQUE1QztBQUtBLGFBQUtuQixPQUFMLENBQWF5QixPQUFiLENBQXFCQyxHQUFyQixDQUEwQixHQUFFYixhQUFjLFdBQTFDLEVBQXNELEVBQXRELEVBQTBEO0FBQ3hEZSxVQUFBQSxNQUFNLEVBQUUsSUFEZ0Q7QUFFeERULFVBQUFBLE1BQU0sRUFBRUE7QUFGZ0QsU0FBMUQ7QUFJRDs7QUFDRCxVQUFJQyxTQUFTLElBQUksSUFBakIsRUFBdUI7QUFDckIsYUFBS3BCLE9BQUwsQ0FBYXlCLE9BQWIsQ0FBcUJDLEdBQXJCLENBQXlCYixhQUF6QixFQUF3QyxFQUF4QyxFQUE0QztBQUMxQ2MsVUFBQUEsUUFBUSxFQUFFLElBRGdDO0FBRTFDQyxVQUFBQSxNQUFNLEVBQUUsSUFGa0M7QUFHMUNULFVBQUFBLE1BQU0sRUFBRUM7QUFIa0MsU0FBNUM7QUFLQSxhQUFLcEIsT0FBTCxDQUFheUIsT0FBYixDQUFxQkMsR0FBckIsQ0FBMEIsR0FBRWIsYUFBYyxXQUExQyxFQUFzRCxFQUF0RCxFQUEwRDtBQUN4RGUsVUFBQUEsTUFBTSxFQUFFLElBRGdEO0FBRXhEVCxVQUFBQSxNQUFNLEVBQUVDO0FBRmdELFNBQTFEO0FBSUQ7O0FBQ0QsV0FBS3BCLE9BQUwsQ0FBYXlCLE9BQWIsQ0FBcUJDLEdBQXJCLENBQXlCYixhQUF6QixFQUF3QyxFQUF4QyxFQUE0QztBQUMxQ2MsUUFBQUEsUUFBUSxFQUFFLElBRGdDO0FBRTFDQyxRQUFBQSxNQUFNLEVBQUU7QUFGa0MsT0FBNUM7QUFJQSxXQUFLNUIsT0FBTCxDQUFheUIsT0FBYixDQUFxQkMsR0FBckIsQ0FBMEIsR0FBRWIsYUFBYyxXQUExQyxFQUFzRCxFQUF0RCxFQUEwRDtBQUFDZSxRQUFBQSxNQUFNLEVBQUU7QUFBVCxPQUExRDtBQUNBLFdBQUs1QixPQUFMLENBQWFPLE1BQWIsR0FBc0JyQixVQUF0QjtBQUNEOztBQUVELFVBQWMyQyxTQUFkLEdBQTBCO0FBQ3hCakMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QixLQUFLRyxPQUFMLENBQWFDLE9BQWIsQ0FBcUJDLElBQTlDO0FBQ0EsWUFBTTtBQUNKNEIsUUFBQUEsUUFESTtBQUNNeEIsUUFBQUE7QUFETixVQUVGLEtBQUtOLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsSUFGekI7QUFHQSxZQUFNNkIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEtBQUszQixVQUFMLENBQWdCNEIsTUFBaEIsQ0FBdUI7QUFBQyxzQkFBY0Y7QUFBZixPQUF2QixDQUFQLEVBQXlERyxLQUF6RCxFQUFuQjs7QUFDQSxVQUFJRixJQUFJLElBQUksSUFBWixFQUFrQjtBQUNoQixhQUFLL0IsT0FBTCxDQUFhUSxLQUFiLENBQW1CckIsWUFBbkIsRUFBaUMsMkJBQWpDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxDQUFDNEMsSUFBSSxDQUFDRyxjQUFMLENBQW9CNUIsUUFBcEIsQ0FBTCxFQUFvQyxLQUFLTixPQUFMLENBQWFRLEtBQWIsQ0FBbUJyQixZQUFuQixFQUFpQywyQkFBakM7QUFDcEMsWUFBSSxDQUFDNEMsSUFBSSxDQUFDSSxhQUFWLEVBQXlCLEtBQUtuQyxPQUFMLENBQWFRLEtBQWIsQ0FBbUJwQixTQUFuQixFQUE4QixZQUE5QjtBQUN6QixZQUFJMkMsSUFBSSxDQUFDSyxRQUFULEVBQW1CLEtBQUtwQyxPQUFMLENBQWFRLEtBQWIsQ0FBbUJwQixTQUFuQixFQUE4QixRQUE5QjtBQUVuQixjQUFNaUQsSUFBSSxHQUFHO0FBQ1hDLFVBQUFBLFFBQVEsRUFBRSxJQURDO0FBRVhDLFVBQUFBLGFBQWEsRUFBRSwyQkFGSjtBQUdYQyxVQUFBQSxTQUFTLEVBQUUsT0FIQTtBQUlYQyxVQUFBQSxPQUFPLEVBQUUsSUFKRTtBQUtYQyxVQUFBQSxjQUFjLEVBQUUsSUFMTDtBQU1YQyxVQUFBQSxPQUFPLEVBQUU7QUFDUEMsWUFBQUEsS0FBSyxFQUFFYixJQUFJLENBQUNhLEtBREw7QUFFUEMsWUFBQUEsY0FBYyxFQUFFZCxJQUFJLENBQUNJLGFBRmQ7QUFHUFcsWUFBQUEsSUFBSSxFQUFFZixJQUFJLENBQUNlLElBSEo7QUFJUEMsWUFBQUEsUUFBUSxFQUFFaEIsSUFBSSxDQUFDZ0IsUUFKUjtBQUtQQyxZQUFBQSxPQUFPLEVBQUVqQixJQUFJLENBQUNpQixPQUxQO0FBTVBDLFlBQUFBLEdBQUcsRUFBRWxCLElBQUksQ0FBQ2tCLEdBTkg7QUFPUEMsWUFBQUEsVUFBVSxFQUFFbkIsSUFBSSxDQUFDb0IsU0FBTCxDQUFlQyxXQUFmO0FBUEwsV0FORTtBQWVYQyxVQUFBQSxZQUFZLEVBQUUsSUFmSDtBQWdCWEMsVUFBQUEsS0FBSyxFQUFFLHNCQWhCSTtBQWlCWEMsVUFBQUEsS0FBSyxFQUFFO0FBakJJLFNBQWI7QUFvQkEsY0FBTUMsV0FBVyxHQUFHekIsSUFBSSxDQUFDeUIsV0FBTCxJQUFvQixFQUF4QztBQUNBLGNBQU1DLGVBQWUsR0FBRyxLQUFLekQsT0FBTCxDQUFhQyxPQUFiLENBQXFCQyxJQUFyQixDQUEwQm9ELEtBQTFCLElBQW1DLEtBQUt0RCxPQUFMLENBQWEwRCxLQUFiLENBQW1CSixLQUF0RCxJQUErRCxFQUF2RjtBQUNBLGNBQU1LLGNBQWMsR0FBR0YsZUFBZSxDQUFDRyxLQUFoQixDQUFzQixHQUF0QixFQUEyQkMsTUFBM0IsQ0FBbUNDLENBQUQsSUFDdkRBLENBQUMsQ0FBQ0MsUUFBRixDQUFXLEdBQVgsQ0FEcUIsQ0FBdkI7QUFJQSxjQUFNQyxTQUFTLEdBQUdMLGNBQWMsQ0FBQ00sTUFBZixDQUFzQlQsV0FBdEIsQ0FBbEIsQ0EvQkssQ0FpQ0w7O0FBQ0FRLFFBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFnQix3Q0FBdUNuQyxJQUFJLENBQUNrQixHQUFJLElBQWhFO0FBQ0FlLFFBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFnQix5Q0FBd0NuQyxJQUFJLENBQUNrQixHQUFJLElBQWpFLEVBbkNLLENBb0NMOztBQUNBZSxRQUFBQSxTQUFTLENBQUNFLElBQVYsQ0FBZ0Isc0NBQXFDbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUE5RDtBQUNBZSxRQUFBQSxTQUFTLENBQUNFLElBQVYsQ0FBZ0IsdUNBQXNDbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUEvRCxFQXRDSyxDQXVDTDs7QUFDQWUsUUFBQUEsU0FBUyxDQUFDRSxJQUFWLENBQWdCLHNDQUFxQ25DLElBQUksQ0FBQ2tCLEdBQUksSUFBOUQ7QUFDQWUsUUFBQUEsU0FBUyxDQUFDRSxJQUFWLENBQWdCLHVDQUFzQ25DLElBQUksQ0FBQ2tCLEdBQUksSUFBL0QsRUF6Q0ssQ0EwQ0w7O0FBQ0FlLFFBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFnQixzQ0FBcUNuQyxJQUFJLENBQUNrQixHQUFJLElBQTlEO0FBQ0FlLFFBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFnQix1Q0FBc0NuQyxJQUFJLENBQUNrQixHQUFJLElBQS9ELEVBNUNLLENBNkNMOztBQUNBZSxRQUFBQSxTQUFTLENBQUNFLElBQVYsQ0FBZ0IsNEJBQTJCbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUFwRDtBQUNBZSxRQUFBQSxTQUFTLENBQUNFLElBQVYsQ0FBZ0IsNkJBQTRCbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUFyRDtBQUNBZSxRQUFBQSxTQUFTLENBQUNFLElBQVYsQ0FBZ0IsaUNBQWdDbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUF6RCxFQWhESyxDQWlETDs7QUFDQWUsUUFBQUEsU0FBUyxDQUFDRSxJQUFWLENBQWdCLDhCQUE2Qm5DLElBQUksQ0FBQ2tCLEdBQUksSUFBdEQ7QUFDQWUsUUFBQUEsU0FBUyxDQUFDRSxJQUFWLENBQWdCLCtCQUE4Qm5DLElBQUksQ0FBQ2tCLEdBQUksSUFBdkQ7QUFDQWUsUUFBQUEsU0FBUyxDQUFDRSxJQUFWLENBQWdCLG1DQUFrQ25DLElBQUksQ0FBQ2tCLEdBQUksSUFBM0QsRUFwREssQ0FxREw7O0FBQ0FlLFFBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFnQiw0QkFBMkJuQyxJQUFJLENBQUNrQixHQUFJLElBQXBEO0FBQ0FlLFFBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFnQiw2QkFBNEJuQyxJQUFJLENBQUNrQixHQUFJLElBQXJEO0FBQ0FlLFFBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFnQixpQ0FBZ0NuQyxJQUFJLENBQUNrQixHQUFJLElBQXpEO0FBRUFaLFFBQUFBLElBQUksQ0FBQ2lCLEtBQUwsR0FBYVUsU0FBUyxDQUFDRyxJQUFWLENBQWUsR0FBZixDQUFiO0FBRUEsY0FBTUMsV0FBVyxHQUFHLEVBQXBCOztBQUNBLFlBQUlyQyxJQUFJLENBQUNzQyxPQUFULEVBQWtCO0FBQ2hCO0FBQ0FELFVBQUFBLFdBQVcsQ0FBQ0YsSUFBWixDQUFrQix5Q0FBd0NuQyxJQUFJLENBQUNrQixHQUFJLElBQW5FO0FBQ0FtQixVQUFBQSxXQUFXLENBQUNGLElBQVosQ0FBa0IsMENBQXlDbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUFwRSxFQUhnQixDQUloQjs7QUFDQW1CLFVBQUFBLFdBQVcsQ0FBQ0YsSUFBWixDQUFrQix1Q0FBc0NuQyxJQUFJLENBQUNrQixHQUFJLElBQWpFO0FBQ0FtQixVQUFBQSxXQUFXLENBQUNGLElBQVosQ0FBa0Isd0NBQXVDbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUFsRSxFQU5nQixDQU9oQjs7QUFDQW1CLFVBQUFBLFdBQVcsQ0FBQ0YsSUFBWixDQUFrQix1Q0FBc0NuQyxJQUFJLENBQUNrQixHQUFJLElBQWpFO0FBQ0FtQixVQUFBQSxXQUFXLENBQUNGLElBQVosQ0FBa0Isd0NBQXVDbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUFsRSxFQVRnQixDQVVoQjs7QUFDQW1CLFVBQUFBLFdBQVcsQ0FBQ0YsSUFBWixDQUFrQix5Q0FBbEI7QUFDQUUsVUFBQUEsV0FBVyxDQUFDRixJQUFaLENBQWtCLDBDQUFsQixFQVpnQixDQWFoQjs7QUFDQUUsVUFBQUEsV0FBVyxDQUFDRixJQUFaLENBQWtCLDZCQUE0Qm5DLElBQUksQ0FBQ2tCLEdBQUksSUFBdkQ7QUFDQW1CLFVBQUFBLFdBQVcsQ0FBQ0YsSUFBWixDQUFrQiw4QkFBNkJuQyxJQUFJLENBQUNrQixHQUFJLElBQXhEO0FBQ0FtQixVQUFBQSxXQUFXLENBQUNGLElBQVosQ0FBa0Isa0NBQWlDbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUE1RCxFQWhCZ0IsQ0FpQmhCOztBQUNBbUIsVUFBQUEsV0FBVyxDQUFDRixJQUFaLENBQWtCLCtCQUE4Qm5DLElBQUksQ0FBQ2tCLEdBQUksSUFBekQ7QUFDQW1CLFVBQUFBLFdBQVcsQ0FBQ0YsSUFBWixDQUFrQixnQ0FBK0JuQyxJQUFJLENBQUNrQixHQUFJLElBQTFEO0FBQ0FtQixVQUFBQSxXQUFXLENBQUNGLElBQVosQ0FBa0Isb0NBQW1DbkMsSUFBSSxDQUFDa0IsR0FBSSxJQUE5RCxFQXBCZ0IsQ0FxQmhCOztBQUNBbUIsVUFBQUEsV0FBVyxDQUFDRixJQUFaLENBQWtCLCtCQUFsQjtBQUNBRSxVQUFBQSxXQUFXLENBQUNGLElBQVosQ0FBa0IsZ0NBQWxCO0FBQ0FFLFVBQUFBLFdBQVcsQ0FBQ0YsSUFBWixDQUFrQixvQ0FBbEI7QUFDRDs7QUFFRCxZQUFJN0IsSUFBSSxDQUFDaUIsS0FBTCxJQUFjLElBQWxCLEVBQXdCakIsSUFBSSxDQUFDaUIsS0FBTCxHQUFhLEVBQWI7QUFFeEJqQixRQUFBQSxJQUFJLENBQUNpQixLQUFMLElBQWMsTUFBTWMsV0FBVyxDQUFDRCxJQUFaLENBQWlCLEdBQWpCLENBQXBCOztBQUVBLGNBQU1HLEtBQUssR0FBR0Msc0JBQUlDLElBQUosQ0FBU25DLElBQVQsRUFBZTtBQUFFb0MsVUFBQUEsR0FBRyxFQUFFcEg7QUFBUCxTQUFmLEVBQXFDO0FBQ2pEcUgsVUFBQUEsU0FBUyxFQUFFMUgsZUFEc0M7QUFFakQySCxVQUFBQSxLQUFLLEVBQUUxSCxLQUYwQztBQUdqRDJILFVBQUFBLFFBQVEsRUFBRSxDQUFDLEtBQUQsQ0FIdUM7QUFJakRDLFVBQUFBLE9BQU8sRUFBRTlDLElBQUksQ0FBQ2tCLEdBSm1DO0FBS2pENkIsVUFBQUEsTUFBTSxFQUFFNUgsTUFMeUM7QUFNakRzRixVQUFBQSxTQUFTLEVBQUU7QUFOc0MsU0FBckMsQ0FBZDs7QUFRQUgsUUFBQUEsSUFBSSxDQUFDMEMsWUFBTCxHQUFvQlQsS0FBcEI7QUFFQSxjQUFNVSxVQUFVLEdBQUc7QUFDakIvRCxVQUFBQSxHQUFHLEVBQUVjLElBQUksQ0FBQ2tELEVBRE87QUFFakJDLFVBQUFBLE9BQU8sRUFBRSxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxLQUFhL0MsSUFBSSxDQUFDRyxTQUEzQjtBQUZRLFNBQW5CO0FBSUEsYUFBS3hCLE9BQUwsR0FBZSxNQUFNLEtBQUt2QixTQUFMLENBQWVnQixNQUFmLENBQXNCdUUsVUFBdEIsQ0FBckI7QUFDQSxjQUFNO0FBQ0puRSxVQUFBQSxhQURJO0FBRUp3RSxVQUFBQSxnQkFGSTtBQUdKdkUsVUFBQUE7QUFISSxZQUlGLEtBQUtDLE9BSlQ7QUFLQSxjQUFNSSxNQUFNLEdBQUcscUNBQXFDRSxJQUFyQyxDQUEwQyxLQUFLckIsT0FBTCxDQUFhc0IsR0FBYixDQUFpQixRQUFqQixLQUE4QixLQUFLdEIsT0FBTCxDQUFhc0IsR0FBYixDQUFpQixpQkFBakIsQ0FBeEUsSUFDWCxLQUFLdEIsT0FBTCxDQUFhdUIsUUFERixHQUVYLElBQUlDLE1BQUosQ0FBVyxxQkFBWCxFQUFrQ0gsSUFBbEMsQ0FBdUMsS0FBS3JCLE9BQUwsQ0FBYXNCLEdBQWIsQ0FBaUIsUUFBakIsS0FBOEIsS0FBS3RCLE9BQUwsQ0FBYXNCLEdBQWIsQ0FBaUIsaUJBQWpCLENBQXJFLElBQ0VSLFlBREYsR0FFRSxJQUpOO0FBS0EsYUFBS2QsT0FBTCxDQUFheUIsT0FBYixDQUFxQkMsR0FBckIsQ0FBeUJiLGFBQXpCLEVBQXdDLEtBQUtHLE9BQUwsQ0FBYWlFLEVBQXJELEVBQXlEO0FBQ3ZEdEQsVUFBQUEsUUFBUSxFQUFFLElBRDZDO0FBRXZEQyxVQUFBQSxNQUFNLEVBQUUwRCxNQUFNLENBQUNELGdCQUFELENBQU4sR0FBMkIsSUFGb0I7QUFHdkRsRSxVQUFBQTtBQUh1RCxTQUF6RDtBQUtBLGNBQU1vRSxlQUFlLEdBQUdKLElBQUksQ0FBQ0MsR0FBTCxLQUFhRSxNQUFNLENBQUNELGdCQUFELENBQU4sR0FBMkIsSUFBaEU7QUFDQSxhQUFLckYsT0FBTCxDQUFheUIsT0FBYixDQUFxQkMsR0FBckIsQ0FBMEIsR0FBRWIsYUFBYyxXQUExQyxFQUFzRDBFLGVBQXRELEVBQXVFO0FBQ3JFM0QsVUFBQUEsTUFBTSxFQUFFMEQsTUFBTSxDQUFDRCxnQkFBRCxDQUFOLEdBQTJCLElBRGtDO0FBRXJFbEUsVUFBQUE7QUFGcUUsU0FBdkU7QUFJQSxhQUFLbkIsT0FBTCxDQUFhTyxNQUFiLEdBQXNCdkIsRUFBdEI7QUFDQSxlQUFPcUQsSUFBUDtBQUNEO0FBQ0Y7O0FBMU55RCxHQXZDbkMsZ0ZBd0NQbUQsVUF4Q08sR0F3Q01BLFVBeENOLFVBeUNWQyxNQXpDVSxHQXlDRCxFQXpDQywyRUF3Q3RCbkgsTUF4Q3NCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBeUN0QkYsSUF6Q3NCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBMkN0QkMsUUEzQ3NCLHVNQWdEdEJBLFFBaERzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0VBaUR0QkEsUUFqRHNCLDhKQXFEdEJLLE1BckRzQiwySkFrRXRCQSxNQWxFc0IsNEpBNEV0QkEsTUE1RXNCLCtKQXVIdEJBLE1BdkhzQjtBQW1RMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFJlY29yZEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJztcblxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5jb25zdCB7XG4gIFRPS0VOX0FMR09SSVRITSwgS0VZSUQsIElTU1VFUiwgUkVHSVNUUkFUSU9OX0lTX0FMTE9XRUQsXG4gIFBVQkxJQ19LRVksIFBSSVZBVEVfS0VZLFxufSA9IHByb2Nlc3MuZW52O1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTRVNTSU9OUywgTk9OX1JFTkRFUkFCTEUsXG4gICAgUmVzb3VyY2UsXG4gICAgQ29uZmlndXJhYmxlTWl4aW4sIEJvZHlQYXJzZU1peGluLFxuICAgIENoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4sXG4gICAgQ2hlY2tBcGlWZXJzaW9uUmVzb3VyY2VNaXhpbixcbiAgICBDaGVja1Nlc3Npb25zTWl4aW4sXG4gICAgUXVlcnlhYmxlUmVzb3VyY2VNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBuYW1lQnksIG1peGluLCBpbmplY3QsIGNoYWlucywgYWN0aW9uLCBtZXRob2QsXG4gICAgVXRpbHM6IHsgXywgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IE9LID0gc3RhdHVzZXMoJ09LJyk7XG4gIGNvbnN0IENSRUFURUQgPSBzdGF0dXNlcygnY3JlYXRlZCcpO1xuICBjb25zdCBOT19DT05URU5UID0gc3RhdHVzZXMoJ25vIGNvbnRlbnQnKTtcbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBGT1JCSURERU4gPSBzdGF0dXNlcygnZm9yYmlkZGVuJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQGNoYWlucyhbXG4gICAgJ2xpc3QnLCAnZGV0YWlsJywgJ2NyZWF0ZScsICd1cGRhdGUnLCAnc2lnbnVwJywgJ3NpZ25vdXQnLCAnYXV0aG9yaXplJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tBcGlWZXJzaW9uJyk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygnY2hlY2tTY2hlbWFWZXJzaW9uJyk7XG4gICAgdGhpcy5pbml0aWFsSG9vaygncGFyc2VCb2R5Jywge1xuICAgICAgb25seTogWydjcmVhdGUnLCAndXBkYXRlJywgJ3NpZ251cCcsICdhdXRob3JpemUnXVxuICAgIH0pO1xuICAgIHRoaXMuaW5pdGlhbEhvb2soJ2NoZWNrU2Vzc2lvbicsIHtcbiAgICAgIG9ubHk6IFsnc2lnbm91dCddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oUXVlcnlhYmxlUmVzb3VyY2VNaXhpbilcbiAgQG1peGluKENoZWNrU2Vzc2lvbnNNaXhpbilcbiAgQG1peGluKENoZWNrU2NoZW1hVmVyc2lvblJlc291cmNlTWl4aW4pXG4gIEBtaXhpbihDaGVja0FwaVZlcnNpb25SZXNvdXJjZU1peGluKVxuICBAbWl4aW4oQm9keVBhcnNlTWl4aW4pXG4gIEBtaXhpbihDb25maWd1cmFibGVNaXhpbilcbiAgY2xhc3MgVXNlcnNSZXNvdXJjZTwgRCA9IFJlY29yZEludGVyZmFjZSA+IGV4dGVuZHMgUmVzb3VyY2Uge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IGVudGl0eU5hbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAndXNlcic7XG4gICAgfVxuXG4gICAgQGluamVjdChgRmFjdG9yeTwke1NFU1NJT05TfT5gKVxuICAgIEBwcm9wZXJ0eSBfc2Vzc2lvbnNGYWN0b3J5OiAoKSA9PiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+O1xuICAgIEBwcm9wZXJ0eSBnZXQgX3Nlc3Npb25zKCk6IENvbGxlY3Rpb25JbnRlcmZhY2U8RD4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25zRmFjdG9yeSgpXG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBzaWdudXAoKTogUHJvbWlzZTx0eXBlb2YgTk9OX1JFTkRFUkFCTEU+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzaWdudXAnKTtcbiAgICAgIGlmKFJFR0lTVFJBVElPTl9JU19BTExPV0VEID09ICd5ZXMnKXtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IF8ucGljayh0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5LCBbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10pO1xuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgdGhpcy5jb2xsZWN0aW9uLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICBuZXdVc2VyLnBhc3N3b3JkID0gcGF5bG9hZC5wYXNzd29yZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0YXR1cyA9IENSRUFURUQ7XG4gICAgICAgIHJldHVybiBOT05fUkVOREVSQUJMRTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50aHJvdyhGT1JCSURERU4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBhY3Rpb24gYXN5bmMgY3JlYXRlKCk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgICBpZiAodGhpcy5jb2xsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IHRoaXMuY29sbGVjdGlvbi5idWlsZCh0aGlzLnJlY29yZEJvZHkpO1xuICAgICAgICBuZXdVc2VyLnBhc3N3b3JkID0gdGhpcy5yZWNvcmRCb2R5LnBhc3N3b3JkO1xuICAgICAgICByZXR1cm4gYXdhaXQgbmV3VXNlci5zYXZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBzaWdub3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc29sZS5sb2coJ3NpZ25vdXQnKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2Vzc2lvbkNvb2tpZSxcbiAgICAgICAgY29va2llRG9tYWluXG4gICAgICB9ID0gdGhpcy5jb25maWdzO1xuICAgICAgaWYgKHRoaXMuc2Vzc2lvbiAhPSBudWxsICYmIHRoaXMuc2Vzc2lvbi51aWQgIT0gbnVsbClcbiAgICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IFtkb21haW4sIG9sZERvbWFpbl0gPSAvKC4qbG9jYWxob3N0LiopfCguKjEyN1xcLjBcXC4wXFwuMS4qKS8udGVzdCh0aGlzLmNvbnRleHQuZ2V0KCdvcmlnaW4nKSB8fCB0aGlzLmNvbnRleHQuZ2V0KCdYLUZvcndhcmRlZC1Gb3InKSlcbiAgICAgICAgPyBbdGhpcy5jb250ZXh0Lmhvc3RuYW1lLCBudWxsXVxuICAgICAgICA6IG5ldyBSZWdFeHAoXCIuKiN7Y29va2llRG9tYWlufS4qXCIpLnRlc3QodGhpcy5jb250ZXh0LmdldCgnb3JpZ2luJykgfHwgdGhpcy5jb250ZXh0LmdldCgnWC1Gb3J3YXJkZWQtRm9yJykpXG4gICAgICAgICAgPyBbY29va2llRG9tYWluLCBcImFwaS4je2Nvb2tpZURvbWFpbn1cIl1cbiAgICAgICAgICA6IFtudWxsLCBudWxsXTtcbiAgICAgIGlmIChkb21haW4gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgJycsIHtcbiAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChgJHtzZXNzaW9uQ29va2llfUV4cGlyZWRBdGAsICcnLCB7XG4gICAgICAgICAgbWF4QWdlOiAxMDAwLFxuICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKG9sZERvbWFpbiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChzZXNzaW9uQ29va2llLCAnJywge1xuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgICAgICBkb21haW46IG9sZERvbWFpbixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KGAke3Nlc3Npb25Db29raWV9RXhwaXJlZEF0YCwgJycsIHtcbiAgICAgICAgICBtYXhBZ2U6IDEwMDAsXG4gICAgICAgICAgZG9tYWluOiBvbGREb21haW4sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoc2Vzc2lvbkNvb2tpZSwgJycsIHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIG1heEFnZTogMTAwMCxcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRleHQuY29va2llcy5zZXQoYCR7c2Vzc2lvbkNvb2tpZX1FeHBpcmVkQXRgLCAnJywge21heEFnZTogMTAwMH0pXG4gICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gTk9fQ09OVEVOVDtcbiAgICB9XG5cbiAgICBAYWN0aW9uIGFzeW5jIGF1dGhvcml6ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhdXRob3JpemUnLCB0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcm5hbWUsIHBhc3N3b3JkLFxuICAgICAgfSA9IHRoaXMuY29udGV4dC5yZXF1ZXN0LmJvZHk7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgKGF3YWl0IHRoaXMuY29sbGVjdGlvbi5maW5kQnkoe1wiQGRvYy5lbWFpbFwiOiB1c2VybmFtZX0pKS5maXJzdCgpO1xuICAgICAgaWYgKHVzZXIgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQudGhyb3coVU5BVVRIT1JJWkVELCAnQ3JlZGVudGlhbHMgYXJlIGluY29ycmVjdCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXVzZXIudmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQpKSB0aGlzLmNvbnRleHQudGhyb3coVU5BVVRIT1JJWkVELCAnQ3JlZGVudGlhbHMgYXJlIGluY29ycmVjdCcpO1xuICAgICAgICBpZiAoIXVzZXIuZW1haWxWZXJpZmllZCkgdGhpcy5jb250ZXh0LnRocm93KEZPUkJJRERFTiwgJ1VudmVyaWZpZWQnKTtcbiAgICAgICAgaWYgKHVzZXIuaXNMb2NrZWQpIHRoaXMuY29udGV4dC50aHJvdyhGT1JCSURERU4sICdMb2NrZWQnKTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGFwcFN0YXRlOiBudWxsLFxuICAgICAgICAgIGF1dGhlbnRpY2F0b3I6ICdhdXRoZW50aWNhdG9yOnNlbGYtaG9zdGVkJyxcbiAgICAgICAgICBleHBpcmVzSW46IDM2MDAwMDAsXG4gICAgICAgICAgaWRUb2tlbjogbnVsbCxcbiAgICAgICAgICBpZFRva2VuUGF5bG9hZDogbnVsbCxcbiAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGVtYWlsX3ZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBuaWNrbmFtZTogdXNlci5uaWNrbmFtZSxcbiAgICAgICAgICAgIHBpY3R1cmU6IHVzZXIucGljdHVyZSxcbiAgICAgICAgICAgIHN1YjogdXNlci5zdWIsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiB1c2VyLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWZyZXNoVG9rZW46IG51bGwsXG4gICAgICAgICAgc2NvcGU6ICdvcGVuaWQgZW1haWwgcHJvZmlsZScsXG4gICAgICAgICAgc3RhdGU6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGVybWlzc2lvbnMgPSB1c2VyLnBlcm1pc3Npb25zIHx8IFtdO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRTY29wZXMgPSB0aGlzLmNvbnRleHQucmVxdWVzdC5ib2R5LnNjb3BlIHx8IHRoaXMuY29udGV4dC5xdWVyeS5zY29wZSB8fCAnJztcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTY29wZXMgPSByZXF1ZXN0ZWRTY29wZXMuc3BsaXQoJyAnKS5maWx0ZXIoKHgpID0+XG4gICAgICAgICAgeC5pbmNsdWRlcygnOicpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWxsU2NvcGVzID0gZmlsdGVyZWRTY29wZXMuY29uY2F0KHBlcm1pc3Npb25zKTtcblxuICAgICAgICAvLyB1c2VyIGJyb2FkY2FzdCBwdWJsaXNoXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgcHVibGlzaCByZXF1ZXN0XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL3VzZXJfcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBzdWJzY3JpYmUgb24gcmVzcG9zZVxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgc3Vic2NyaWJlIG9uIGFueVxuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIC8vIHVzZXIgcmVzIHF1ZXVlc1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL3VzZXJfcmVzLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvdXNlcl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAvLyB1c2VyIGJyb2FkY2FzdCBxdWV1ZXNcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgYWxsU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvdXNlcl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS91c2VyX2Jyb2FkLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgLy8gdXNlciBzdWJzY3JpcHRpb24gcXVldWVzXG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvdXNlcl9zdWIuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICBhbGxTY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgIGFsbFNjb3Blcy5wdXNoKGBhcGkuY29uZmlndXJlOiUyRmFwaS91c2VyX3N1Yi4ke3VzZXIuc3VifS4qYCk7XG5cbiAgICAgICAgZGF0YS5zY29wZSA9IGFsbFNjb3Blcy5qb2luKCcgJyk7XG5cbiAgICAgICAgY29uc3QgYWRtaW5TY29wZXMgPSBbXTtcbiAgICAgICAgaWYgKHVzZXIuaXNBZG1pbikge1xuICAgICAgICAgIC8vIGJyb2FkY2FzdCBwdWJsaXNoXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHB1Ymxpc2ggcmVxdWVzdFxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fcmVxLiR7dXNlci5zdWJ9LipgKTtcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkud3JpdGU6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXEuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHN1YnNjcmliZSBvbiByZXNwb3NlXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FtcS50b3BpYy9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gc3Vic2NyaWJlIG9uIGFueVxuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hbXEudG9waWMvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYW1xLnRvcGljL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgICAvLyByZXMgcXVldWVzXG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLnJlYWQ6JTJGYXBpL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hZG1pbl9yZXMuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL2FkbWluX3Jlcy4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgLy8gYnJvYWRjYXN0IHF1ZXVlc1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5yZWFkOiUyRmFwaS9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLndyaXRlOiUyRmFwaS9hZG1pbl9icm9hZC4ke3VzZXIuc3VifS4qYCk7XG4gICAgICAgICAgYWRtaW5TY29wZXMucHVzaChgYXBpLmNvbmZpZ3VyZTolMkZhcGkvYWRtaW5fYnJvYWQuJHt1c2VyLnN1Yn0uKmApO1xuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBxdWV1ZXNcbiAgICAgICAgICBhZG1pblNjb3Blcy5wdXNoKGBhcGkucmVhZDolMkZhcGkvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS53cml0ZTolMkZhcGkvYWRtaW5fc3ViLiouKmApO1xuICAgICAgICAgIGFkbWluU2NvcGVzLnB1c2goYGFwaS5jb25maWd1cmU6JTJGYXBpL2FkbWluX3N1Yi4qLipgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLnNjb3BlID09IG51bGwpIGRhdGEuc2NvcGUgPSAnJztcblxuICAgICAgICBkYXRhLnNjb3BlICs9ICcgJyArIGFkbWluU2NvcGVzLmpvaW4oJyAnKTtcblxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKGRhdGEsIHsga2V5OiBQUklWQVRFX0tFWSB9LCB7XG4gICAgICAgICAgYWxnb3JpdGhtOiBUT0tFTl9BTEdPUklUSE0sXG4gICAgICAgICAga2V5aWQ6IEtFWUlELFxuICAgICAgICAgIGF1ZGllbmNlOiBbJ2FwaSddLFxuICAgICAgICAgIHN1YmplY3Q6IHVzZXIuc3ViLFxuICAgICAgICAgIGlzc3VlcjogSVNTVUVSLFxuICAgICAgICAgIGV4cGlyZXNJbjogNzIwMFxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YS5hY2Nlc3NfdG9rZW4gPSB0b2tlbjtcblxuICAgICAgICBjb25zdCBuZXdTZXNzaW9uID0ge1xuICAgICAgICAgIHVpZDogdXNlci5pZCxcbiAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgZGF0YS5leHBpcmVzSW4pXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IGF3YWl0IHRoaXMuX3Nlc3Npb25zLmNyZWF0ZShuZXdTZXNzaW9uKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHNlc3Npb25Db29raWUsXG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZVRUTCxcbiAgICAgICAgICBjb29raWVEb21haW4sXG4gICAgICAgIH0gPSB0aGlzLmNvbmZpZ3M7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IC8oLipsb2NhbGhvc3QuKil8KC4qMTI3XFwuMFxcLjBcXC4xLiopLy50ZXN0KHRoaXMuY29udGV4dC5nZXQoJ29yaWdpbicpIHx8IHRoaXMuY29udGV4dC5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpKVxuICAgICAgICAgID8gdGhpcy5jb250ZXh0Lmhvc3RuYW1lXG4gICAgICAgICAgOiBuZXcgUmVnRXhwKFwiLioje2Nvb2tpZURvbWFpbn0uKlwiKS50ZXN0KHRoaXMuY29udGV4dC5nZXQoJ29yaWdpbicpIHx8IHRoaXMuY29udGV4dC5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpKVxuICAgICAgICAgICAgPyBjb29raWVEb21haW5cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvb2tpZXMuc2V0KHNlc3Npb25Db29raWUsIHRoaXMuc2Vzc2lvbi5pZCwge1xuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgIG1heEFnZTogTnVtYmVyKHNlc3Npb25Db29raWVUVEwpICogMTAwMCxcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGNvb2tpZUV4cGlyZWRBdCA9IERhdGUubm93KCkgKyBOdW1iZXIoc2Vzc2lvbkNvb2tpZVRUTCkgKiAxMDAwXG4gICAgICAgIHRoaXMuY29udGV4dC5jb29raWVzLnNldChgJHtzZXNzaW9uQ29va2llfUV4cGlyZWRBdGAsIGNvb2tpZUV4cGlyZWRBdCwge1xuICAgICAgICAgIG1heEFnZTogTnVtYmVyKHNlc3Npb25Db29raWVUVEwpICogMTAwMCxcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3RhdHVzID0gT0s7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19