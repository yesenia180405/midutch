export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig();
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

    // Obtener categorías
    const gamesRes = await $fetch<{ data: { id: string; name: string; box_art_url: string }[] }>(
      "https://api.twitch.tv/helix/games/top?first=8&language=es",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Client-Id": config.twitchClientId,
        },
      },
    );

    // Obtener streams para cruzar viewers y tags
    const streamsRes = await $fetch<{ data: { game_id: string; viewer_count: number; tags: string[] }[] }>(
      "https://api.twitch.tv/helix/streams?first=100&language=es",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Client-Id": config.twitchClientId,
        },
      },
    );

    const games = gamesRes.data;
    const streams = streamsRes.data;

    // Cruzar datos
    const result = games.map((game) => {
      const gameStreams = streams.filter((s) => s.game_id === game.id);
      const viewer_count = gameStreams.reduce((acc, s) => acc + s.viewer_count, 0);
      const tags = [...new Set(gameStreams.flatMap((s) => s.tags ?? []))].slice(1, 3);

      return {
        ...game,
        box_art_url: game.box_art_url.replace("{width}", "285").replace("{height}", "380"),
        viewer_count,
        tags,
      };
    });

    return result;
  } catch (err) {
    console.error("ERROR CATEGORIES:", err);
    return [];
  }
});