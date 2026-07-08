const sqlite3 = require('sqlite3').verbose();
const { Pool } = require('pg');
const path = require('path');

let db;

function convertSqliteToPostgres(sql) {
  let pgSql = sql
    .replace(/INTEGER PRIMARY KEY AUTOINCREMENT/gi, 'SERIAL PRIMARY KEY')
    .replace(/DATETIME DEFAULT CURRENT_TIMESTAMP/gi, 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP')
    .replace(/DROP TABLE IF EXISTS ([a-z0-9_]+)/gi, 'DROP TABLE IF EXISTS $1 CASCADE');
  
  let index = 1;
  return pgSql.replace(/\?/g, () => `$${index++}`);
}

if (process.env.DATABASE_URL) {
  console.log('Production Environment Detected: Connecting to Cloud PostgreSQL...');
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  db = {
    all: (sql, params, callback) => {
      const pgSql = convertSqliteToPostgres(sql);
      pool.query(pgSql, params, (err, res) => {
        callback(err, res ? res.rows : null);
      });
    },
    run: function(sql, params, callback) {
      const pgSql = convertSqliteToPostgres(sql);
      pool.query(pgSql, params, (err, res) => {
        const context = {
          lastID: res && res.rows[0] ? res.rows[0].id : null
        };
        if (callback) {
          callback.call(context, err);
        }
      });
    },
    prepare: (sql) => {
      const pgSql = convertSqliteToPostgres(sql);
      const runs = [];
      return {
        run: (...args) => {
          const callback = typeof args[args.length - 1] === 'function' ? args.pop() : null;
          const params = args;
          runs.push(
            pool.query(pgSql, params)
              .then(() => callback && callback(null))
              .catch((err) => callback && callback(err))
          );
        },
        finalize: (callback) => {
          Promise.all(runs)
            .then(() => callback && callback())
            .catch((err) => callback && callback(err));
        }
      };
    },
    serialize: (fn) => fn(),
    close: (callback) => {
      pool.end(callback);
    }
  };
} else {
  const dbPath = path.resolve(__dirname, '../portfolio.db');
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error connecting to the SQLite database:', err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });
}

module.exports = db;
