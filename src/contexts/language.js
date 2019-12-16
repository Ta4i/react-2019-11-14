import {createContext} from 'react'

export const {Provider, Consumer} = createContext('')

export const languageVars = {
  reviewFormHeading: {
    en: 'Leave your review',
    ru: 'Оставьте ваш отзыв',
  },
  reviewFormName: {
    en: 'Your name',
    ru: 'Ваше имя',
  },
  reviewFormRating: {
    en: 'Rating',
    ru: 'Рейтинг',
  },
  reviewFormButton: {
    en: 'Publish review',
    ru: 'Опубликовать отзыв',
  },

  cartSubTotal: {
    en: 'Sub-total',
    ru: 'Стоимость',
  },
  cartDeliveryHeading: {
    en: 'Delivery costs',
    ru: 'Стоимость доставки',
  },
  cartDeliveryValue: {
    en: 'Free',
    ru: 'Бесплатно',
  },
  cartTotal: {
    en: 'Total',
    ru: 'Общая сумма',
  },
  cartButton: {
    en: 'Order',
    ru: 'Заказать',
  },

  cartForm: {
    en: 'Form',
    ru: 'Заполните форму',
  },
  cartFormUserName: {
    en: 'User name',
    ru: 'Имя оформителя заказа',
  },
  cartFormButton: {
    en: 'Send order',
    ru: 'Отправить заказ',
  },

  orderSuccessMsg: {
    en: 'Thanks',
    ru: 'Спасибо',
  },
}
