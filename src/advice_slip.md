	For Random Advice - https://api.adviceslip.com/advice

    Random Advice Slip Object -   {
    "slip": {
      "slip_id": "2", //integer
       "advice": "Smile and the world smiles with you. Frown and you're on your own." //string
    }
  }

    For Search Advice - https://api.adviceslip.com/advice/search/{query}
    Search Object
    {
    "total_results": "2", // integer
    "slips": [
      {
        "advice": "Remember that spiders are more afraid of you, than you are of them."
      },
      {
      	"advice":"Smile and the world smiles with you. Frown and you're on your own."
      }
     ]
    }

    Message Object - Error message
    {
   "message": {
      "type": "notice", // string
      "text": "Advice slip not found." // string
    }
    }