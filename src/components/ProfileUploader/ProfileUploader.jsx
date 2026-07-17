import { useState } from 'react';
import { Camera, UserCircle2 } from 'lucide-react';

function ProfileUploader() {
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  return (
    <div className="profile-uploader">
      <label className="avatar-shell" htmlFor="profile-photo-input">
        {previewUrl ? (
          <img className="avatar-preview" src={previewUrl} alt="Profile preview" />
        ) : (
          <div className="avatar-placeholder">
            <UserCircle2 size={42} />
          </div>
        )}
        <span className="upload-trigger" aria-label="Upload profile photo">
          <Camera size={14} />
        </span>
      </label>
      <input id="profile-photo-input" type="file" accept="image/*" onChange={handleFileChange} hidden />
      <div className="profile-photo-label">Profile Photo</div>
    </div>
  );
}

export default ProfileUploader;
