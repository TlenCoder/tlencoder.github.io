// ========== DATA ==========

const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const FLAT_NAMES  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const ROOT_NOTES = [
  { name: 'A',  index: 9,  useFlats: false },
  { name: 'Bb', index: 10, useFlats: true  },
  { name: 'B',  index: 11, useFlats: false },
  { name: 'C',  index: 0,  useFlats: false },
  { name: 'Db', index: 1,  useFlats: true  },
  { name: 'D',  index: 2,  useFlats: false },
  { name: 'Eb', index: 3,  useFlats: true  },
  { name: 'E',  index: 4,  useFlats: false },
  { name: 'F',  index: 5,  useFlats: true  },
  { name: 'F#', index: 6,  useFlats: false },
  { name: 'Gb', index: 6,  useFlats: true  },
  { name: 'G',  index: 7,  useFlats: false },
  { name: 'Ab', index: 8,  useFlats: true  },
];

// Major scale intervals (semitones from root)
const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];

const DIATONIC_MODES = [
  { degree: 'I',    name: 'Ionian',    subtitle: 'Major Diatonic Scale',  quality: 'major' },
  { degree: 'II',   name: 'Dorian',    subtitle: 'minor',                 quality: 'minor' },
  { degree: 'III',  name: 'Phrygian',  subtitle: 'minor',                 quality: 'minor' },
  { degree: 'IV',   name: 'Lydian',    subtitle: 'major',                 quality: 'major' },
  { degree: 'V',    name: 'Mixolydian', subtitle: '',                     quality: 'major' },
  { degree: 'VI',   name: 'Aeolian',   subtitle: 'Natural Minor',         quality: 'minor' },
  { degree: 'VII',  name: 'Locrian',   subtitle: 'half diminished',       quality: 'dim'   },
];

// Harmonic minor intervals
const HARMONIC_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 11];

const HARMONIC_MINOR_MODES = [
  { degree: 'i',    name: 'Harmonic Minor',   subtitle: 'Aeolian Maj7 / Mohammedan', quality: 'minor' },
  { degree: 'ii',   name: 'Locrian #6',       subtitle: 'half diminished',            quality: 'dim'   },
  { degree: 'III',  name: 'Ionian #5',        subtitle: 'augmented',                  quality: 'aug'   },
  { degree: 'iv',   name: 'Dorian #4',        subtitle: 'Romanian / Misheberak',      quality: 'minor' },
  { degree: 'V',    name: 'Phrygian Major',   subtitle: 'Mixolydian b2',              quality: 'major' },
  { degree: 'VI',   name: 'Lydian #2',        subtitle: 'major',                      quality: 'major' },
  { degree: 'vii',  name: 'Ultralocrian',     subtitle: 'diminished',                 quality: 'dim'   },
];

const OTHER_SCALES = [
  { name: 'Melodic Minor',  subtitle: 'ascending',                    intervals: [0, 2, 3, 5, 7, 9, 11] },
  { name: 'Whole Tone',     subtitle: 'augmented / symmetrical',      intervals: [0, 2, 4, 6, 8, 10] },
  { name: 'Diminished',     subtitle: 'full diminished / symmetrical', intervals: [0, 2, 3, 5, 6, 8, 9, 11] },
];

const PENTATONIC_SCALES = [
  { name: 'Major Pentatonic', subtitle: '', intervals: [0, 2, 4, 7, 9] },
  { name: 'Minor Pentatonic', subtitle: '', intervals: [0, 3, 5, 7, 10] },
];

// Chord definitions grouped into columns
const CHORD_GROUPS = [
  {
    id: 'major-chords',
    label: 'Major Chords',
    chords: [
      { name: 'Major Triad',      abbr: '',      intervals: [0, 4, 7] },
      { name: 'Seven Chord',      abbr: '7',     intervals: [0, 4, 7, 10],          subtitle: 'Dominant 7' },
      { name: 'Major Seven Chord', abbr: 'maj7', intervals: [0, 4, 7, 11],          subtitle: 'Major 7' },
      { name: 'Six Chord',        abbr: '6',     intervals: [0, 4, 7, 9],           subtitle: 'Major 6' },
      { name: 'Suspended 4 Chord', abbr: 'sus4', intervals: [0, 5, 7],              subtitle: 'sus4' },
      { name: 'Nine Chord',       abbr: '9',     intervals: [0, 4, 7, 10, 14] },
      { name: 'Add 9 Chord',      abbr: 'add9',  intervals: [0, 4, 7, 14],          subtitle: 'add9' },
      { name: 'Eleven Chord',     abbr: '11',    intervals: [0, 4, 7, 10, 14, 17] },
      { name: 'Thirteen Chord',   abbr: '13',    intervals: [0, 4, 7, 10, 14, 17, 21] },
    ]
  },
  {
    id: 'aug-chords',
    label: 'Augmented Chords',
    chords: [
      { name: 'Augmented Triad',      abbr: 'aug',  intervals: [0, 4, 8] },
      { name: 'Seven Sharp Five Chord', abbr: '7#5', intervals: [0, 4, 8, 10],      subtitle: '7#5' },
    ]
  },
  {
    id: 'minor-chords',
    label: 'Minor Chords',
    chords: [
      { name: 'Minor Triad',            abbr: 'm',     intervals: [0, 3, 7] },
      { name: 'Minor Seven Chord',      abbr: 'm7',    intervals: [0, 3, 7, 10],     subtitle: 'm7' },
      { name: 'Minor Major Seven Chord', abbr: 'mMaj7', intervals: [0, 3, 7, 11],    subtitle: 'Mmaj7' },
      { name: 'Minor Six Chord',        abbr: 'm6',    intervals: [0, 3, 7, 9],      subtitle: 'm6' },
      { name: 'Minor Nine Chord',       abbr: 'm9',    intervals: [0, 3, 7, 10, 14] },
      { name: 'Major Six Add Nine Chord', abbr: '6/9', intervals: [0, 4, 7, 9, 14],  subtitle: '6/9' },
      { name: 'Seven Sharp Nine Chord', abbr: '7#9',   intervals: [0, 4, 7, 10, 15], subtitle: '7#9' },
      { name: 'Seven Flat Nine Chord',  abbr: '7b9',   intervals: [0, 4, 7, 10, 13], subtitle: '7b9' },
    ]
  },
  {
    id: 'dim-chords',
    label: 'Diminished Chords',
    chords: [
      { name: 'Diminished Triad',         abbr: 'dim',  intervals: [0, 3, 6] },
      { name: 'Diminished Seventh Chord',  abbr: 'dim7', intervals: [0, 3, 6, 9],    subtitle: 'dim7' },
      { name: 'Minor Seven Flat Five',     abbr: 'm7b5', intervals: [0, 3, 6, 10],   subtitle: 'm7b5 / half dim' },
      { name: 'Seven Flat Five Chord',     abbr: '7b5',  intervals: [0, 4, 6, 10],   subtitle: '7b5' },
    ]
  },
];

