import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Enter a valid corporate or personal email address."),
  subject: z.string().min(4, "Subject must be at least 4 characters."),
  message: z.string().min(20, "Message must contain at least 20 characters."),
});

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  rememberMe: z.boolean().optional(),
});

const strongPassword = z
  .string()
  .min(10, "Password must be at least 10 characters.")
  .regex(/[A-Z]/, "Must include at least one uppercase letter.")
  .regex(/[0-9]/, "Must include at least one number.")
  .regex(/[^A-Za-z0-9]/, "Must include at least one symbol.");

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required."),
    email: z.string().email("Enter a valid email address."),
    password: strongPassword,
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the Terms & Conditions." }),
    }),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter your registered account email."),
});

export const resetPasswordSchema = z
  .object({ password: strongPassword, confirmPassword: z.string() })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
