using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Backend
{
    [Route("chinese-zodiac")]
    public class CZController : Controller
    {
        [HttpGet]
        public async Task<ChineseZodiacReport> GetChineseZodiac(string year, string month, string day)
        {
            HttpClient client = new HttpClient();  
            
            string response = await client.GetStringAsync("https://fengshui-api.com/api/v1/findChineseSignOfYear?token=gb8cF0C38600668z2j980aN0614If1a4NB018079&year=" + year + "&month=" + month + "&day=" + day + "&gender=1");
            ChineseZodiacReport report = JsonConvert.DeserializeObject<ChineseZodiacReport>(response); // convert string to object
            return report;
        }
    }
}