// Key signatures
const KEY_SIGNATURES = {
  'C': '',  'G': '1\u266F', 'D': '2\u266F', 'A': '3\u266F',
  'E': '4\u266F', 'B': '5\u266F', 'F#': '6\u266F',
  'F': '1\u266D', 'Bb': '2\u266D', 'Eb': '3\u266D', 'Ab': '4\u266D',
  'Db': '5\u266D', 'Gb': '6\u266D',
};


// ========== MUSIC THEORY ENGINE ==========

/**
 * Determine if a semitone index should use flat spelling.
 * Semitones 1 (Db), 3 (Eb), 5 (F), 8 (Ab), 10 (Bb) prefer flats.
 */
const USE_FLATS_BY_SEMITONE = [false, true, false, true, false, true, false, false, true, false, true, false];

// Letter names and their natural semitones for degree-based spelling
const LETTER_NAMES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const LETTER_SEMITONES = [0, 2, 4, 5, 7, 9, 11];

/**
 * Spell a note given its target letter index and semitone.
 * Returns the letter with the correct accidental (e.g. "Eb", "F#").
 */
function spellNote(letterIndex, targetSemitone) {
  const li = ((letterIndex % 7) + 7) % 7;
  const letter = LETTER_NAMES[li];
  const natural = LETTER_SEMITONES[li];
  const diff = ((targetSemitone - natural) % 12 + 12) % 12;
  if (diff === 0) return letter;
  if (diff === 1) return letter + '#';
  if (diff === 11) return letter + 'b';
  if (diff === 2) return letter + '##';
  if (diff === 10) return letter + 'bb';
  return letter;
}

/**
 * Spell a 7-note scale using correct letter-per-degree naming.
 * Each degree gets the next letter in the musical alphabet.
 * Returns null if any note would require a double accidental.
 */
function spellScaleByDegree(rootLetterIndex, rootSemitone, intervals) {
  const notes = intervals.map((interval, i) => {
    const target = (rootSemitone + interval) % 12;
    return spellNote(rootLetterIndex + i, target);
  });
  if (notes.some(n => n.includes('##') || n.includes('bb'))) {
    return null;
  }
  return notes;
}

/**
 * Get the note name for a given semitone index (0-11).
 */
function getNoteName(semitone, useFlats) {
  const idx = ((semitone % 12) + 12) % 12;
  return useFlats ? FLAT_NAMES[idx] : SHARP_NAMES[idx];
}

/**
 * Rotate a parent scale to produce a mode starting at the given degree index.
 * Returns intervals relative to the new root.
 */
function getModeIntervals(parentScale, modeIndex) {
  const offset = parentScale[modeIndex];
  return parentScale.map(s => ((s - offset) + 12) % 12).sort((a, b) => a - b);
}

/**
 * Get note names for a scale given its intervals, root semitone, and spelling preference.
 */
function getScaleNoteNames(intervals, rootSemitone, useFlats) {
  return intervals.map(i => getNoteName(rootSemitone + i, useFlats));
}

/**
 * Get note names for a chord. Intervals can exceed 12 (compound intervals).
 */
function getChordNoteNames(intervals, rootSemitone, useFlats) {
  return intervals.map(i => getNoteName(rootSemitone + (i % 12), useFlats));
}

/**
 * Get relative minor root name. Relative minor is 9 semitones above major root.
 */
function getRelativeMinorName(majorRoot) {
  const minorIndex = (majorRoot.index + 9) % 12;
  return getNoteName(minorIndex, majorRoot.useFlats) + 'm';
}

/**
 * Get key signature string for a root note.
 */
function getKeySignature(rootName) {
  return KEY_SIGNATURES[rootName] || KEY_SIGNATURES[rootName.replace('#', '\u266F')] || '';
}

// ========== INTERVAL LABELS ==========

// Default interval labels by semitone offset
const INTERVAL_LABELS = {
  0: 'R',
  1: 'b2',
  2: '2',
  3: 'b3',
  4: '3',
  5: '4',
  6: 'b5',
  7: '5',
  8: 'b6',
  9: '6',
  10: 'b7',
  11: '7',
  // Compound intervals (for 9, 11, 13 chords)
  13: 'b9',
  14: '9',
  15: '#9',
  17: '11',
  18: '#11',
  21: '13',
};

/**
 * Get context-aware interval label for a semitone offset.
 * Ambiguous intervals (6 = b5 or #4, 8 = #5 or b6) are resolved
 * by checking whether the scale already contains the natural version.
 *
 * @param {number} semitones - semitone offset from root
 * @param {number[]} allIntervals - all intervals in the current scale/chord
 */
function getIntervalLabel(semitones, allIntervals) {
  // Compound intervals for chords (9ths, 11ths, 13ths)
  if (semitones > 12 && INTERVAL_LABELS[semitones]) {
    return INTERVAL_LABELS[semitones];
  }

  const s = semitones % 12;

  // Semitone 6: #4 if scale has natural 5 (7), b5 if it doesn't
  if (s === 6) {
    return allIntervals.includes(7) ? '#4' : 'b5';
  }

  // Semitone 8: #5 only in augmented contexts (no natural 5 and no b5),
  //             b6 if scale has a natural 5 or b5
  if (s === 8) {
    return (allIntervals.includes(7) || allIntervals.includes(6)) ? 'b6' : '#5';
  }

  return INTERVAL_LABELS[s] || String(semitones);
}

