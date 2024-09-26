const axios = require('axios');
const xml2js = require('xml2js');

exports.handler = async function(event, context) {
  console.time('Total execution time');
  try {
    const url = 'https://feedmyride.net/activities/23111229';
    
    console.time('Fetch XML data');
    const response = await axios.get(url);
    console.timeEnd('Fetch XML data');

    console.time('Parse XML to JSON');
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(response.data);
    console.timeEnd('Parse XML to JSON');

    console.time('Process activities');
    const activities = result.rss.channel[0].item.map(item => ({
      title: item.title[0],
      date: new Date(item.pubDate[0]).toISOString(),
      description: item.description[0],
      link: item.link[0]
    }));
    console.timeEnd('Process activities');

    console.timeEnd('Total execution time');
    return {
      statusCode: 200,
      body: JSON.stringify(activities),
      headers: {
        'Content-Type': 'application/json',
        'X-Execution-Time': process.hrtime.time - context.startTime
      }
    };
  } catch (error) {
    console.error('Error details:', error);
    console.timeEnd('Total execution time');
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to fetch Strava activities',
        message: error.message,
        stack: error.stack
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Execution-Time': process.hrtime.bigint() - context.startTime
      }
    };
  }
};