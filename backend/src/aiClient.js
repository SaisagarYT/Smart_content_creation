// Function to generate content from file using Google Gemini API
exports.generateContentFromFile = async (fileContent, type) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const modelName = "models/gemini-1.5-flash";
    const apiUrl = `https://generativelanguage.googleapis.com/v1/${modelName}:generateContent?key=${apiKey}`;

    const requestData = {
      contents: [
        {
          parts: [
            {
              text: `Generate ${type} content based on the following file:\n${fileContent}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    };

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates.length > 0
    ) {
      const content = response.data.candidates[0].content;
      if (content.parts && content.parts.length > 0) {
        return content.parts[0].text.trim();
      }
    }

    throw new Error("Unexpected response format from Gemini API");
  } catch (error) {
    console.error(
      "Error calling Google Gemini API with file:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to generate content from file using AI");
  }
};
// Function to fetch images from Pexels API by category/keyword
exports.getPexelsImages = async (category, perPage = 5) => {
  try {
    const apiKey = process.env.PEXELS_API_KEY;
    const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      category
    )}&per_page=${perPage}`;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    });

    // Return array of image URLs and metadata
    return response.data.photos.map((photo) => ({
      url: photo.src.medium,
      photographer: photo.photographer,
      alt: photo.alt,
    }));
  } catch (error) {
    console.error("Error fetching images from Pexels:", error);
    throw new Error("Failed to fetch images from Pexels");
  }
};
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to generate content using Google Gemini API
exports.generateContent = async (topic, type) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const modelName = "models/gemini-1.5-flash"; // Using a model we confirmed works

    const apiUrl = `https://generativelanguage.googleapis.com/v1/${modelName}:generateContent?key=${apiKey}`;

    const requestData = {
      contents: [
        {
          parts: [
            {
              text: `Generate ${type} content about ${topic}. Make it detailed and well-structured.`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    };

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates.length > 0
    ) {
      const content = response.data.candidates[0].content;
      if (content.parts && content.parts.length > 0) {
        return content.parts[0].text.trim();
      }
    }

    throw new Error("Unexpected response format from Gemini API");
  } catch (error) {
    console.error(
      "Error calling Google Gemini API:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to generate content using AI");
  }
};

// Function to generate image using Google Gemini API
exports.generateImage = async (prompt, base64Image) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Prepare the request for vision tasks
    const result = await model.generateContent(
      [
        { text: prompt || "Describe this image" },
        base64Image
          ? { inlineData: { mimeType: "image/png", data: base64Image } }
          : undefined,
      ].filter(Boolean)
    );

    const response = await result.response;
    const content = response.text();

    // Return the description and optionally the image data
    return {
      imageData: base64Image || "placeholder_image_data",
      description: content || prompt,
    };
  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate image using AI");
  }
};
