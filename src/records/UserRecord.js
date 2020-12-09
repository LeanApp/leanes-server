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

import crypto from 'crypto';

const {
  ORIGINS, HASH_DIGEST, ITERATIONS, TOKEN_ALGORITHM, KEYID, ISSUER, AUTO_LOCKING, REGISTRATION_IS_ALLOWED,
  PUBLIC_KEY, PRIVATE_KEY, SECRET, DEFAULT_USERS
} = process.env;

export default (Module) => {
  const {
    Record,
    TimestampsRecordMixin,
    initialize, partOf, meta, nameBy, mixin, attribute, property, method, chains,
    Utils: { uuid }
  } = Module.NS;

  @initialize
  @chains([
    'create'
  ], function () {
    this.beforeHook('fillNonRequired', {
      only: ['create']
    });
    this.beforeHook('hashPassword', {
      only: ['create']
    });
  })
  @partOf(Module)
  @mixin(TimestampsRecordMixin)
  class UserRecord extends Record {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property password: ?string = null;

    @attribute({ type: 'string' }) email;
    @attribute({ type: 'boolean' }) emailVerified;
    @attribute({ type: 'string' }) name;
    @attribute({ type: 'string' }) nickname;
    @attribute({ type: 'string' }) picture;
    @attribute({ type: 'string' }) sub;
    @attribute({ type: 'string' }) salt;
    @attribute({ type: 'string' }) passwordHash;
    @attribute({ type: 'boolean' }) isAdmin;
    @attribute({ type: 'boolean' }) isLocked;

    @method fillNonRequired(... args) {
      this.emailVerified = this.emailVerified != null ? this.emailVerified : false;
      this.name = this.name || this.email;
      this.nickname = this.nickname || email.split('@')[0];
      this.picture = this.picture || '';
      this.sub = this.sub || crypto.randomBytes(16).toString('hex');
      this.salt = `${SECRET}|${uuid.v4()}`;
      this.isAdmin = this.isAdmin != null ? this.isAdmin : false;
      this.isLocked = AUTO_LOCKING == 'yes';
      return args;
    }

    @method hashPassword(... args) {
      this.passwordHash = crypto.pbkdf2Sync(this.password, this.salt, ITERATIONS, 64, HASH_DIGEST).toString('hex');
      return args;
    }

    @method verifyPassword(password): boolean {
      return this.passwordHash == crypto.pbkdf2Sync(password, this.salt, ITERATIONS, 64, HASH_DIGEST).toString('hex');
    }
  }
}