// ========== RENDERING ==========

let currentRoot = null;

/**
 * Render note badges with stacked interval labels.
 * @param {string[]} noteNames - Note name strings
 * @param {string[]} intervalLabels - Interval label for each note
 */
function stepLabel(semitones) {
  if (semitones === 1) return 'H';
  if (semitones === 2) return 'W';
  if (semitones === 3) return 'WH';
  return String(semitones);
}

function renderNoteBadges(noteNames, intervalLabels, intervals) {
  let html = '';
  noteNames.forEach((n, i) => {
    const isRoot = (i === 0);
    const cls = isRoot ? 'note-badge root-note' : 'note-badge';
    const label = intervalLabels[i] || '';
    html += `<span class="${cls}"><span class="note-name">${n}</span><span class="note-interval">${label}</span></span>`;
    // Add step indicator between notes
    if (intervals && i < noteNames.length - 1) {
      const gap = ((intervals[i + 1] - intervals[i]) % 12 + 12) % 12;
      html += `<span class="step-label">${stepLabel(gap)}</span>`;
    }
  });
  return html;
}

function renderModeTable(tableId, parentScale, modes, root) {
  const table = document.getElementById(tableId);
  let html = '';

  const parentLetterIndex = LETTER_NAMES.indexOf(root.name[0]);

  modes.forEach((mode, i) => {
    const modeRoot = (root.index + parentScale[i]) % 12;
    const modeIntervals = getModeIntervals(parentScale, i);
    // Degree-based spelling: each mode root letter is offset from the parent root letter
    const modeRootLetterIndex = (parentLetterIndex + i) % 7;
    // Try degree-based spelling first; fall back to simple flat/sharp if double accidentals arise
    let notes = (modeIntervals.length === 7)
      ? spellScaleByDegree(modeRootLetterIndex, modeRoot, modeIntervals)
      : null;
    if (!notes) {
      const modeUseFlats = USE_FLATS_BY_SEMITONE[modeRoot];
      notes = getScaleNoteNames(modeIntervals, modeRoot, modeUseFlats);
    }
    // Interval labels showing quality relative to major scale (e.g. b3, b7)
    const labels = modeIntervals.map(s => getIntervalLabel(s, modeIntervals));
    // Add the octave note (root repeated)
    notes.push(notes[0]);
    labels.push('R');
    const fullIntervals = [...modeIntervals, 12];

    const subtitleHtml = mode.subtitle ? `<span class="mode-subtitle">${mode.subtitle}</span>` : '';
    const qualityClass = `quality-${mode.quality}`;

    html += `<tr class="${qualityClass}">
      <td class="mode-degree">${mode.degree}</td>
      <td class="mode-name">${mode.name}${subtitleHtml}</td>
      <td><div class="mode-notes">${renderNoteBadges(notes, labels, fullIntervals)}</div></td>
    </tr>`;
  });

  table.innerHTML = html;
}

function renderOtherScalesTable(tableId, scales, root) {
  const table = document.getElementById(tableId);
  let html = '';

  scales.forEach(scale => {
    const notes = getScaleNoteNames(scale.intervals, root.index, root.useFlats);
    // Interval labels showing quality relative to major scale
    const labels = scale.intervals.map(s => getIntervalLabel(s, scale.intervals));
    const subtitleHtml = scale.subtitle ? `<span class="mode-subtitle">${scale.subtitle}</span>` : '';

    html += `<tr>
      <td class="mode-name">${scale.name}${subtitleHtml}</td>
      <td><div class="mode-notes">${renderNoteBadges(notes, labels, scale.intervals)}</div></td>
    </tr>`;
  });

  table.innerHTML = html;
}

function renderChords(root) {
  CHORD_GROUPS.forEach(group => {
    const container = document.getElementById(group.id);
    let html = `<h3>${group.label}</h3>`;

    group.chords.forEach(chord => {
      const notes = getChordNoteNames(chord.intervals, root.index, root.useFlats);
      const labels = chord.intervals.map(s => getIntervalLabel(s, chord.intervals));
      const chordRootName = getNoteName(root.index, root.useFlats);
      const displayName = chordRootName + chord.abbr;
      const subtitleHtml = chord.subtitle ? `<span class="chord-subtitle">${chord.subtitle}</span>` : '';

      html += `<div class="chord-entry">
        <div class="chord-header">
          <span class="chord-name">${chord.name}</span>
          <span class="chord-abbr">${displayName}</span>
        </div>
        <div class="chord-notes">${renderNoteBadges(notes, labels)}</div>
      </div>`;
    });

    container.innerHTML = html;
  });
}

function renderKeyInfo(root) {
  const keySig = document.getElementById('key-sig');
  const relInfo = document.getElementById('relative-info');

  const sig = getKeySignature(root.name);
  keySig.textContent = sig ? `Key: ${root.name} (${sig})` : `Key: ${root.name}`;
  relInfo.textContent = `Relative minor: ${getRelativeMinorName(root)}`;
}

// ========== INTERVALS SECTION ==========

const ALL_INTERVALS = [
  { semitones: 0,  name: 'Unison',           abbr: 'R',   altAbbr: null },
  { semitones: 1,  name: 'Minor 2nd',        abbr: 'b2',  altAbbr: null },
  { semitones: 2,  name: 'Major 2nd',        abbr: '2',   altAbbr: null },
  { semitones: 3,  name: 'Minor 3rd',        abbr: 'b3',  altAbbr: '#2' },
  { semitones: 4,  name: 'Major 3rd',        abbr: '3',   altAbbr: null },
  { semitones: 5,  name: 'Perfect 4th',      abbr: '4',   altAbbr: null },
  { semitones: 6,  name: 'Tritone',          abbr: 'b5',  altAbbr: '#4' },
  { semitones: 7,  name: 'Perfect 5th',      abbr: '5',   altAbbr: null },
  { semitones: 8,  name: 'Minor 6th',        abbr: 'b6',  altAbbr: '#5' },
  { semitones: 9,  name: 'Major 6th',        abbr: '6',   altAbbr: null },
  { semitones: 10, name: 'Minor 7th',        abbr: 'b7',  altAbbr: null },
  { semitones: 11, name: 'Major 7th',        abbr: '7',   altAbbr: null },
];

