/* eslint-disable no-param-reassign */

const buttons = [
  {
    code: 'Backquote', en: '`', ru: 'ё', shift: { en: '`', ru: 'ё' }, printable: true,
  },
  {
    code: 'Digit1', en: '1', ru: '1', shift: { en: '!', ru: '!' }, printable: true,
  },
  {
    code: 'Digit2', en: '2', ru: '2', shift: { en: '@', ru: '"' }, printable: true,
  },
  {
    code: 'Digit3', en: '3', ru: '3', shift: { en: '#', ru: '№' }, printable: true,
  },
  {
    code: 'Digit4', en: '4', ru: '4', shift: { en: '$', ru: ';' }, printable: true,
  },
  {
    code: 'Digit5', en: '5', ru: '5', shift: { en: '%', ru: '%' }, printable: true,
  },
  {
    code: 'Digit6', en: '6', ru: '6', shift: { en: '^', ru: ':' }, printable: true,
  },
  {
    code: 'Digit7', en: '7', ru: '7', shift: { en: '&', ru: '?' }, printable: true,
  },
  {
    code: 'Digit8', en: '8', ru: '8', shift: { en: '*', ru: '*' }, printable: true,
  },
  {
    code: 'Digit9', en: '9', ru: '9', shift: { en: '(', ru: '(' }, printable: true,
  },
  {
    code: 'Digit0', en: '0', ru: '0', shift: { en: ')', ru: ')' }, printable: true,
  },
  {
    code: 'Minus', en: '-', ru: '-', shift: { en: '_', ru: '_' }, printable: true,
  },
  {
    code: 'Equal', en: '=', ru: '=', shift: { en: '+', ru: '+' }, printable: true,
  },
  {
    code: 'Backspace', en: 'Backspace', ru: 'Backspace', printable: false,
  },
  {
    code: 'Tab', en: 'Tab', ru: 'Tab', printable: false,
  },
  {
    code: 'KeyQ', en: 'q', ru: 'й', printable: true,
  },
  {
    code: 'KeyW', en: 'w', ru: 'ц', printable: true,
  },
  {
    code: 'KeyE', en: 'e', ru: 'у', printable: true,
  },
  {
    code: 'KeyR', en: 'r', ru: 'к', printable: true,
  },
  {
    code: 'KeyT', en: 't', ru: 'е', printable: true,
  },
  {
    code: 'KeyY', en: 'y', ru: 'н', printable: true,
  },
  {
    code: 'KeyU', en: 'u', ru: 'г', printable: true,
  },
  {
    code: 'KeyI', en: 'i', ru: 'ш', printable: true,
  },
  {
    code: 'KeyO', en: 'o', ru: 'щ', printable: true,
  },
  {
    code: 'KeyP', en: 'p', ru: 'з', printable: true,
  },
  {
    code: 'BracketLeft', en: '[', ru: 'х', shift: { en: '{', ru: 'х' }, printable: true,
  },
  {
    code: 'BracketRight', en: ']', ru: 'ъ', shift: { en: '}', ru: 'ъ' }, printable: true,
  },
  {
    code: 'Backslash', en: '\\', ru: '\\', shift: { en: '|', ru: '/' }, printable: true,
  },
  {
    code: 'Delete', en: 'DEL', ru: 'DEL', printable: false,
  },
  {
    code: 'CapsLock', en: 'Caps', ru: 'Caps', printable: false,
  },
  {
    code: 'KeyA', en: 'a', ru: 'ф', printable: true,
  },
  {
    code: 'KeyS', en: 's', ru: 'ы', printable: true,
  },
  {
    code: 'KeyD', en: 'd', ru: 'в', printable: true,
  },
  {
    code: 'KeyF', en: 'f', ru: 'а', printable: true,
  },
  {
    code: 'KeyG', en: 'g', ru: 'п', printable: true,
  },
  {
    code: 'KeyH', en: 'h', ru: 'р', printable: true,
  },
  {
    code: 'KeyJ', en: 'j', ru: 'о', printable: true,
  },
  {
    code: 'KeyK', en: 'k', ru: 'л', printable: true,
  },
  {
    code: 'KeyL', en: 'l', ru: 'д', printable: true,
  },
  {
    code: 'Semicolon', en: ';', ru: 'ж', shift: { en: ':', ru: 'ж' }, printable: true,
  },
  {
    code: 'Quote', en: '\'', ru: 'э', shift: { en: '"', ru: 'э' }, printable: true,
  },
  {
    code: 'Enter', en: 'Enter', ru: 'Enter', printable: false,
  },
  {
    code: 'ShiftLeft', en: 'Shift', ru: 'Shift', printable: false,
  },
  {
    code: 'IntlBackslash', en: '\\', ru: '\\', shift: { en: '|', ru: '/' }, printable: true,
  },
  {
    code: 'KeyZ', en: 'z', ru: 'я', printable: true,
  },
  {
    code: 'KeyX', en: 'x', ru: 'ч', printable: true,
  },
  {
    code: 'KeyC', en: 'c', ru: 'с', printable: true,
  },
  {
    code: 'KeyV', en: 'v', ru: 'м', printable: true,
  },
  {
    code: 'KeyB', en: 'b', ru: 'и', printable: true,
  },
  {
    code: 'KeyN', en: 'n', ru: 'т', printable: true,
  },
  {
    code: 'KeyM', en: 'm', ru: 'ь', printable: true,
  },
  {
    code: 'Comma', en: ',', ru: 'б', shift: { en: '<', ru: 'б' }, printable: true,
  },
  {
    code: 'Period', en: '.', ru: 'ю', shift: { en: '>', ru: 'ю' }, printable: true,
  },
  {
    code: 'Slash', en: '/', ru: '.', shift: { en: '?', ru: ',' }, printable: true,
  },
  {
    code: 'ArrowUp', en: '▲', ru: '▲', printable: false,
  },
  {
    code: 'ShiftRight', en: 'Shift', ru: 'Shift', printable: false,
  },
  {
    code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', printable: false,
  },
  {
    code: 'Language', en: 'en', ru: 'ru', printable: false,
  },
  {
    code: 'AltLeft', en: 'Alt', ru: 'Alt', printable: false,
  },
  {
    code: 'Space', en: ' ', ru: ' ', printable: true,
  },
  { code: 'Sound', printable: false },
  { code: 'Voice', printable: false },
  {
    code: 'AltRight', en: 'Alt', ru: 'Alt', printable: false,
  },
  {
    code: 'ArrowLeft', en: '◄', ru: '◄', printable: false,
  },
  {
    code: 'ArrowDown', en: '▼', ru: '▼', printable: false,
  },
  {
    code: 'ArrowRight', en: '►', ru: '►', printable: false,
  },
  {
    code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', printable: false,
  },
];

