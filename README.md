# TracksipPolicy

Privacy Policy, Terms of Service, and Account Deletion page for the Tracksip app.

Live at: https://tracksip.online/policy (also https://looqs.online/siptrack/policy)

## Stack

Pure HTML + Node.js built-in `http` module. No dependencies, no build step.

## Local preview

```bash
node server.js
# open http://localhost:5002
```

## Server setup (first time)

```bash
# On the VPS
mkdir -p /root/apps/tracksip-policy
cd /root/apps/tracksip-policy
git clone https://github.com/lorenzoog00/TracksipPolicy.git .

# Install systemd service
cp deploy/tracksip-policy.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable tracksip-policy
systemctl start tracksip-policy
```

Add to nginx (before the existing `/siptrack` location block):

```nginx
location = /siptrack/policy {
    proxy_pass http://localhost:5002;
    proxy_set_header Host $host;
}
```

Then: `nginx -t && systemctl reload nginx`

## GitHub Secrets needed

- `SSH_HOST` — 5.78.198.194
- `SSH_USER` — root
- `SSH_PRIVATE_KEY` — your private key
