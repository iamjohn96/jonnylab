(function (root) {
  'use strict';
  function createIntake() {
    const rows = new Map();
    const notices = new Map();
    function accept(input, fault = '') {
      const fields = ['id', 'name', 'email', 'request'];
      const data = Object.fromEntries(fields.map(k => [k, typeof input?.[k] === 'string' ? input[k].trim() : '']));
      const invalid = fields.filter(k => !data[k] || data[k].length > (k === 'request' ? 1200 : 254));
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) invalid.push('email');
      if (invalid.length) return { status: 'invalid', fields: [...new Set(invalid)] };
      const existing = rows.get(data.id);
      if (existing && fields.some(k => existing[k] !== data[k])) return { status: 'conflict' };
      if (existing && notices.has(data.id)) return { status: 'duplicate' };
      if (!existing && fault === 'sheet') return { status: 'sheet_failed' };
      if (!existing) rows.set(data.id, { ...data, notification: 'pending' });
      if (fault === 'notice') return { status: 'notice_failed' };
      notices.set(data.id, { id: data.id, text: `Please review the inquiry from ${data.name}.` });
      rows.get(data.id).notification = 'ready';
      return { status: existing ? 'recovered' : 'recorded' };
    }
    function snapshot() {
      return { rows: [...rows.values()].map(x => ({ ...x })), notices: [...notices.values()].map(x => ({ ...x })) };
    }
    function csv() {
      const safe = value => {
        let s = String(value);
        if (/^[\s]*[=+@-]/.test(s) || /^[\t\r\n]/.test(s)) s = "'" + s;
        return '"' + s.replaceAll('"', '""') + '"';
      };
      return [['id', 'name', 'email', 'request', 'notification'], ...snapshot().rows.map(r => [r.id, r.name, r.email, r.request, r.notification])].map(row => row.map(safe).join(',')).join('\r\n');
    }
    return { accept, snapshot, csv };
  }
  if (typeof module !== 'undefined') module.exports = { createIntake };
  else root.IntakeDemo = { createIntake };
})(typeof globalThis !== 'undefined' ? globalThis : this);
