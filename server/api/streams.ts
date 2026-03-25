// server/api/streams.ts
export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig()

    // Obtener token
    const auth = await $fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      body: {
        client_id: config.twitchClientId,
        client_secret: config.twitchClientSecret,
        grant_type: 'client_credentials'
      }
    })

    // Decimos a TS que es un objeto con access_token
    const access_token = (auth as { access_token: string }).access_token

    // Devolver directamente la respuesta de Twitch
    return await $fetch('https://api.twitch.tv/helix/streams?first=6', {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Client-Id': config.twitchClientId
      }
    })

  } catch (err) {
    console.error('ERROR TWITCH:', err)
    return []
  }
})