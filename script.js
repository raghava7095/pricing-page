// Pricing Toggle
const pricingToggle = document.getElementById('pricing-toggle');
const priceAmounts = document.querySelectorAll('.price .amount');
const priceDurations = document.querySelectorAll('.price .duration');

// Currency and Unit Customization
const currencySelect = document.getElementById('currency');
const unitSelect = document.getElementById('unit');

// Set initial pricing values
const monthlyPrices = {
  USD: ['$9', '$19', '$49'],
  EUR: ['€8', '€17', '€44'],
  GBP: ['£7', '£15', '£39'],
  INR: ['₹699', '₹1499', '₹3499']
};

const annualPrices = {
  USD: ['$99', '$199', '$499'],
  EUR: ['€88', '€177', '€444'],
  GBP: ['£77', '£155', '£389'],
  INR: ['₹6999', '₹14999', '₹34999']
};

function updatePricing(currency, isAnnual) {
  const prices = isAnnual ? annualPrices[currency] : monthlyPrices[currency];
  const duration = isAnnual ? '/ year' : '/ month';

  priceAmounts.forEach((amount, index) => {
    amount.textContent = prices[index];
  });

  priceDurations.forEach((durationElement) => {
    durationElement.textContent = duration;
  });
}

// Set initial pricing
updatePricing('USD', false);

// Update pricing on currency or unit change
currencySelect.addEventListener('change', () => {
  const currency = currencySelect.value;
  const isAnnual = unitSelect.value === 'annually';
  updatePricing(currency, isAnnual);
});

unitSelect.addEventListener('change', () => {
  const currency = currencySelect.value;
  const isAnnual = unitSelect.value === 'annually';
  updatePricing(currency, isAnnual);
});

// Toggle pricing on checkbox change
pricingToggle.addEventListener('change', () => {
  const isAnnual = pricingToggle.checked;
  const currency = currencySelect.value;
  updatePricing(currency, isAnnual);
});
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach((card) => {
  const planDetails = card.querySelector('.plan-details');

  card.addEventListener('mouseenter', () => {
    planDetails.classList.add('show');
  });

  card.addEventListener('mouseleave', () => {
    planDetails.classList.remove('show');
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});