function renderIntervals(root) {
  const container = document.getElementById('intervals-text');
  let html = '';

  ALL_INTERVALS.forEach(interval => {
    const noteName = getNoteName(root.index + interval.semitones, root.useFlats);
    const altHtml = interval.altAbbr
      ? `<span class="interval-alt">also ${interval.altAbbr}</span>`
      : '';
    const isRoot = interval.semitones === 0;
    const badgeCls = isRoot ? 'note-badge root-note' : 'note-badge';

    html += `<div class="interval-entry">
      <div class="interval-header">
        <span class="interval-abbr">${interval.abbr}</span>
        <span class="interval-name">${interval.name}${altHtml}</span>
      </div>
      <div class="interval-note">
        <span class="${badgeCls}"><span class="note-name">${noteName}</span><span class="note-interval">${interval.semitones}st</span></span>
        <span class="interval-semitones">${interval.semitones} semitone${interval.semitones !== 1 ? 's' : ''}</span>
      </div>
    </div>`;
  });

  container.innerHTML = html;
}

// ========== GUITAR FRETBOARD ==========

const STANDARD_TUNING = [
  { name: 'E', semitone: 4 },  // string 1 (high E)
  { name: 'B', semitone: 11 }, // string 2
  { name: 'G', semitone: 7 },  // string 3
  { name: 'D', semitone: 2 },  // string 4
  { name: 'A', semitone: 9 },  // string 5
  { name: 'E', semitone: 4 },  // string 6 (low E)
];

const FRET_COUNT = 24;

// Color map for intervals on fretboard
const INTERVAL_COLORS = {
  0:  '#e94560', // Root - red
  1:  '#6b7280', // b2 - gray
  2:  '#3b82f6', // 2 - blue
  3:  '#8b5cf6', // b3 - purple
  4:  '#f59e0b', // 3 - amber
  5:  '#14b8a6', // 4 - teal
  6:  '#ef4444', // b5/#4 - red-orange
  7:  '#22c55e', // 5 - green
  8:  '#a855f7', // b6/#5 - violet
  9:  '#06b6d4', // 6 - cyan
  10: '#f97316', // b7 - orange
  11: '#ec4899', // 7 - pink
};

let fbSelectedRoot = null;   // semitone index of fretboard root, null = use global
// 4 interval selectors: each is null (none) or a semitone offset; index 0 can also be 'all'
let fbSelectedIntervals = [null, null, null, null];

// ========== LINKED HIGHLIGHT SYSTEM ==========
// MIDI-style absolute note numbers: E2=40, E4=64, E6=88
const STRING_BASE_NOTES = [64, 59, 55, 50, 45, 40];  // E4, B3, G3, D3, A2, E2 (strings 1-6)
const PIANO_RANGE = { low: 40, high: 88 };  // E2 to E6

// Store selected positions: fretboard uses string-fret keys, piano uses absNote
let linkedFretboardPositions = new Set();  // "string-fret" keys like "0-3" for string 0, fret 3
let linkedPianoNotes = new Set();  // absolute note numbers clicked on piano

function getAbsoluteNote(stringIndex, fret) {
  return STRING_BASE_NOTES[stringIndex] + fret;
}

function isBlackKey(semitone) {
  return [1, 3, 6, 8, 10].includes(semitone % 12);
}

const fbMobileQuery = window.matchMedia('(max-width: 599px)');

function getActiveIntervals() {
  // Collect the set of active interval semitones from all 4 selectors
  const hasAll = fbSelectedIntervals[0] === 'all';
  if (hasAll) return 'all';
  const active = new Set();
  for (const sel of fbSelectedIntervals) {
    if (sel !== null && sel !== 'all') active.add(sel);
  }
  return active.size > 0 ? active : null; // null = none selected = show nothing highlighted
}

function buildDotHtml(absSemitone, fbRoot, useFlats) {
  const noteName = getNoteName(absSemitone, useFlats);
  const interval = ((absSemitone - fbRoot) % 12 + 12) % 12;
  const intervalLabel = INTERVAL_LABELS[interval] || '';
  const isRoot = interval === 0;

  const active = getActiveIntervals();
  const allMode = active === 'all';
  const noneSelected = active === null;
  const isSelected = !allMode && !noneSelected && active.has(interval);
  const showFull = allMode || isSelected || (noneSelected && isRoot) || (!noneSelected && isRoot);

  if (showFull) {
    const color = INTERVAL_COLORS[interval];
    const glow = (isSelected || isRoot) ? `box-shadow:0 0 8px ${color};` : '';
    const scale = isSelected ? ' fb-dot-highlight' : '';
    return `<div class="fb-dot${scale}" style="background:${color};${glow}">
      <span class="fb-dot-note">${noteName}</span>
      <span class="fb-dot-interval">${intervalLabel}</span>
    </div>`;
  }
  return `<div class="fb-dot fb-dot-dim">
    <span class="fb-dot-note">${noteName}</span>
  </div>`;
}

const DOT_FRETS = new Set([3, 5, 7, 9, 12, 15, 17, 19, 21, 24]);
const DOUBLE_DOT_FRETS = new Set([12, 24]);

function renderFretboardHorizontal(root, fbRoot, useFlats) {
  let html = '<div class="fb-row fb-header-row">';
  html += '<div class="fb-string-label"></div>';
  for (let f = 0; f <= FRET_COUNT; f++) {
    html += `<div class="fb-fret${f === 0 ? ' fb-nut-fret' : ''}">${f}</div>`;
  }
  html += '</div>';

  STANDARD_TUNING.forEach(str => {
    html += '<div class="fb-row">';
    html += `<div class="fb-string-label">${str.name}</div>`;
    for (let fret = 0; fret <= FRET_COUNT; fret++) {
      const cellClass = fret === 0 ? 'fb-cell fb-nut-cell' : 'fb-cell';
      const abs = (str.semitone + fret) % 12;
      html += `<div class="${cellClass}">${buildDotHtml(abs, fbRoot, useFlats)}</div>`;
    }
    html += '</div>';
  });

  html += '<div class="fb-row fb-dots-row">';
  html += '<div class="fb-string-label"></div>';
  for (let f = 0; f <= FRET_COUNT; f++) {
    const marker = DOUBLE_DOT_FRETS.has(f) ? '••' : DOT_FRETS.has(f) ? '•' : '';
    html += `<div class="fb-fret-dot">${marker}</div>`;
  }
  html += '</div>';

  return html;
}

