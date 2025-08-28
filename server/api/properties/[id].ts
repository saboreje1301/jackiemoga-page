export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const tokkoBrokerUrl = config.tokkoBrokerUrl;
  const tokkoBrokerApiKey = config.tokkoBrokerApiKey;

  // Obtén el id de la ruta
  const id = event.context.params.id;

  // Construye la URL para obtener una sola propiedad
  const apiUrl = `${tokkoBrokerUrl}/property/${id}/?format=json&key=${tokkoBrokerApiKey}&lang=es_ar`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to fetch property: ${response.statusText}`,
        data: errorText,
      });
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});