export const useVideoApi = () => {
  const getVideoDuration = (file) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        const duration = video.duration;
        window.URL.revokeObjectURL(video.src);
        resolve(duration);
      };
      video.src = URL.createObjectURL(file);
    });
  };

  const getVideoThumbnail = (file, time = 10) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        video.currentTime = time; // 특정 시간으로 이동
        video.onseeked = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnail = canvas.toDataURL();
          window.URL.revokeObjectURL(video.src);
          resolve(thumbnail);
        };
      };
      video.src = URL.createObjectURL(file);
    });
  };

  const base64ToBlob = (base64String, mimeType) => {
    const byteString = atob(base64String.split(',')[1]); // base64 문자열에서 데이터 부분만 추출
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeType });
  }
  const blobToFile = (blob) => {
    return new File([blob], 'thumbnail_image.png', { type: 'image/png' });
  }

  return {
    getVideoDuration,
    getVideoThumbnail,
    base64ToBlob,
    blobToFile,
  };
}