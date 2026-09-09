/* Minimal consent-based measurement. Never accepts form contents or arbitrary properties. */
(function () {
  'use strict';
  const id = 'G-NMTD1VH8DZ';
  const preferenceKey = 'jonnylab_demo_analytics_v1';
  const allowedEvents = new Set(['demo_view', 'demo_sample_success', 'demo_sample_issue', 'demo_contact_click']);
  const allowedIssues = new Set(['invalid', 'conflict', 'duplicate', 'sheet_failed', 'notice_failed']);
  const params = new URLSearchParams(location.search);
  const test = params.get('analytics_test') === '1' || !['jonnylab.app', 'www.jonnylab.app'].includes(location.hostname);
  const campaign = {
    source: ['x', 'community', 'requested_email'].includes(params.get('utm_source')) ? params.get('utm_source') : 'unattributed',
    medium: ['social', 'community', 'email'].includes(params.get('utm_medium')) ? params.get('utm_medium') : 'none',
    name: params.get('utm_campaign') === 'jonnylab_14d_20260910' ? 'jonnylab_14d_20260910' : 'unattributed',
    content: /^intake_demo_d(0[1-9]|1[0-4])$/.test(params.get('utm_content') || '') ? params.get('utm_content') : 'unspecified'
  };
  const sent = new Set();
  let enabled = false;
  function storedChoice() {
    try { const p = JSON.parse(localStorage.getItem(preferenceKey)); return p && p.expires > Date.now() ? p.choice : null; } catch { return null; }
  }
  function saveChoice(choice) {
    try { localStorage.setItem(preferenceKey, JSON.stringify({choice, expires: Date.now() + 90 * 86400000})); } catch { /* In-memory choice still works. */ }
  }
  function track(event, issue) {
    if (!enabled || !allowedEvents.has(event)) return;
    if (event === 'demo_sample_issue' && !allowedIssues.has(issue)) return;
    const key = event + (event === 'demo_sample_issue' ? ':' + issue : '');
    if (sent.has(key)) return;
    sent.add(key);
    const properties = {
      send_to: id,
      page_location: 'https://jonnylab.app/automation-demo/',
      page_title: 'Inquiry Intake Setup Demo',
      page_referrer: '',
      demo_id: 'inquiry_intake_v1',
      campaign_source: test ? 'qa' : campaign.source,
      campaign_medium: test ? 'internal' : campaign.medium,
      campaign_name: test ? 'measurement_qa' : campaign.name,
      campaign_content: campaign.content,
      debug_mode: test,
      traffic_type: test ? 'internal' : 'external'
    };
    if (event === 'demo_sample_issue') properties.issue_type = issue;
    window.gtag('event', event, properties);
  }
  function enable() {
    if (enabled) return;
    enabled = true;
    window['ga-disable-' + id] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {analytics_storage:'granted', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'});
    window.gtag('js', new Date());
    window.gtag('config', id, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 7776000,
      cookie_update: false,
      page_location: 'https://jonnylab.app/automation-demo/',
      page_title: 'Inquiry Intake Setup Demo',
      page_referrer: '',
      ignore_referrer: true,
      debug_mode: test
    });
    const script = document.createElement('script');
    script.async = true;
    script.referrerPolicy = 'no-referrer';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
    track('demo_view');
  }
  const controls = document.getElementById('measurement-controls');
  const status = document.getElementById('measurement-status');
  const choices = document.getElementById('measurement-choices');
  function display(choice) {
    status.textContent = choice === 'allow' ? 'Optional analytics on. Sample form content stays in this browser.' : choice === 'deny' ? 'Optional analytics off. The demo works normally.' : 'May we measure visits and sample outcomes with Google Analytics? No form contents are sent. Optional analytics uses cookies; declining does not affect the demo.';
    choices.hidden = choice === 'allow' || choice === 'deny';
  }
  document.getElementById('measurement-allow').addEventListener('click', () => { saveChoice('allow'); enable(); display('allow'); });
  document.getElementById('measurement-deny').addEventListener('click', () => {
    saveChoice('deny');
    if (enabled) {
      enabled = false;
      window['ga-disable-' + id] = true;
      // Drop the loaded third-party runtime. No previously denied actions are replayed.
      location.reload();
      return;
    }
    display('deny');
  });
  document.getElementById('measurement-change').addEventListener('click', () => { choices.hidden = false; status.textContent = 'Choose optional analytics. Turning it off reloads the demo and clears the current sample session.'; });
  window.JonnyDemoMetrics = Object.freeze({ track });
  controls.hidden = false;
  const choice = storedChoice();
  if (choice === 'allow') enable();
  display(choice);
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => link.addEventListener('click', () => track('demo_contact_click')));
})();
