import {createContext} from 'react'

export const {Provider, Consumer} = createContext({})

export const interValuesReviews = {
  reviewTitle: {
    en: 'Leave your review',
    ru: 'Напишите Ваш отзыв',
  },
  reviewButton: {
    en: 'PUBLISH REVIEW',
    ru: 'ОТПРАВИТЬ ОТЗЫВ',
  },
  reviewName: {
    en: 'Your name',
    ru: 'Ваше имя',
  },
  reviewRating: {
    en: 'Rating',
    ru: 'Оценка',
  },
}

export const interValuesCart = {
  cartDeliveryCostName: {
    en: 'Delivery costs',
    ru: 'Цена доставки',
  },
  cartDeliveryCost: {
    en: 'FREE',
    ru: 'БЕСПЛАТНО',
  },
  cartButton: {
    en: 'Order',
    ru: 'Заказать',
  },
  cartSubTotal: {
    en: 'sub-total',
    ru: 'Цена блюд',
  },
  cartTotal: {
    en: 'Total',
    ru: 'Итого, с доставкой',
  },
}

export const interValuesOrderForm = {
  formName: {
    en: '',
    ru: '',
  },
  formUserName: {
    en: 'User name',
    ru: 'Ваше имя',
  },
  formButton: {
    en: 'Send order',
    ru: 'Отправить заказ',
  },
}

export const interValuesOrderComplete = {
  orderFormMessage: {
    en: 'Thanks ',
    ru: 'Огромное вам спасибо!!!',
  },
}
