// server/api/streams.ts

interface TwitchStream {
  user_id: string;
  user_name: string;
  game_name: string;
  title: string;
  viewer_count: number;
  thumbnail_url: string;
  type: string;
}

interface TwitchUser {
  id: string;
  profile_image_url: string;
}

export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig();

    // Obtener token de Twitch
    const auth = await $fetch<{ access_token: string }>(
      "https://id.twitch.tv/oauth2/token",
      {
        method: "POST",
        body: {
          client_id: config.twitchClientId,
          client_secret: config.twitchClientSecret,
          grant_type: "client_credentials",
        },
      },
    );

    const access_token = auth.access_token;

    // Obtener streams en vivo
    const streamsRes = await $fetch<{ data: TwitchStream[] }>(
      "https://api.twitch.tv/helix/streams?first=6",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Client-Id": config.twitchClientId,
        },
      },
    );

    const streams = streamsRes.data;

    // Obtener info de los usuarios (solo imagen de perfil)
    const userIds = streams.map((s) => s.user_id).join("&id=");
    const usersRes = await $fetch<{ data: TwitchUser[] }>(
      `https://api.twitch.tv/helix/users?id=${userIds}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Client-Id": config.twitchClientId,
        },
      },
    );

    const users = usersRes.data;

    // Combinar thumbnail y perfil
    const result = streams.map((s) => {
      const user = users.find((u) => u.id === s.user_id);
      return {
        ...s,
        profile_image_url: user?.profile_image_url || "",
      };
    });

    return result;
  } catch (err) {
    console.error("ERROR TWITCH:", err);
    return [];
  }
});