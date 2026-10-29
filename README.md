# CloudWise — Cloud Cost Estimator

A beginner-friendly cloud computing project built using HTML, CSS, and JavaScript. It estimates an illustrative monthly cost based on cloud provider, compute service, daily usage hours, and storage.

## Features
- Choose a sample cloud provider (AWS, Microsoft Azure, or Google Cloud)
- Choose a virtual machine tier
- Enter daily usage hours and storage in GB
- View monthly estimated total and compute/storage breakdown
- Responsive layout for desktop and mobile

## Run locally
1. Download or clone this repository.
2. Open `index.html` in any modern browser.
3. Change the values and click **Calculate estimate**.

No server or API key is required.

## Publish using GitHub Pages
1. Create a GitHub repository named `cloudwise-cost-estimator`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish the website; open the URL shown on the Pages settings screen.

## How the calculation works
- Compute estimate = selected monthly compute base price × (daily hours ÷ 24) × provider factor
- Storage estimate = storage GB × $0.10 × provider factor
- Monthly estimate = compute estimate + storage estimate

The values are illustrative sample rates for an academic demonstration. They are not official provider pricing. Real cloud bills depend on region, instance type, uptime, discounts, networking, taxes, and other services.

## Technologies
- HTML5: structure
- CSS3: layout and responsive styling
- JavaScript: input handling and cost calculations
- GitHub Pages: static website hosting

## Suggested assignment title
**CloudWise: A Cloud Computing Cost Estimation Web Application**
