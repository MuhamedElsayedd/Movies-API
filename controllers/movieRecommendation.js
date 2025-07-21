const { OpenAI } = require('openai');

const movieRecommendation = async (req, res) => {
  const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // from .env file
  });

  try {
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo', // أو gpt-4 لو عندك صلاحية
      messages: [
        { role: 'system', content: 'You are a coding assistant that talks like a pirate' },
        { role: 'user', content: 'Give me 5 cities in Egypt' },
      ],
    });

    const answer = response.choices[0].message.content;

    console.log(answer);

    res.status(200).json({
      status: 'Great!',
      message: 'Hello from Recommendation Section!',
      data: answer,
    });
  } catch (error) {
    console.error('Error:', error);

    res.status(500).json({
      status: 'fail',
      message: 'Error while talking to OpenAI',
      error: error.message,
    });
  }
};

module.exports = movieRecommendation;
