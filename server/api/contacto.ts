export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const tokkoBrokerUrl = config.tokkoBrokerUrl;
  const tokkoBrokerApiKey = config.tokkoBrokerApiKey;

  const apiUrlcontact = `${tokkoBrokerUrl}/webcontact/?key=${tokkoBrokerApiKey}`;

  const body = await readBody(event);

  const payload: any = {
    text: body.text,
    name: body.name,
    email: body.email,
    phone: body.phone,
    tags: body.tags,
    cellphone: body.cellphone,
  };

  if (body.properties) {
    payload.properties = body.properties;
  }
  if (body.developments) {
    payload.developments = body.developments;
  }

  try {
    const response = await fetch(apiUrlcontact, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { error: true, status: response.status, message: errorText, statusText: response.statusText };
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    return { error: true, message: `Failed to connect to Tokko Broker API: ${error?.message || 'Unknown error'}` };
  }
});