function renderFretboardVertical(root, fbRoot, useFlats) {
  // Vertical: strings as columns (low E on left), frets as rows (nut on top)
  const strings = [...STANDARD_TUNING].reverse(); // low E first (left)

  // String label header row
  let html = '<div class="fbv-row fbv-header-row">';
  html += '<div class="fbv-fret-label"></div>';
  strings.forEach(str => {
    html += `<div class="fbv-string-label">${str.name}</div>`;
  });
  html += '<div class="fbv-dot-col"></div>';
  html += '</div>';

  // Fret rows
  for (let fret = 0; fret <= FRET_COUNT; fret++) {
    const rowClass = fret === 0 ? 'fbv-row fbv-nut-row' : 'fbv-row';
    html += `<div class="${rowClass}">`;
    html += `<div class="fbv-fret-label">${fret}</div>`;
    strings.forEach(str => {
      const abs = (str.semitone + fret) % 12;
      html += `<div class="fbv-cell">${buildDotHtml(abs, fbRoot, useFlats)}</div>`;
    });
    const marker = DOUBLE_DOT_FRETS.has(fret) ? '••' : DOT_FRETS.has(fret) ? '•' : '';
    html += `<div class="fbv-dot-col">${marker}</div>`;
    html += '</div>';
  }

  return html;
}

function renderFretboard(root) {
  const container = document.getElementById('fretboard');
  const fbRoot = fbSelectedRoot !== null ? fbSelectedRoot : root.index;
  const useFlats = root.useFlats;
  const vertical = fbMobileQuery.matches;

  container.className = vertical ? 'fb-vertical' : '';
  container.innerHTML = vertical
    ? renderFretboardVertical(root, fbRoot, useFlats)
    : renderFretboardHorizontal(root, fbRoot, useFlats);
}

function renderFretboardButtons(root) {
  const rootContainer = document.getElementById('fb-root-buttons');

  // Root note buttons
  let rootHtml = '';
  ROOT_NOTES.forEach(note => {
    const isActive = fbSelectedRoot === note.index;
    const cls = isActive ? 'fb-btn fb-btn-active' : 'fb-btn';
    rootHtml += `<button class="${cls}" data-fb-root="${note.index}" data-fb-name="${note.name}">${note.name}</button>`;
  });
  rootContainer.innerHTML = rootHtml;

  // Interval buttons (4 rows)
  const fbRoot = fbSelectedRoot !== null ? fbSelectedRoot : root.index;
  for (let row = 0; row < 4; row++) {
    const container = document.getElementById(`fb-interval-buttons-${row}`);
    const selected = fbSelectedIntervals[row];
    let intHtml = '';

    // None button (default) for all rows
    intHtml += `<button class="fb-btn${selected === null ? ' fb-btn-active' : ''}" data-fb-interval="none" data-fb-row="${row}">None</button>`;

    // Interval buttons
    for (let i = 0; i < 12; i++) {
      const label = INTERVAL_LABELS[i] || String(i);
      const noteName = getNoteName(fbRoot + i, root.useFlats);
      const isActive = selected === i;
      const color = INTERVAL_COLORS[i];
      const cls = isActive ? 'fb-btn fb-btn-interval fb-btn-active' : 'fb-btn fb-btn-interval';
      intHtml += `<button class="${cls}" data-fb-interval="${i}" data-fb-row="${row}" style="--int-color:${color}">${label}<span class="fb-btn-sub">${noteName}</span></button>`;
    }

    // All button only on first row (last position)
    if (row === 0) {
      intHtml += `<button class="fb-btn${selected === 'all' ? ' fb-btn-active' : ''}" data-fb-interval="all" data-fb-row="${row}">All</button>`;
    }

    container.innerHTML = intHtml;
  }
}

// ========== PIANO KEYBOARD ==========

function renderPianoKeyboard(root) {
  const container = document.getElementById('piano-keyboard');
  const useFlats = root.useFlats;

  // Build white keys first, track positions for black key placement
  let whiteKeyHtml = '';
  let blackKeyHtml = '';
  let whiteKeyCount = 0;

  for (let absNote = PIANO_RANGE.low; absNote <= PIANO_RANGE.high; absNote++) {
    const semitone = absNote % 12;
    const octave = Math.floor(absNote / 12) - 1;
    const noteName = getNoteName(semitone, useFlats);

    if (!isBlackKey(semitone)) {
      // White key
      const isC = semitone === 0;
      const octaveLabel = isC ? `<span class="piano-octave-label">C${octave}</span>` : '';
      whiteKeyHtml += `<div class="piano-key" data-abs-note="${absNote}" data-semitone="${semitone}">
        <span class="piano-key-label">${noteName}</span>
        ${octaveLabel}
      </div>`;
      whiteKeyCount++;
    } else {
      // Black key - calculate position based on white keys before it
      // Count white keys from PIANO_RANGE.low to this note
      let whitesBefore = 0;
      for (let n = PIANO_RANGE.low; n < absNote; n++) {
        if (!isBlackKey(n % 12)) whitesBefore++;
      }
      blackKeyHtml += `<div class="piano-key black" data-abs-note="${absNote}" data-semitone="${semitone}" style="left: calc(${whitesBefore} * var(--white-key-width) - var(--black-key-width) / 2)">
        <span class="piano-key-label">${noteName}</span>
      </div>`;
    }
  }

  container.innerHTML = whiteKeyHtml + blackKeyHtml;
}

