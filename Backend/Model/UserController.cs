using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    [Route("users")]
    public class UserController : Controller
    {
        public ChartContext _context;
        public UserController(ChartContext context)
        {
            _context = context;
            if(_context.Users.Count() < 1)
            {
                User seedDataUser = new User("Sia", "siaxiong", "siaxiong");
                _context.Users.Add(seedDataUser);
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{username}")]
        public User GetSingleUser(string username)
        {
            var user = _context.Users.FirstOrDefault(c => c.Username == username);
            return user;
        }

        // [HttpGet("{username}")]
        // public User CheckForUsername(string username)
        // {
        //     var user = _context.Users.FirstOrDefault(c => c.Username == username);
        //     return user;
        // }

        [HttpPost]
        public User PostNewUser([FromBody]User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            var found = _context.Users.FirstOrDefault(i => i.Id == id);
            _context.Users.Remove(found);
            _context.SaveChanges();
        }
    }
}