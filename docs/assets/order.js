document.addEventListener("DOMContentLoaded", function () {
  const planSelect = document.getElementById("order-plan");
  if (!planSelect) return;

  const dateWrapper = document.getElementById("rent-date-wrapper");
  const deliverySelect = document.getElementById("order-delivery");
  const itemPriceEl = document.getElementById("item-price");
  const deliveryPriceEl = document.getElementById("delivery-price");
  const totalPriceEl = document.getElementById("total-price");
  const confirmBtn = document.getElementById("confirm-order-btn");
  const successMsg = document.getElementById("order-success");

  const plans = {
    rent_week: { name: "Аренда экрана FS-1 на 1 неделю", price: 14990, isRent: true },
    rent_month: { name: "Аренда экрана FS-1 на 1 месяц", price: 49990, isRent: true },
    rent_year: { name: "Аренда экрана FS-1 на 1 год", price: 499000, isRent: true },
    buy: { name: "Покупка экрана FS-1 в собственность", price: 499000, isRent: false }
  };

  // Читаем тариф из URL (?plan=...)
  const urlParams = new URLSearchParams(window.location.search);
  const selectedParam = urlParams.get("plan");
  if (selectedParam && plans[selectedParam]) {
    planSelect.value = selectedParam;
  }

  function formatRub(num) {
    return num.toLocaleString("ru-RU") + " ₽";
  }

  function updateOrder() {
    const currentPlan = plans[planSelect.value];
    const deliveryCost = parseInt(deliverySelect.value, 10);

    // Показываем выбор даты только для аренды
    dateWrapper.style.display = currentPlan.isRent ? "block" : "none";

    itemPriceEl.textContent = formatRub(currentPlan.price);
    deliveryPriceEl.textContent = formatRub(deliveryCost);
    totalPriceEl.textContent = formatRub(currentPlan.price + deliveryCost);
  }

  planSelect.addEventListener("change", updateOrder);
  deliverySelect.addEventListener("change", updateOrder);

  if (confirmBtn) {
    confirmBtn.addEventListener("click", function (e) {
      e.preventDefault();
      successMsg.style.display = "block";
    });
  }

  updateOrder();
});