function updateLinkedHighlights() {
  const linkedFretboard = document.getElementById('linked-fretboard');
  const pianoKeyboard = document.getElementById('piano-keyboard');

  // Clear all highlights
  linkedFretboard.querySelectorAll('.fb-dot.linked-highlight').forEach(el => {
    el.classList.remove('linked-highlight');
  });
  pianoKeyboard.querySelectorAll('.piano-key.highlighted').forEach(el => {
    el.classList.remove('highlighted');
  });

  // Collect all absNotes that should be highlighted on piano
  const pianoNotesToHighlight = new Set(linkedPianoNotes);

  // Highlight exact fretboard positions and collect their absNotes for piano
  linkedFretboardPositions.forEach(posKey => {
    const [stringIndex, fret] = posKey.split('-').map(Number);
    const absNote = getAbsoluteNote(stringIndex, fret);
    pianoNotesToHighlight.add(absNote);

    // Highlight only this exact position on fretboard
    linkedFretboard.querySelectorAll(`.fb-dot[data-string="${stringIndex}"][data-fret="${fret}"]`).forEach(el => {
      el.classList.add('linked-highlight');
    });
  });

  // Highlight piano keys
  pianoNotesToHighlight.forEach(absNote => {
    pianoKeyboard.querySelectorAll(`.piano-key[data-abs-note="${absNote}"]`).forEach(el => {
      el.classList.add('highlighted');
    });
  });

  // Update chord display
  updateChordDisplay();
}

function clearLinkedHighlights() {
  linkedFretboardPositions.clear();
  linkedPianoNotes.clear();
  updateLinkedHighlights();
}

// ========== CHORD DETECTION ==========

const CHORD_PATTERNS = [
  // Extended chords (check these first - more specific)
  // 13th chords
  { intervals: [0, 4, 7, 10, 2, 5, 9], name: '13', type: 'Dominant 13' },
  { intervals: [0, 4, 7, 11, 2, 5, 9], name: 'maj13', type: 'Major 13' },
  { intervals: [0, 3, 7, 10, 2, 5, 9], name: 'm13', type: 'minor 13' },
  // 11th chords
  { intervals: [0, 4, 7, 10, 2, 5], name: '11', type: 'Dominant 11' },
  { intervals: [0, 4, 7, 11, 2, 5], name: 'maj11', type: 'Major 11' },
  { intervals: [0, 3, 7, 10, 2, 5], name: 'm11', type: 'minor 11' },
  { intervals: [0, 4, 7, 10, 2, 6], name: '9#11', type: 'Dominant 9#11' },
  // 9th chords
  { intervals: [0, 4, 7, 10, 2], name: '9', type: 'Dominant 9' },
  { intervals: [0, 4, 7, 11, 2], name: 'maj9', type: 'Major 9' },
  { intervals: [0, 3, 7, 10, 2], name: 'm9', type: 'minor 9' },
  { intervals: [0, 3, 7, 11, 2], name: 'mMaj9', type: 'minor-Major 9' },
  { intervals: [0, 4, 7, 9, 2], name: '6/9', type: 'Major 6/9' },
  { intervals: [0, 3, 7, 9, 2], name: 'm6/9', type: 'minor 6/9' },
  // Altered dominants
  { intervals: [0, 4, 7, 10, 1], name: '7b9', type: 'Dominant 7b9' },
  { intervals: [0, 4, 7, 10, 3], name: '7#9', type: 'Dominant 7#9' },
  { intervals: [0, 4, 6, 10], name: '7b5', type: 'Dominant 7b5' },
  { intervals: [0, 4, 8, 10], name: '7#5', type: 'Dominant 7#5' },
  { intervals: [0, 4, 6, 10, 1], name: '7b5b9', type: 'Dominant 7b5b9' },
  { intervals: [0, 4, 8, 10, 1], name: '7#5b9', type: 'Dominant 7#5b9' },
  { intervals: [0, 4, 6, 10, 3], name: '7b5#9', type: 'Dominant 7b5#9' },
  { intervals: [0, 4, 8, 10, 3], name: '7#5#9', type: 'Dominant 7#5#9' },
  { intervals: [0, 4, 7, 10, 6], name: '7#11', type: 'Dominant 7#11' },
  { intervals: [0, 4, 7, 10, 8], name: '7b13', type: 'Dominant 7b13' },
  { intervals: [0, 4, 6, 10, 2], name: '9b5', type: 'Dominant 9b5' },
  { intervals: [0, 4, 8, 10, 2], name: '9#5', type: 'Dominant 9#5' },
  // Seventh chords
  { intervals: [0, 4, 7, 11], name: 'maj7', type: 'Major 7' },
  { intervals: [0, 4, 7, 10], name: '7', type: 'Dominant 7' },
  { intervals: [0, 3, 7, 10], name: 'm7', type: 'minor 7' },
  { intervals: [0, 3, 6, 10], name: 'm7b5', type: 'half-diminished' },
  { intervals: [0, 3, 6, 9], name: 'dim7', type: 'diminished 7' },
  { intervals: [0, 3, 7, 11], name: 'mMaj7', type: 'minor-Major 7' },
  { intervals: [0, 4, 8, 11], name: 'maj7#5', type: 'Major 7#5' },
  { intervals: [0, 4, 6, 11], name: 'maj7b5', type: 'Major 7b5' },
  { intervals: [0, 5, 7, 10], name: '7sus4', type: 'Dominant 7sus4' },
  { intervals: [0, 2, 7, 10], name: '7sus2', type: 'Dominant 7sus2' },
  // Sixths
  { intervals: [0, 4, 7, 9], name: '6', type: 'Major 6' },
  { intervals: [0, 3, 7, 9], name: 'm6', type: 'minor 6' },
  // Add chords
  { intervals: [0, 4, 7, 2], name: 'add9', type: 'Major add9' },
  { intervals: [0, 3, 7, 2], name: 'madd9', type: 'minor add9' },
  { intervals: [0, 4, 7, 5], name: 'add11', type: 'Major add11' },
  { intervals: [0, 3, 7, 5], name: 'madd11', type: 'minor add11' },
  { intervals: [0, 4, 7, 9], name: 'add6', type: 'Major add6' },
  // Triads
  { intervals: [0, 4, 7], name: '', type: 'Major' },
  { intervals: [0, 3, 7], name: 'm', type: 'minor' },
  { intervals: [0, 3, 6], name: 'dim', type: 'diminished' },
  { intervals: [0, 4, 8], name: 'aug', type: 'augmented' },
  { intervals: [0, 5, 7], name: 'sus4', type: 'suspended 4' },
  { intervals: [0, 2, 7], name: 'sus2', type: 'suspended 2' },
  // Power chord & intervals
  { intervals: [0, 7], name: '5', type: 'Power chord' },
  { intervals: [0, 5], name: 'sus4 (no5)', type: 'Fourth interval' },
  { intervals: [0, 4], name: ' (no5)', type: 'Major third' },
  { intervals: [0, 3], name: 'm (no5)', type: 'minor third' },
];

