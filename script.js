// ===== Story Phrase Arrays =====
// Each array represents one part of the sentence
const parts = [
  ['Once upon a time', 'Long ago', 'In a faraway land', 'One sunny day', 'Late at night'],
  ['a brave knight', 'an adventurous cat', 'a clever fox', 'a curious child', 'a funny clown'],
  ['found a mysterious map', 'discovered a hidden door', 'heard a strange sound', 'met a talking bird', 'saw a sparkling light'],
  ['and decided to explore', 'and started a journey', 'and solved a great puzzle', 'and made a new friend', 'and found a treasure'],
  ['that changed everything.', 'that no one believed.', 'that was full of magic.', 'that brought great joy.', 'that was unforgettable.']
];

// ===== Index Trackers =====
// Store current position for each story part
const currentIndexes = [0, 0, 0, 0, 0];

// ===== Get Buttons and Display Elements =====
const buttons = [
  document.getElementById('btn1'),
  document.getElementById('btn2'),
  document.getElementById('btn3'),
  document.getElementById('btn4'),
  document.getElementById('btn5')
];

const selectedSpans = [
  document.getElementById('selected1'),
  document.getElementById('selected2'),
  document.getElementById('selected3'),
  document.getElementById('selected4'),
  document.getElementById('selected5')
];

// ===== Initialize First Display =====
function initializeSelections() {
  for (let i = 0; i < parts.length; i++) {
    selectedSpans[i].textContent = parts[i][0];
  }
}

// ===== Initialize First Display =====
function initializeSelections() {
  for (let i = 0; i < parts.length; i++) {
    selectedSpans[i].textContent = parts[i][0];
  }
}