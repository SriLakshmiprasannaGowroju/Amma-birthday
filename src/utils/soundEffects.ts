// Web Audio API sound effects and ambient birthday melody synthesizer

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMelodyPlaying: boolean = false;
  private melodyTimer: ReturnType<typeof setInterval> | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Soft magical wind puff when blowing candles
  playBlowSound() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const bufferSize = Math.floor(ctx.sampleRate * 0.45);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pink noise simulation for gentle breath
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.95 * b1 + white * 0.08;
        b2 = 0.85 * b2 + white * 0.15;
        data[i] = (b0 + b1 + b2) * (1 - i / bufferSize);
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.4);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.42);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch {
      // Graceful fallback
    }
  }

  // Delicate magical sparkle chime
  playSparkleChime() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.55);
      });
    } catch {
      // Graceful fallback
    }
  }

  // Celebratory fanfare arpeggio when cutting cake
  playCelebrationSound() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const melody = [
        { freq: 523.25, time: 0 },       // C5
        { freq: 659.25, time: 0.12 },    // E5
        { freq: 783.99, time: 0.24 },    // G5
        { freq: 1046.50, time: 0.38 },   // C6
        { freq: 1318.51, time: 0.54 },   // E6
      ];

      melody.forEach(({ freq, time }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + time);

        gain.gain.setValueAtTime(0, ctx.currentTime + time);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + time + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + 0.7);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + time);
        osc.stop(ctx.currentTime + time + 0.75);
      });
    } catch {
      // Graceful fallback
    }
  }

  // Ambient gentle music box melody fallback
  startSynthesizerMelody() {
    if (this.isMelodyPlaying) return;
    const ctx = this.getContext();
    if (!ctx) return;

    this.isMelodyPlaying = true;
    // Lullaby notes (pentatonic sweet melody: C4, D4, E4, G4, A4, C5, E5, D5)
    const score = [
      { f: 523.25, d: 0.6 },
      { f: 587.33, d: 0.6 },
      { f: 659.25, d: 0.9 },
      { f: 523.25, d: 0.6 },
      { f: 783.99, d: 0.9 },
      { f: 659.25, d: 0.9 },
      { f: 880.00, d: 0.9 },
      { f: 1046.5, d: 1.2 },
    ];
    let noteIndex = 0;

    const playNext = () => {
      if (!this.isMelodyPlaying) return;
      const note = score[noteIndex];
      noteIndex = (noteIndex + 1) % score.length;

      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.f, ctx.currentTime);

        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + note.d + 0.1);
      } catch {
        // ignore
      }
    };

    playNext();
    this.melodyTimer = setInterval(playNext, 850);
  }

  stopSynthesizerMelody() {
    this.isMelodyPlaying = false;
    if (this.melodyTimer) {
      clearInterval(this.melodyTimer);
      this.melodyTimer = null;
    }
  }
}

export const soundManager = new SoundManager();
