import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro' : 'price_1TnkH7F6vt2w9Ngd0mMwRflT',
    'seeker_premium' : 'price_1Tnl69F6vt2w9NgdrcrWIZxJ', 
    'recruiter_growth': 'price_1Tnl6mF6vt2w9NgdYR02CTZ5', 
    'recruiter_enterprise': 'price_1Tnl7JF6vt2w9NgdQtjsOgne',
}