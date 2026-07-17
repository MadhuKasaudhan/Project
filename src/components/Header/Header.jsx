import { HelpCircle, UserCircle2 } from 'lucide-react';

function Header({ stepLabel = 'Step 3 of 5 - Welcome to Your Chapter', rightText = '' }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-brand">
          <div className="brand-mark">BOCC</div>
          <div className="brand-divider" />
          <div className="brand-step">{stepLabel}</div>
        </div>

        {rightText ? (
          <div className="topbar-right-text">{rightText}</div>
        ) : (
          <div className="topbar-actions">
            <button className="icon-btn" type="button" aria-label="Help">
              <HelpCircle size={18} />
            </button>
            <button className="icon-btn" type="button" aria-label="Profile">
              <UserCircle2 size={18} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
