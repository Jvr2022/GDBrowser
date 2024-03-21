// This file used to contain GDPS settings, but they've been relocated to servers.json.
// You're welcome to enable/disable features here for smoother local usage, without encountering rate limits.

module.exports = {
    port: 2000, // Port to host the website on

    params: {   // Always send this data to the servers
        secret: 'Wmfd2893gb7',
        gameVersion: '21',
        binaryVersion: '35',
        gdbrowser: '1'
    },

    rateLimiting: true, // Enables rate limiting to prevent api spam, feel free to disable for private use.
    ipForwarding: true, // Forwards 'x-real-ip' to the servers. (requested by robtop)

    cacheMapPacks: true, // Caches map packs to speed up loading. Useful if they're rarely updated.
    cacheAccountIDs: true, // Caches account IDs to save an extra request to the servers.
    cachePlayerIcons: true, // Caches player icons to speed up loading. Changing your in-game icon may take time to update on the site.
}
