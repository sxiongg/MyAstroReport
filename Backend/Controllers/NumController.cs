using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Backend
{
    [Route("numerology")]
    public class NumController : Controller
    {
        [HttpGet]
        public async Task<NumerologyReport> GetNumerology(string name, string year, string month, string day)
        {
            HttpClient client = new HttpClient();  
            
            string response = await client.GetStringAsync("http://affinity-numerology.com/api/NumerologyAPI.php?key=sia&format=JSON&type=name%2C%20birthdate&name=" + name + "&year=" + year + "&month=" + month + "&day=" + day);
            NumerologyReport report = JsonConvert.DeserializeObject<NumerologyReport>(response); // convert string to object
            return report;
        }
    }
}