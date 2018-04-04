using System;
using System.Collections.Generic;

namespace Backend
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public List<Chart> SavedCharts { get; set; }
        public int Id { get; set; }
        public User()
        {

        }
        public User(string name, string username, string password)
        {
            this.FirstName = name;
            this.Username = username;
            this.Password = password;
            this.SavedCharts = new List<Chart>();
        }
    }
}