export default class Keyboard {
  constructor(inputElement, switcherElement) {
    this.inputElement = inputElement;
    this.switcherElement = switcherElement;
  }

  isSwitcherOn = false;

  lang = 'en';

  isSoundOn = true;

  isVoiceOn = false;

  isCapsLockOn = false;

  isShift = false;

  init(wrapper) {
    this.keyboardElement = document.createElement('div');
    this.keyboardElement.classList.add('keyboard', 'keyboard_hidden');
    wrapper.append(this.keyboardElement);
    this.keyboardElement.append(Keyboard.createKeyElements());
    this.keysElements = this.keyboardElement.querySelectorAll('.keyboard__key');
    this.fillButtonsNames();
    this.inputElement.focus();
    this.switcherElement.addEventListener('click', this.onSwitcher);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('click', this.onClick);
    this.audio = new Audio();
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    // eslint-disable-next-line no-undef
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
  }

  onSwitcher = () => {
    if (this.isSwitcherOn) {
      this.hideKeyboard();
    } else {
      this.showKeyboard();
    }
  }

  hideKeyboard() {
    this.isSwitcherOn = false;
    this.keyboardElement.classList.add('keyboard_hidden');
  }

  showKeyboard() {
    this.isSwitcherOn = true;
    this.keyboardElement.classList.remove('keyboard_hidden');
  }

  fillButtonsNames() {
    if (this.isCapsLock) {
      document.querySelector('.capslock').classList.add('capslock_active');
    } else {
      document.querySelector('.capslock').classList.remove('capslock_active');
    }

    this.keysElements.forEach((key, index) => {
      key.textContent = buttons[index][this.lang];

      if (!this.isCapsLock && this.isShift) {
        if (buttons[index].shift) {
          key.textContent = buttons[index].shift[this.lang].toUpperCase();
        } else if (buttons[index].printable) {
          key.textContent = buttons[index][this.lang].toUpperCase();
        }
      }

      if (this.isCapsLock && !this.isShift) {
        if (buttons[index].printable) {
          key.textContent = buttons[index][this.lang].toUpperCase();
        }
      }

      if (this.isCapsLock && this.isShift) {
        if (buttons[index].shift) {
          key.textContent = buttons[index].shift[this.lang].toLowerCase();
        } else if (buttons[index].printable) {
          key.textContent = buttons[index][this.lang].toLowerCase();
        }
      }
    });
  }

