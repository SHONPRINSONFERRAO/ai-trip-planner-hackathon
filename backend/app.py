import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
# Enable CORS to allow requests from your frontend
CORS(app)

# Configure the Gemini SDK with your API key from the .env file
try:
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
except Exception as e:
    print(f"Error configuring Generative AI: {e}")
    # You might want to handle this more gracefully
    
# Define the API endpoint for generating a trip plan
@app.route('/api/generate', methods=['POST'])
def generate_plan_api():
    """API endpoint to generate a trip itinerary."""
    
    # Get the JSON data sent from the frontend
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Extract user inputs from the JSON data
    destination = data.get('destination')
    budget = data.get('budget') # The budget is now available from the frontend
    interests = data.get('interests')

    if not all([destination, budget, interests]):
        return jsonify({"error": "Missing required fields: destination, budget, or interests"}), 400

    # Craft a more detailed prompt for the Gemini API
    prompt = f"""
    You are a creative and expert travel planner. A user is asking for a travel plan.
    Based on their inputs, generate a detailed, day-by-day itinerary.

    User's Inputs:
    - Destination: {destination}
    - Budget: {budget} (INR)
    - Interests: {interests}

    Your Response Should:
    - Be friendly, engaging, and encouraging.
    - Create a practical, day-by-day plan.
    - Suggest specific activities, local experiences, and food spots that match the interests.
    - Keep the suggested activities aligned with the provided budget.
    - Do not include booking links or exact prices, but you can mention budget-friendly options.
    - Format the output clearly with headings for each day.
    """

    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        
        # Return the generated text in a JSON object
        return jsonify({'plan': response.text})

    except Exception as e:
        print(f"An error occurred while generating content: {e}")
        return jsonify({"error": "Failed to generate itinerary due to an internal error."}), 500

# To run the app
if __name__ == '__main__':
    # Runs the server on http://127.0.0.1:5000
    app.run(port=5000, debug=True)