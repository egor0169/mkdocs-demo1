• # Оформление договора
# Оформление договора

**Этапы оформления:** `1. Параметры` → `2. Доставка` → `3. Оплата` → `4. Готово`

<div class="grid" markdown="1">

<div class="order-box" markdown="1">

### 1. Ваш заказ

<label for="order-plan">Выбранная позиция</label>
<select id="order-plan">
  <option value="rent_week">Аренда экрана FS-1 на 1 неделю — 14 990 ₽</option>
  <option value="rent_month" selected>Аренда экрана FS-1 на 1 месяц — 49 990 ₽</option>
  <option value="rent_year">Аренда экрана FS-1 на 1 год — 290 990 ₽</option>
  <option value="buy">Покупка экрана FS-1 в собственность — 499 000 ₽</option>
</select>

<div id="rent-date-wrapper">
  <label for="rent-start-date">Дата начала арендного договора</label>
  <input type="date" id="rent-start-date" value="2026-11-25">
  <small>Срок аренды начнет отсчитываться с момента получения оборудования в выбранный день.</small>
</div>

<label for="client-contact">Название заведения и телефон</label>
<input type="text" id="client-contact" placeholder="Например: Кафе «Бриошь», +7 (999) 000-00-00">

</div>

<div class="order-box" markdown="1">

### 2. Доставка и итог

<label for="order-delivery">Способ доставки</label>
<select id="order-delivery">
  <option value="1000" selected>Курьером по Москве и МО — 1 000 ₽</option>
  <option value="0">Самовывоз со склада (ул. Технологическая, д. 1) — 0 ₽</option>
</select>

<p>Стоимость позиции: <strong id="item-price">49 990 ₽</strong></p>
<p>Стоимость доставки: <strong id="delivery-price">1 000 ₽</strong></p>

<div class="total-price">
  Итого: <span id="total-price">50 990 ₽</span>
</div>

<p style="margin-top: 1rem;">
  Оформляя заказ, вы соглашаетесь с правилами сделки:<br>
  <a href="../docs/" target="_blank">Условия аренды ↗️</a> | 
  <a href="../docs/" target="_blank">Условия покупки и возврата ↗️</a>
</p>

<a href="#" id="confirm-order-btn" class="md-button md-button--primary" style="width: 100%; text-align: center; margin-top: 0.5rem;">Подтвердить заказ →</a>

<div id="order-success" style="display: none; margin-top: 1rem; padding: 0.8rem; border-radius: 6px; background: rgba(0, 150, 136, 0.15); border: 1px solid #009688;">
  ✅ <strong>Заявка сформирована!</strong> Менеджер свяжется с вами в течение 15 минут для подтверждения договора.
</div>

</div>

</div>
