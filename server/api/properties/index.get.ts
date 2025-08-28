export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const tokkoBrokerUrl = config.tokkoBrokerUrl;
  const tokkoBrokerApiKey = config.tokkoBrokerApiKey;


  const apiUrl = `${tokkoBrokerUrl}/property/?format=json&key=${tokkoBrokerApiKey}&lang=es_ar`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to fetch properties: ${response.statusText}`,
        data: errorText,
      });
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});