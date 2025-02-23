const defaultHeaders = {
  "Content-Type": "application/json",
};

export const fetcher = async (api: string, options?: RequestInit) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}${api}`,
      {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options?.headers,
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};
