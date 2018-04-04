using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    [Route("signs")]
    public class MonthController : Controller
    {
        public ChartContext _context;
        public MonthController(ChartContext context)
        {
            _context = context;
            if(_context.Months.Count() < 1)
            {
                
            }
        }

        [HttpGet]
        public List<Month> GetSigns()
        {
            return _context.Months.Include(m => m.Dates ).ToList();
        }

        // [HttpGet("{date}")]
        // public Sign GetSingleSign(int day, int month)
        // {
        //     // var user = _context.Signs.Include(s => s.Dates ).FirstOrDefault(c => c.Dates.Month == month);
        //     for(var i = 0; i < _context.Signs.Count(); i++)
        //     {
        //         // foreach(Sign sign in _context.Signs)
        //         // {
        //         //     if(sign.Dates[i].Day == day && sign.Dates[i].Month == month)
        //         //     {
        //         //         return sign;
        //         //     }
        //         // }
        //     }
        //     // return sign;
        // }
        // [HttpGet("{username}")]
        // public User GetSingleUser(string username)
        // {
        //     var user = _context.Users.Include(u => u.SavedCharts ).FirstOrDefault(c => c.Username == username);
        //     return user;
        // }

        // [HttpPost]
        // public User PostNewUser([FromBody]User user)
        // {
        //     _context.Users.Add(user);
        //     _context.SaveChanges();

        //     return user;
        // }

        // [HttpPut("{username}")]
        // public User PutSpinner(string username, [FromBody]Chart newChart)
        // {
        //     var user = _context.Users.Include(u => u.SavedCharts ).FirstOrDefault(c => c.Username == username);
        //     user.SavedCharts.Add(newChart);
        //     _context.SaveChanges();
        //     return user;
        // }

        // [HttpDelete("{id}")]
        // public void DeleteUser(int id)
        // {
        //     var found = _context.Users.FirstOrDefault(i => i.Id == id);
        //     _context.Users.Remove(found);
        //     _context.SaveChanges();
        // }
    }
}