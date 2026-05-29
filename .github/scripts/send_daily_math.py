import json, os, random, urllib.request, urllib.error
from datetime import date

API_KEY   = os.environ["MAILCHIMP_API_KEY"]
LIST_ID   = os.environ["MAILCHIMP_LIST_ID"]
SERVER    = os.environ.get("MAILCHIMP_SERVER", "us12")
BASE_URL  = f"https://{SERVER}.api.mailchimp.com/3.0"

# ── Pick today's problem ───────────────────────────────────────────────────────

with open("lessons.json") as f:
    data = json.load(f)

# Seed with today's date so a re-run sends the same problem
rng = random.Random(date.today().toordinal())

subjects    = data["subjects"]
subject_key = rng.choice(list(subjects.keys()))
subject     = subjects[subject_key]
lesson      = rng.choice(subject["lessons"])

# ── Build email HTML ───────────────────────────────────────────────────────────

steps_html = "".join(
    f"""
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="32" valign="top" style="padding-right:14px;">
              <div style="width:28px;height:28px;border-radius:50%;background:#f5f5f7;
                          display:flex;align-items:center;justify-content:center;
                          font-size:12px;font-weight:700;color:#6e6e73;
                          line-height:28px;text-align:center;">{i+1}</div>
            </td>
            <td valign="top">
              <div style="font-size:13px;font-weight:600;color:#1d1d1f;margin-bottom:4px;">{step['action']}</div>
              <div style="font-size:15px;font-family:'Courier New',monospace;color:#0071e3;margin-bottom:4px;">{step['math']}</div>
              <div style="font-size:12px;color:#6e6e73;">{step.get('eli5','')}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>"""
    for i, step in enumerate(lesson["steps"])
)

today_str  = date.today().strftime("%A, %B %-d")
site_url   = "https://guadalu-pe.github.io/morning-math/"

html_body = f"""
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Header -->
        <tr><td style="padding-bottom:24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-size:16px;font-weight:700;color:#1d1d1f;letter-spacing:-0.02em;">
                  &#9679; Morning Math
                </span>
              </td>
              <td align="right">
                <span style="font-size:13px;color:#6e6e73;">{today_str}</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Problem card -->
        <tr><td style="background:#ffffff;border-radius:18px;padding:36px 40px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#0071e3;margin-bottom:10px;">
            {subject.get('label', subject_key.title())}
          </div>
          <div style="font-size:26px;font-weight:700;letter-spacing:-0.03em;color:#1d1d1f;margin-bottom:10px;line-height:1.15;">
            {lesson['concept']}
          </div>
          <div style="font-size:17px;color:#1d1d1f;margin-bottom:8px;line-height:1.5;font-weight:500;">
            {lesson['problem']}
          </div>
          <div style="font-size:14px;color:#6e6e73;margin-bottom:32px;line-height:1.6;">
            {lesson.get('desc', '')}
          </div>

          <!-- Steps -->
          <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#6e6e73;margin-bottom:16px;">
            Step-by-step solution
          </div>
          <table width="100%" cellpadding="0" cellspacing="0">
            {steps_html}
          </table>

          <!-- Answer -->
          <div style="margin-top:28px;padding:20px;background:#f5f5f7;border-radius:12px;text-align:center;">
            <div style="font-size:12px;font-weight:600;color:#6e6e73;margin-bottom:6px;">Answer</div>
            <div style="font-size:22px;font-weight:700;color:#0071e3;font-family:'Courier New',monospace;">
              {lesson['answer']}
            </div>
          </div>

          <!-- CTA -->
          <div style="margin-top:28px;text-align:center;">
            <a href="{site_url}" style="display:inline-block;padding:13px 28px;background:#0071e3;color:#ffffff;
               border-radius:980px;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:-0.01em;">
              Try another problem ↗
            </a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:24px;text-align:center;">
          <p style="font-size:12px;color:#a1a1a6;margin:0;">
            one concept · one problem · every morning<br>
            <a href="*|UNSUB|*" style="color:#a1a1a6;">unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
"""

# ── Mailchimp API helpers ──────────────────────────────────────────────────────

import base64
auth = base64.b64encode(f"anystring:{API_KEY}".encode()).decode()
headers = {"Authorization": f"Basic {auth}", "Content-Type": "application/json"}

def mc_post(path, body):
    req = urllib.request.Request(
        f"{BASE_URL}{path}",
        data=json.dumps(body).encode(),
        headers=headers,
        method="POST",
    )
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())

def mc_put(path, body):
    req = urllib.request.Request(
        f"{BASE_URL}{path}",
        data=json.dumps(body).encode(),
        headers=headers,
        method="PUT",
    )
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())

# ── Create campaign, set content, send ────────────────────────────────────────

print(f"Creating campaign: {lesson['concept']}")

campaign = mc_post("/campaigns", {
    "type": "regular",
    "recipients": {"list_id": LIST_ID},
    "settings": {
        "subject_line": f"☀️ {lesson['concept']} — Morning Math",
        "preview_text": lesson["problem"],
        "from_name": "Morning Math",
        "reply_to": "hello@morningmath.com",
    },
})

campaign_id = campaign["id"]
print(f"Campaign ID: {campaign_id}")

mc_put(f"/campaigns/{campaign_id}/content", {"html": html_body})
print("Content set.")

mc_post(f"/campaigns/{campaign_id}/actions/send", {})
print(f"Sent! Subject: {lesson['concept']}")