  static createKeyElements() {
    const keysFragment = new DocumentFragment();

    buttons.forEach((button) => {
      const key = document.createElement('button');
      key.classList.add('keyboard__key');

      switch (button.code) {
        case 'Backspace':
          key.classList.add('backspace');
          break;
        case 'Tab':
          key.classList.add('tab');
          break;
        case 'Delete':
          key.classList.add('delete');
          break;
        case 'CapsLock':
          key.classList.add('capslock');
          break;
        case 'Enter':
          key.classList.add('enter');
          break;
        case 'ShiftLeft':
          key.classList.add('left-shift');
          break;
        case 'ShiftRight':
          key.classList.add('right-shift');
          break;
        case 'ControlRight':
        case 'ControlLeft':
          key.classList.add('ctrl');
          break;
        case 'Space':
          key.classList.add('space');
          break;
        case 'Language':
          key.classList.add('language');
          break;
        case 'ArrowUp':
          key.classList.add('arrow', 'arrow-up');
          break;
        case 'ArrowLeft':
          key.classList.add('arrow', 'arrow-left');
          break;
        case 'ArrowDown':
          key.classList.add('arrow', 'arrow-down');
          break;
        case 'ArrowRight':
          key.classList.add('arrow', 'arrow-right');
          break;
        case 'Sound':
          key.classList.add('sound');
          break;
        case 'Voice':
          key.classList.add('voice');
          break;
        default:
          break;
      }

      keysFragment.append(key);
    });

    return keysFragment;
  }

  onKeyDown = (event) => {
    if (event.code === 'Escape') {
      if (this.isSwitcherOn) {
        this.hideKeyboard();
        return;
      }
    }

    if (!this.isSwitcherOn) {
      return;
    }

    event.preventDefault();
    const index = buttons.findIndex((button) => button.code === event.code);

    if (index === -1) {
      return;
    }

    const buttonPressed = this.keysElements[index];
    buttonPressed.classList.add('pressed');
    this.onButtonAction(buttons[index]);

    if (event.shiftKey) {
      this.isShift = true;
      this.fillButtonsNames();
    }

    if ((buttons[index].code === 'ShiftLeft'
      || buttons[index].code === 'ShiftRight')
      && this.isSoundOn) {
      this.audio.src = '../../assets/audio/shift.wav';
      this.audio.play();
    }

    const specialButtons = [
      'ControlLeft',
      'ControlRight',
      'AltLeft',
      'AltRight',
      'ArrowUp',
      'ArrowDown',
    ];

    const isSpecialButtonPressed = specialButtons.some((button) => button === buttons[index].code);

    if (isSpecialButtonPressed && this.isSoundOn) {
      this.playDefaultSound();
    }
  }

