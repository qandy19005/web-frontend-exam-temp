import PropTypes from 'prop-types';
import logo from '../assets/logo.png';

function AppLoading({fadeOut}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172a',
        zIndex: 9999,
        transition: 'opacity 0.4s ease',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <img
        src={logo}
        alt="HeeLoo"
        className="logo-pulse"
        style={{width: 160, marginBottom: 32}}
      />
      <div style={{
        width: 40,
        height: 40,
        border: '3px solid rgba(255,255,255,0.15)',
        borderTopColor: '#E07C6A',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  );
}

AppLoading.propTypes = {
  fadeOut: PropTypes.bool.isRequired,
};

export default AppLoading;
