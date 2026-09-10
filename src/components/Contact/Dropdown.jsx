import React, {
  useEffect, useId, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown, FaCheck } from 'react-icons/fa';

/**
 * Accessible custom select. Renders a hidden <input type="hidden"> with the
 * same `name`/`value` so it still posts through native FormData (Formspree
 * reads the <form> at submit time), while the visible control is a styled
 * button + listbox instead of the browser's native <select> chrome.
 */
const Dropdown = ({
  id, name, value, onChange, options, placeholder, required, disabled,
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const buttonRef = useRef(null);
  const listboxId = useId();

  const selectedIndex = options.indexOf(value);

  useEffect(() => {
    const onDocPointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocPointer);
    return () => document.removeEventListener('mousedown', onDocPointer);
  }, []);

  useEffect(() => {
    if (open) setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open || activeIndex < 0 || !listRef.current) return;
    const el = listRef.current.children[activeIndex];
    if (el) el.scrollIntoView({ block: 'nearest' });
  }, [open, activeIndex]);

  const commit = (val) => {
    onChange({ target: { name, value: val, type: 'select' } });
    setOpen(false);
    buttonRef.current?.focus();
  };

  // Focus stays on the trigger button the whole time (standard accessible
  // combobox pattern) — the button owns all keyboard handling and points at
  // the current option via aria-activedescendant.
  const onButtonKeyDown = (e) => {
    if (disabled) return;

    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (activeIndex >= 0) commit(options[activeIndex]);
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} required={required} />
      <button
        ref={buttonRef}
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={open && activeIndex >= 0 ? `${listboxId}-opt-${activeIndex}` : undefined}
        className={`field flex w-full items-center justify-between gap-2 text-left transition ${
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        } ${open ? 'border-primary/70 bg-white/[0.06] ring-2 ring-primary/30' : ''}`}
      >
        <span className={value ? 'text-white' : 'text-white/50'}>
          {value || placeholder}
        </span>
        <FaChevronDown
          className={`shrink-0 text-xs text-white/40 transition-transform duration-200 ${open ? 'rotate-180 text-primary-light' : ''}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-ink2/95 p-1.5 shadow-card backdrop-blur-xl"
          >
            {options.map((opt, i) => {
              const isSelected = opt === value;
              const isActive = i === activeIndex;
              return (
                // Keyboard selection is handled by onListKeyDown on the
                // parent listbox (standard ARIA listbox roving-focus
                // pattern); this item only needs pointer handlers.
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <li
                  key={opt}
                  id={`${listboxId}-opt-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => commit(opt)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive ? 'bg-primary/20 text-white' : 'text-white/75'
                  } ${isSelected ? 'font-medium text-white' : ''}`}
                >
                  <span>{opt}</span>
                  {isSelected && <FaCheck className="shrink-0 text-xs text-primary-light" aria-hidden="true" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = { required: false, disabled: false };

export default Dropdown;