  onKeyUp = (event) => {
    if (!this.isSwitcherOn) {
      return;
    }
    const index = buttons.findIndex((button) => button.code === event.code);

    if (index === -1) {
      return;
    }

    const buttonPressed = this.keysElements[index];
    buttonPressed.classList.remove('pressed');

    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
      this.isShift = false;
      this.fillButtonsNames();
    }
  }

  onClick = (event) => {
    if (event.target.classList.contains('keyboard__key')) {
      const index = Array.from(this.keysElements).findIndex((key) => key === event.target);
      this.onButtonAction(buttons[index]);

      if (event.target.textContent === 'Shift') {
        if (this.isShift) {
          this.isShift = false;
          event.target.classList.remove('pressed');
          this.fillButtonsNames();
        } else {
          this.isShift = true;
          event.target.classList.add('pressed');
          this.fillButtonsNames();
        }
      } else if (this.isShift) {
        this.isShift = false;
        document.querySelector('.left-shift').classList.remove('pressed');
        document.querySelector('.right-shift').classList.remove('pressed');
        this.fillButtonsNames();
      }

      if ((buttons[index].code === 'ShiftLeft'
        || buttons[index].code === 'ShiftRight')
        && this.isSoundOn) {
        this.audio.src = '../../assets/audio/shift.wav';
        this.audio.play();
      }

      const specialButtons = [
        'ControlLeft',
        'ControlRight',
        'AltLeft',
        'AltRight',
        'ArrowUp',
        'ArrowDown',
      ];

      const isSpecialButtonClicked = specialButtons.some((button) => {
        const buttonCode = buttons[index].code;

        return button === buttonCode;
      });

      if (isSpecialButtonClicked && this.isSoundOn) {
        this.playDefaultSound();
      }
    }
  }

  onButtonAction(button) {
    if (button.printable) {
      this.printLetter(button);
      return;
    }

    switch (button.code) {
      case 'Enter':
        this.onEnter();
        break;
      case 'Tab':
        this.onTab();
        break;
      case 'Backspace':
        this.onBackspace();
        break;
      case 'Delete':
        this.onDelete();
        break;
      case 'CapsLock':
        this.onCapsLock();
        break;
      case 'ArrowLeft':
        this.onArrowLeft();
        break;
      case 'ArrowRight':
        this.onArrowRight();
        break;
      case 'Language':
        this.onLanguage();
        break;
      case 'Sound':
        this.onSound();
        break;
      case 'Voice':
        this.onVoice();
        break;
      default:
        break;
    }
  }

  printLetter(button) {
    this.playDefaultSound();
    const { value, selectionStart } = this.inputElement;
    const index = buttons.indexOf(button);
    const letter = this.keysElements[index].textContent;
    this.inputElement.value = value.slice(0, selectionStart)
      + letter + value.slice(selectionStart);
    this.setCursorPosition(selectionStart + 1);
  }

  playDefaultSound() {
    if (this.isSoundOn) {
      if (this.lang === 'en') {
        this.audio.src = '../../assets/audio/en.wav';
      }
      if (this.lang === 'ru') {
        this.audio.src = '../../assets/audio/ru.wav';
      }
      this.audio.play();
    }
  }

  onEnter() {
    this.audio.src = '../../assets/audio/enter.wav';
    if (this.isSoundOn) {
      this.audio.play();
    }
    const { value, selectionStart } = this.inputElement;
    this.inputElement.value = `${value.slice(0, selectionStart)}\n${value.slice(selectionStart)}`;
    this.setCursorPosition(selectionStart + 1);
  }

  onTab() {
    this.playDefaultSound();
    const { value, selectionStart } = this.inputElement;
    this.inputElement.value = `${value.slice(0, selectionStart)}\t${value.slice(selectionStart)}`;
    this.setCursorPosition(selectionStart + 1);
  }

  onBackspace() {
    this.audio.src = '../../assets/audio/backspace.wav';
    if (this.isSoundOn) {
      this.audio.play();
    }
    const { value, selectionStart } = this.inputElement;
    const newSelectionStart = selectionStart > 0 ? selectionStart - 1 : 0;
    this.inputElement.value = value.slice(0, newSelectionStart)
      + value.slice(selectionStart);
    this.setCursorPosition(newSelectionStart);
  }

  onDelete() {
    this.playDefaultSound();
    const { value, selectionStart } = this.inputElement;
    this.inputElement.value = value.slice(0, selectionStart)
      + value.slice(selectionStart + 1);
    this.setCursorPosition(selectionStart);
  }

  onArrowLeft() {
    this.playDefaultSound();
    const { selectionStart } = this.inputElement;
    if (selectionStart > 0) {
      this.setCursorPosition(selectionStart - 1);
    } else {
      this.setCursorPosition(0);
    }
  }

  onArrowRight() {
    this.playDefaultSound();
    const { selectionStart } = this.inputElement;
    this.setCursorPosition(selectionStart + 1);
  }

  onCapsLock() {
    this.audio.src = '../../assets/audio/caps.wav';
    if (this.isSoundOn) {
      this.audio.play();
    }
    this.isCapsLock = !this.isCapsLock;
    this.fillButtonsNames();
  }

  setCursorPosition(position) {
    this.inputElement.selectionStart = position;
    this.inputElement.selectionEnd = position;
    this.inputElement.focus();
  }

  onLanguage() {
    if (!this.isVoiceOn) {
      this.playDefaultSound();
      this.lang = this.lang === 'en' ? 'ru' : 'en';
      this.isShift = false;
      document.querySelector('.left-shift').classList.remove('pressed');
      document.querySelector('.right-shift').classList.remove('pressed');
      this.fillButtonsNames();
    }
  }

  onSound() {
    this.isSoundOn = !this.isSoundOn;
    if (this.isSoundOn) {
      this.playDefaultSound();
      document.querySelector('.sound').classList.remove('sound_off');
    } else {
      document.querySelector('.sound').classList.add('sound_off');
    }
  }

  onVoice() {
    if (!this.isVoiceOn) {
      this.isVoiceOn = !this.isVoiceOn;

      this.recognition.lang = this.lang;

      let prevInputElementValue = this.inputElement.value;

      this.recognition.addEventListener('result', (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');

        this.inputElement.value = prevInputElementValue + transcript;

        if (event.results[0].isFinal) {
          this.inputElement.value = prevInputElementValue + transcript;
          prevInputElementValue = this.inputElement.value;
        }
      });

      this.recognition.addEventListener('start', () => {
        document.querySelector('.voice').classList.add('voice_on');
      });

      this.recognition.addEventListener('end', this.recognition.start);

      this.recognition.start();
    } else {
      this.isVoiceOn = !this.isVoiceOn;
      this.recognition.removeEventListener('end', this.recognition.start);
      this.recognition.stop();
      document.querySelector('.voice').classList.remove('voice_on');
      this.setCursorPosition(this.inputElement.value.length);
    }
  }
}
