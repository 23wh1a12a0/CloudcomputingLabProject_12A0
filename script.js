const provider = document.getElementById("provider");
const service = document.getElementById("service");
const hours = document.getElementById("hours");
const storage = document.getElementById("storage");
const total = document.getElementById("total");
const computeCost = document.getElementById("computeCost");
const storageCost = document.getElementById("storageCost");
const providerName = document.getElementById("providerName");

const providerNames = {
  "1": "AWS (sample rates)",
  "0.95": "Microsoft Azure (sample rates)",
  "0.92": "Google Cloud (sample rates)"
};

function money(amount) {
  return "$" + amount.toFixed(2);
}

function calculateEstimate() {
  const providerFactor = Number(provider.value);
  const baseCompute = Number(service.value);
  const dailyHours = Math.min(24, Math.max(1, Number(hours.value) || 1));
  const storageGB = Math.max(0, Number(storage.value) || 0);

  // Sample model: compute base price assumes 24 hours/day.
  const compute = baseCompute * (dailyHours / 24) * providerFactor;
  const storagePrice = storageGB * 0.10 * providerFactor;
  const monthlyTotal = compute + storagePrice;

  computeCost.textContent = money(compute);
  storageCost.textContent = money(storagePrice);
  total.innerHTML = `${money(monthlyTotal)} <small>/ month</small>`;
  providerName.textContent = providerNames[provider.value];
}

document.getElementById("calculate").addEventListener("click", calculateEstimate);
provider.addEventListener("change", calculateEstimate);
service.addEventListener("change", calculateEstimate);
hours.addEventListener("input", calculateEstimate);
storage.addEventListener("input", calculateEstimate);
calculateEstimate();
