import React, { useState } from 'react';

const AccountPage = () => {
  // State for email management
  const [email, setEmail] = useState('');

  // State for two-factor authentication
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);

  // State for deactivation status
  const [deactivated, setDeactivated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTwoFactorAuthToggle = () => {
    setTwoFactorAuthEnabled(!twoFactorAuthEnabled);
  };

  const handleDeactivation = () => {
    // Handle deactivation logic here
    setDeactivated(true);
  };

  return (
    <div className="account-page">
      <h2>Account Settings</h2>
      <div className="email-management">
        <h3>Manage Email</h3>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter new email"
        />
        <button>Update Email</button>
      </div>
      <div className="two-factor-auth">
        <h3>Two-Factor Authentication</h3>
        <label>
          <input
            type="checkbox"
            checked={twoFactorAuthEnabled}
            onChange={handleTwoFactorAuthToggle}
          />
          Enable Two-Factor Authentication
        </label>
      </div>
      <div className="security-settings">
        <h3>Security</h3>
        <p>Change Password</p>
        <p>Other Security Settings...</p>
      </div>
      <div className="deactivation">
        <h3>Deactivate Account</h3>
        <button onClick={handleDeactivation}>Deactivate Account</button>
        {deactivated && <p>Your account has been deactivated.</p>}
      </div>
    </div>
  );
};

export default AccountPage;
