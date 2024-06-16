import Stripe from "stripe";
import { H3Event } from "h3";
import { createError } from "h3";


const stripe = () => {
    const config = useRuntimeConfig();
    return new Stripe(config.stripePrivateKey, {
        apiVersion: "2024-04-10",
        typescript: true,
    });
};

export const createCheckoutSession = async (lineItems: Stripe.Checkout.SessionCreateParams.LineItem[], mode:
    Stripe.Checkout.SessionCreateParams.Mode,
    successUrl: string,
    cancelUrl: string
) => {
    const session = stripe();
    return session.checkout.sessions.create({
        line_items: lineItems,
        mode: mode,
        success_url: successUrl,
        cancel_url: cancelUrl,
    });
}

export const constructStripeSession = async (body: any, sig: string) => {
    try {
        return stripe().webhooks.constructEvent(body, sig, useRuntimeConfig().stripeWebhookSecret);
    } catch (err: any) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return new Error('Webhook signature verification failed');
    }
};

export const handleStripeEvent = async (stripeEvent: Stripe.Event,
    event: H3Event) => {
    try {
        switch (stripeEvent.type) {
            // Handles PaymentIntent events
            case 'payment_intent.succeeded':
                // Handle successful payment
                break;

            case 'payment_intent.processing':
                // Handle processing payment
                break;

            case 'payment_intent.payment_failed':
                // Handle failed payment
                break;

            // Handles Subscription events
            case 'checkout.session.completed':
                // Handle successful checkout
                break;
            case 'invoice.paid':
                // Handle successful invoice payment
                break;
            case 'invoice.payment_failed':
                // Handle failed invoice payment
                break;
            default:
                // Handle other payment statuses
                break;
        }
    } catch (err: any) {
        console.log(`⚠️  Error handling Stripe event.`, err.message);
        return new Error('Error handling Stripe event');
    }
};


