const getFormspreeEndpoint = () => {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    throw new Error("VITE_FORMSPREE_ENDPOINT saknas.");
  }

  return endpoint;
};

export const submitForm = async (formData: FormData) => {
  const response = await fetch(getFormspreeEndpoint(), {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Formuläret kunde inte skickas.");
  }
};