function detectChord(absNotes) {
  if (absNotes.length < 2) return null;

  // Get unique pitch classes (0-11)
  const pitchClasses = [...new Set(absNotes.map(n => n % 12))].sort((a, b) => a - b);

  if (pitchClasses.length < 2) return null;

  let bestMatch = null;
  let bestScore = -Infinity;

  // Try each pitch class as potential root
  for (const rootPitch of pitchClasses) {
    // Calculate intervals from this root (mod 12)
    const intervals = pitchClasses.map(p => (p - rootPitch + 12) % 12).sort((a, b) => a - b);
    const intervalsSet = new Set(intervals);

    // Try to match against chord patterns
    for (const pattern of CHORD_PATTERNS) {
      // Normalize pattern intervals to 0-11
      const normalizedPattern = pattern.intervals.map(i => i % 12);
      const patternSet = new Set(normalizedPattern);

      // Check if all pattern intervals are present in our chord
      const allPatternPresent = normalizedPattern.every(i => intervalsSet.has(i));

      if (allPatternPresent) {
        // Calculate score:
        // - More pattern notes matched = better (prefer specific chords)
        // - Fewer extra notes = better
        // - Exact match gets bonus
        const extraNotes = intervals.filter(i => !patternSet.has(i)).length;
        const matchedNotes = normalizedPattern.length;
        const isExactMatch = extraNotes === 0 && intervals.length === normalizedPattern.length;

        // Score formula: prioritize larger chords, penalize extras, bonus for exact
        let score = matchedNotes * 10 - extraNotes * 3;
        if (isExactMatch) score += 20;

        // Prefer root position (bass note = root) slightly
        const bassNote = Math.min(...absNotes) % 12;
        if (bassNote === rootPitch) score += 2;

        if (score > bestScore) {
          bestScore = score;
          bestMatch = {
            root: rootPitch,
            pattern: pattern,
            intervals: intervals,
            isExact: isExactMatch
          };
        }
      }
    }
  }

  return bestMatch;
}

function updateChordDisplay() {
  const chordNameEl = document.getElementById('chord-name');

  // Collect all selected absNotes
  const allNotes = [];

  linkedFretboardPositions.forEach(posKey => {
    const [stringIndex, fret] = posKey.split('-').map(Number);
    allNotes.push(getAbsoluteNote(stringIndex, fret));
  });

  linkedPianoNotes.forEach(absNote => {
    allNotes.push(absNote);
  });

  if (allNotes.length < 2) {
    chordNameEl.textContent = '-';
    chordNameEl.title = 'Select 2+ notes';
    chordNameEl.classList.remove('chord-approximate');
    return;
  }

  const chord = detectChord(allNotes);

  if (chord) {
    const rootName = currentRoot ? getNoteName(chord.root, currentRoot.useFlats) : SHARP_NAMES[chord.root];
    const chordName = rootName + chord.pattern.name;

    // Show approximate indicator if not exact match
    if (chord.isExact) {
      chordNameEl.textContent = chordName;
      chordNameEl.classList.remove('chord-approximate');
    } else {
      chordNameEl.textContent = chordName + '*';
      chordNameEl.classList.add('chord-approximate');
    }

    // Build detailed tooltip
    const noteNames = [...new Set(allNotes.map(n => {
      const useFlats = currentRoot ? currentRoot.useFlats : false;
      return getNoteName(n % 12, useFlats);
    }))];
    chordNameEl.title = `${chord.pattern.type}\nNotes: ${noteNames.join(', ')}${chord.isExact ? '' : '\n(* contains extra notes)'}`;
  } else {
    const noteNames = [...new Set(allNotes.map(n => {
      const useFlats = currentRoot ? currentRoot.useFlats : false;
      return getNoteName(n % 12, useFlats);
    }))];
    chordNameEl.textContent = '?';
    chordNameEl.title = `Unknown chord\nNotes: ${noteNames.join(', ')}`;
    chordNameEl.classList.remove('chord-approximate');
  }
}

// ========== LINKED FRETBOARD ==========

function buildLinkedDotHtml(stringIndex, fret, useFlats) {
  const absSemitone = (STANDARD_TUNING[stringIndex].semitone + fret) % 12;
  const absNote = getAbsoluteNote(stringIndex, fret);
  const noteName = getNoteName(absSemitone, useFlats);

  return `<div class="fb-dot linked-dot" data-abs-note="${absNote}" data-string="${stringIndex}" data-fret="${fret}">
    <span class="fb-dot-note">${noteName}</span>
  </div>`;
}

function renderLinkedFretboardHorizontal(useFlats) {
  let html = '<div class="fb-row fb-header-row">';
  html += '<div class="fb-string-label"></div>';
  for (let f = 0; f <= FRET_COUNT; f++) {
    html += `<div class="fb-fret${f === 0 ? ' fb-nut-fret' : ''}">${f}</div>`;
  }
  html += '</div>';

  STANDARD_TUNING.forEach((str, stringIndex) => {
    html += '<div class="fb-row">';
    html += `<div class="fb-string-label">${str.name}</div>`;
    for (let fret = 0; fret <= FRET_COUNT; fret++) {
      const cellClass = fret === 0 ? 'fb-cell fb-nut-cell' : 'fb-cell';
      html += `<div class="${cellClass}">${buildLinkedDotHtml(stringIndex, fret, useFlats)}</div>`;
    }
    html += '</div>';
  });

  html += '<div class="fb-row fb-dots-row">';
  html += '<div class="fb-string-label"></div>';
  for (let f = 0; f <= FRET_COUNT; f++) {
    const marker = DOUBLE_DOT_FRETS.has(f) ? '••' : DOT_FRETS.has(f) ? '•' : '';
    html += `<div class="fb-fret-dot">${marker}</div>`;
  }
  html += '</div>';

  return html;
}

