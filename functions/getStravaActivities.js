import axios from 'axios';
import { Parser } from 'xml2js';

const CONFIG = {
  FEED_URL: 'https://feedmyride.net/activities/23111229',
  MAX_ACTIVITIES: 10,
};

/**
 * Custom error class for API errors
 */
class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}

/**
 * Fetches XML data from the specified URL
 * @returns {Promise<string>} The XML data as a string
 * @throws {APIError} If there's an error fetching
 */
async function fetchXMLData() {
  try {
    const response = await axios.get(CONFIG.FEED_URL);
    return response.data;
  } catch (error) {
    throw new APIError(`Failed to fetch XML data: ${error.message}`, 500);
  }
}

/**
 * Parses XML data to JSON
 * @param {string} xmlData - The XML data to parse
 * @returns {Promise<Object>} The parsed JSON object
 * @throws {APIError} If there's an error parsing
 */
async function parseXMLToJSON(xmlData) {
  try {
    const parser = new Parser();
    return await parser.parseStringPromise(xmlData);
  } catch (error) {
    throw new APIError(`Failed to parse XML data: ${error.message}`, 500);
  }
}

/**
 * Processes the parsed JSON data into an array of activity objects
 * @param {Object} jsonData - The parsed JSON data
 * @returns {Array<Object>} An array of activity objects
 */
function processActivities(jsonData) {
  return jsonData.rss.channel[0].item
    .slice(0, CONFIG.MAX_ACTIVITIES)
    .map(item => ({
      title: item.title[0],
      date: new Date(item.pubDate[0]).toISOString(),
      description: item.description[0],
      link: item.link[0]
    }));
}

/**
 * Logs the execution time of a function
 * @param {string} label - The label for the log
 * @param {Function} fn - The function to execute and measure
 * @returns {Promise<*>} The result of the function execution
 */
async function logExecutionTime(label, fn) {
  const start = process.hrtime.bigint();
  const result = await fn();
  const end = process.hrtime.bigint();
  console.log(`${label}: ${(end - start) / BigInt(1e6)}ms`);
  return result;
}

/**
 * Main handler function for the Netlify serverless function
 * @param {Object} event - The event object from Netlify
 * @param {Object} context - The context object from Netlify
 * @returns {Promise<Object>} The response object
 */
export async function handler(event, context) {
  const startTime = process.hrtime.bigint();

  try {
    const xmlData = await logExecutionTime('Fetch XML data', fetchXMLData);
    const jsonData = await logExecutionTime('Parse XML to JSON', () => parseXMLToJSON(xmlData));
    const activities = await logExecutionTime('Process activities', () => processActivities(jsonData));

    return {
      statusCode: 200,
      body: JSON.stringify(activities),
      headers: {
        'Content-Type': 'application/json',
        'X-Execution-Time': `${(process.hrtime.bigint() - startTime) / BigInt(1e6)}ms`
      }
    };
  } catch (error) {
    console.error('Error details:', error);

    return {
      statusCode: error instanceof APIError ? error.status : 500,
      body: JSON.stringify({ 
        error: 'Failed to fetch Strava activities',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Execution-Time': `${(process.hrtime.bigint() - startTime) / BigInt(1e6)}ms`
      }
    };
  }
}