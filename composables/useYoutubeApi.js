// composables/useCounter.js
export const useYoutubeApi = () => {
  const fetchVideoDuration = async (videoId, apiKey) => {
    const baseURL = 'https://www.googleapis.com/youtube/v3/videos';
    const url = `${baseURL}?id=${videoId}&key=${apiKey}&part=contentDetails`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const durationISO8601 = data.items[0].contentDetails.duration;
        return convertISO8601ToSeconds(durationISO8601);
      } else {
        throw new Error('Invalid video ID or no data found');
      }
    } catch (error) {
      console.error('Error fetching video duration:', error);
      return null;
    }
  };
  const youtubeThumbnailToFile = async (videoId) => {
    const youtubeThumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    try {
      const response = await fetch(youtubeThumbnailUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch thumbnail: ${response.statusText}`);
      }

      const blob = await response.blob();
      const file = new File([blob], `thumbnail_${videoId}.jpg`, { type: 'image/jpeg' });

      return file;
    } catch (error) {
      console.error('Error fetching thumbnail:', error);
      return null;
    }
  }

  return {
    fetchVideoDuration,
    youtubeThumbnailToFile
  };
};

// ISO8601 변환 함수
function convertISO8601ToSeconds(duration) {
  const timeExtractor = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  const matches = timeExtractor.exec(duration);

  if (!matches) return 0;

  const hours = parseInt(matches[1]) || 0;
  const minutes = parseInt(matches[2]) || 0;
  const seconds = parseInt(matches[3]) || 0;

  return hours * 3600 + minutes * 60 + seconds;
}