function renderLinkedFretboardVertical(useFlats) {
  const strings = [...STANDARD_TUNING].reverse();

  let html = '<div class="fbv-row fbv-header-row">';
  html += '<div class="fbv-fret-label"></div>';
  strings.forEach(str => {
    html += `<div class="fbv-string-label">${str.name}</div>`;
  });
  html += '<div class="fbv-dot-col"></div>';
  html += '</div>';

  for (let fret = 0; fret <= FRET_COUNT; fret++) {
    const rowClass = fret === 0 ? 'fbv-row fbv-nut-row' : 'fbv-row';
    html += `<div class="${rowClass}">`;
    html += `<div class="fbv-fret-label">${fret}</div>`;
    strings.forEach((_, idx) => {
      const stringIndex = 5 - idx;
      html += `<div class="fbv-cell">${buildLinkedDotHtml(stringIndex, fret, useFlats)}</div>`;
    });
    const marker = DOUBLE_DOT_FRETS.has(fret) ? '••' : DOT_FRETS.has(fret) ? '•' : '';
    html += `<div class="fbv-dot-col">${marker}</div>`;
    html += '</div>';
  }

  return html;
}

function renderLinkedFretboard(root) {
  const container = document.getElementById('linked-fretboard');
  const useFlats = root.useFlats;
  const vertical = fbMobileQuery.matches;

  container.className = vertical ? 'fb-vertical' : '';
  container.innerHTML = vertical
    ? renderLinkedFretboardVertical(useFlats)
    : renderLinkedFretboardHorizontal(useFlats);

  // Reapply highlights after re-render
  updateLinkedHighlights();
}

// ========== UPDATE ALL ==========

function updateAll(root) {
  currentRoot = root;

  // Update note selector
  document.querySelectorAll('.note-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.name === root.name);
  });

  // Render scales
  renderModeTable('diatonic-modes', MAJOR_SCALE, DIATONIC_MODES, root);
  renderModeTable('harmonic-modes', HARMONIC_MINOR_SCALE, HARMONIC_MINOR_MODES, root);
  renderOtherScalesTable('other-scales', OTHER_SCALES, root);
  renderOtherScalesTable('pentatonic-scales', PENTATONIC_SCALES, root);

  // Render chords
  renderChords(root);

  // Render key info
  renderKeyInfo(root);

  // Render intervals
  renderIntervals(root);

  // Render fretboard
  renderFretboardButtons(root);
  renderFretboard(root);

  // Render linked fretboard and piano
  renderLinkedFretboard(root);
  renderPianoKeyboard(root);
}

function selectRoot(rootObj) {
  updateAll(rootObj);
}

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
  // Build note selector buttons
  const selector = document.getElementById('note-selector');
  ROOT_NOTES.forEach(note => {
    const btn = document.createElement('button');
    btn.className = 'note-btn';
    btn.textContent = note.name;
    btn.dataset.name = note.name;
    btn.addEventListener('click', () => selectRoot(note));
    selector.appendChild(btn);
  });

  // Fretboard root note buttons
  document.getElementById('fb-root-buttons').addEventListener('click', e => {
    const btn = e.target.closest('[data-fb-root]');
    if (!btn) return;
    const val = parseInt(btn.dataset.fbRoot, 10);
    // Toggle: clicking active root deselects it (back to global)
    if (fbSelectedRoot === val) {
      fbSelectedRoot = null;
    } else {
      fbSelectedRoot = val;
    }
    if (currentRoot) {
      renderFretboardButtons(currentRoot);
      renderFretboard(currentRoot);
    }
  });

  // Fretboard interval buttons (4 rows)
  for (let row = 0; row < 4; row++) {
    document.getElementById(`fb-interval-buttons-${row}`).addEventListener('click', e => {
      const btn = e.target.closest('[data-fb-interval]');
      if (!btn) return;
      const val = btn.dataset.fbInterval;
      if (val === 'none') {
        fbSelectedIntervals[row] = null;
      } else if (val === 'all') {
        fbSelectedIntervals[row] = 'all';
      } else {
        const parsed = parseInt(val, 10);
        // Toggle: clicking active interval deselects it (back to none)
        fbSelectedIntervals[row] = (fbSelectedIntervals[row] === parsed) ? null : parsed;
      }
      if (currentRoot) {
        renderFretboardButtons(currentRoot);
        renderFretboard(currentRoot);
      }
    });
  }

  // Re-render fretboards on orientation/size change
  fbMobileQuery.addEventListener('change', () => {
    if (currentRoot) {
      renderFretboard(currentRoot);
      renderLinkedFretboard(currentRoot);
    }
  });

  // Linked fretboard click handler - tracks exact position
  document.getElementById('linked-fretboard').addEventListener('click', e => {
    const dot = e.target.closest('.fb-dot[data-string][data-fret]');
    if (!dot) return;
    const stringIndex = dot.dataset.string;
    const fret = dot.dataset.fret;
    const posKey = `${stringIndex}-${fret}`;
    // Toggle: click to add/remove from selection
    if (linkedFretboardPositions.has(posKey)) {
      linkedFretboardPositions.delete(posKey);
    } else {
      linkedFretboardPositions.add(posKey);
    }
    updateLinkedHighlights();
  });

  // Piano click handler for linked highlighting
  document.getElementById('piano-keyboard').addEventListener('click', e => {
    const key = e.target.closest('.piano-key[data-abs-note]');
    if (!key) return;
    const absNote = parseInt(key.dataset.absNote, 10);
    // Toggle: click to add/remove from selection
    if (linkedPianoNotes.has(absNote)) {
      linkedPianoNotes.delete(absNote);
    } else {
      linkedPianoNotes.add(absNote);
    }
    updateLinkedHighlights();
  });

  // Clear selection button
  document.getElementById('clear-linked-btn').addEventListener('click', () => {
    clearLinkedHighlights();
  });

  // Default to C
  const defaultRoot = ROOT_NOTES.find(r => r.name === 'C');
  updateAll(defaultRoot);
});
