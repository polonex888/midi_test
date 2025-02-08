const DEFAULT_NODEMIN = 21
const DEFAULT_NODEMAX = 108
// ページ読み込み時に音声をロード
window.addEventListener('load', () => {
    createKeyboard(DEFAULT_NODEMIN, DEFAULT_NODEMAX)
    loadAudio(DEFAULT_NODEMIN, DEFAULT_NODEMAX)
    addKeySoundEvent()
});
