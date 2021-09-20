# Marketplace website application

> This is project for marketplace

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Notes](#notes)
- [Setup](#setup)
- [Usage](#usage)

## Technologies Used

- Reactjs
- Typescipt

## Features

- Localization: create file locale and use i18next.
- Display list product and pagination.
- Display detail one product.
- Add to cart.
- Authentication: register, login, logout.
- Login with facebook.
- Payment with stripe:
  - Frontend createPaymentMethod with stripe and receive id from stripe.
  - Frontend send request payment to backend.
  - Backend receive request and create paymentIntents and send id from front end.
  - If need action required, frontend send confirmCardPayment to stripe after send check request to backend.

## Notes

-

## Setup

- Install node module:
  ### `npm install`

## Usage

- Run project:
  ### `npm start`
- Build project:
  ### `npm run build`
