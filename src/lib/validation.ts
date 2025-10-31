/**
 * Validation utilities for form submissions
 */

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validate phone number (basic validation for Mongolian format)
 * Accepts: 99999999, 9999-9999, +976 9999-9999
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return false;
  // Remove spaces, dashes, and plus signs for validation
  const cleaned = phone.replace(/[\s\-+]/g, '');
  // Check if it's 8 digits (Mongolian mobile) or starts with 976 (country code)
  return /^(\d{8}|976\d{8})$/.test(cleaned);
}

/**
 * Sanitize string input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

/**
 * Validate required fields
 */
export function validateRequired(data: Record<string, any>, requiredFields: string[]): string | null {
  for (const field of requiredFields) {
    const value = data[field];
    if (value === undefined || value === null || value === '') {
      return `${field} is required`;
    }
  }
  return null;
}

/**
 * Validate number range
 */
export function isValidNumber(value: any, min?: number, max?: number): boolean {
  const num = Number(value);
  if (isNaN(num)) return false;
  if (min !== undefined && num < min) return false;
  if (max !== undefined && num > max) return false;
  return true;
}

/**
 * Validate file type (basic check by extension)
 */
export function isValidFileType(filename: string, allowedTypes: string[]): boolean {
  if (!filename) return false;
  const extension = filename.toLowerCase().split('.').pop();
  return allowedTypes.some(type => extension?.includes(type.toLowerCase()));
}

/**
 * Validate file size (in bytes)
 */
export function isValidFileSize(size: number, maxSize: number): boolean {
  return size > 0 && size <= maxSize;
}

/**
 * Validate and sanitize form data
 */
export function sanitizeFormData<T extends Record<string, any>>(data: T): T {
  const sanitized = { ...data };
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key]);
    }
  }
  
  return sanitized;
}

