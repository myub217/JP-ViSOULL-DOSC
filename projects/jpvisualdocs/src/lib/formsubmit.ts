// src/lib/formsubmit.ts
export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (payload: ContactFormPayload): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Unknown error');
    }

    return {
      success: true,
      message: data.message || 'Form submitted successfully',
    };
  } catch (err: any) {
    console.error('[❌ submitContactForm]', err);
    return {
      success: false,
      error: err.message || 'Failed to submit form',
    };
  }
};