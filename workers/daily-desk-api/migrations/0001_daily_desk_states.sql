CREATE TABLE IF NOT EXISTS daily_desk_states (
  owner_hash TEXT PRIMARY KEY NOT NULL,
  revision INTEGER NOT NULL,
  state_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
