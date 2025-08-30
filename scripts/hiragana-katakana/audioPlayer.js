const audioCache = {}

export function playSound(soundId) {
    if (!soundId) return

    if (!audioCache[soundId]) {
        const audio = new Audio(`../midia/audios/mp3/${soundId}.mp3`)

        audio.addEventListener('error', () => {
            audio.src = `../midia/audios/ogg/${soundId}.ogg`;
            audio.play().catch(() => {
                // audio.src = `../midia/audios/wav/${soundId}.wav`;
                // audio.play().catch(() => {});
            });
        });

        audioCache[soundId] = audio
    }

    const audio = audioCache[soundId]
    audio.currentTime = 0
    audio.play().catch(() => {})
}
