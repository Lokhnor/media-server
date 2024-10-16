import { ensureDir } from "https://deno.land/std@0.218.0/fs/ensure_dir.ts";
import { copy } from "https://deno.land/std@0.218.0/fs/copy.ts";

const services = ["qbittorrent", "jellyfin", "prowlarr", "radarr", "sonarr"];

for (const service of services) {
    const src = `/home/vimmy/media-server/${service}/config`;
    const dest = `/shared/data/${service}`;

    try {
        await ensureDir(dest);
        console.log(`Created directory: ${dest}`);
    } catch (error) {
        console.error(`Error ensuring directory ${dest}:`, error);
        continue;
    }

    try {
        await copy(src, dest, { overwrite: true });
        console.log(`Copied ${service} config to ${dest}`);
    } catch (error) {
        console.error(`Error copying ${service}:`, error);
    }
}
