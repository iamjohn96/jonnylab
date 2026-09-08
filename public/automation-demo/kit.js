'use strict';
let model = IntakeDemo.createIntake();
const byId = id => document.getElementById(id);
const labels = { id: 'Inquiry ID', name: 'Name', email: 'Email', request: 'Request' };
const statuses = {
  recorded: 'Recorded. An internal notification preview is ready.',
  invalid: 'Please check the required fields.',
  conflict: 'This ID has different content. Check the original or use a new ID.',
  duplicate: 'Already processed. No duplicate row or notification was created.',
  sheet_failed: 'Simulated record failure. No row or notification was created. Switch to normal processing and retry.',
  notice_failed: 'The inquiry was recorded; its notification is pending. Switch to normal processing and retry.',
  recovered: 'Retry complete. The existing row was kept and its notification is ready.'
};
function el(tag, text) { const e = document.createElement(tag); e.textContent = text; return e; }
function render() {
  const state = model.snapshot();
  byId('count').textContent = state.rows.length;
  byId('rows').replaceChildren();
  for (const r of state.rows) {
    const row = el('tr', '');
    [r.id, `${r.name}\n${r.email}`, r.request, r.notification === 'ready' ? 'Ready' : 'Pending'].forEach(v => row.append(el('td', v)));
    byId('rows').append(row);
  }
  if (!state.rows.length) { const row=el('tr',''); const cell=el('td','No inquiries recorded yet.'); cell.colSpan=4;cell.className='empty';row.append(cell);byId('rows').append(row); }
  byId('notices').replaceChildren(...state.notices.map(n => el('li', `${n.id} · ${n.text}`)));
  if (!state.notices.length) byId('notices').append(el('li','Notifications appear here after processing.'));
  byId('csv').value = model.csv();
}
byId('intake-form').addEventListener('submit', event => {
  event.preventDefault();
  for (const key of Object.keys(labels)) byId(key).removeAttribute('aria-invalid');
  const result = model.accept(Object.fromEntries(Object.keys(labels).map(k => [k,byId(k).value])),byId('fault').value);
  byId('status').textContent = statuses[result.status] + (result.fields ? ' Check: ' + result.fields.map(k=>labels[k]).join(', ') : '');
  byId('status').dataset.state = result.status;
  if(result.fields){ for(const key of result.fields) byId(key).setAttribute('aria-invalid','true'); byId(result.fields[0]).focus(); }
  render();
});
document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => {
  const second = button.dataset.example === 'second';
  const data={id:second?'SAMPLE-002':'SAMPLE-001',name:second?'Morgan':'Alex',email:button.dataset.example==='missing'?'':second?'morgan@example.com':'alex@example.com',request:second?'Could you explain your branding process?':'We need a website for our studio. Could you send an estimate?'};
  for(const [key,value] of Object.entries(data)){byId(key).value=value;byId(key).removeAttribute('aria-invalid');}
  byId('fault').value='';
  byId('status').textContent='Example loaded. Process it to see the result.';
  delete byId('status').dataset.state;
}));
byId('reset').addEventListener('click',()=>{model=IntakeDemo.createIntake();render();byId('status').textContent='Demo records and notifications cleared.';delete byId('status').dataset.state;});
render();
