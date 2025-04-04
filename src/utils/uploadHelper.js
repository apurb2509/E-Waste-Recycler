export const generateImageURL = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject("No file provided");

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split(',')[1]; // Clean base64 only
      const mimeType = file.type; // example: "image/jpeg"
      resolve({ base64Data, mimeType });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
