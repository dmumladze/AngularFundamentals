using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using System.Globalization;

using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using ng4play;
using ng4play.Models;

namespace ng4play.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        public static User CurrentUser;

        [HttpPost("login")]
        public User Login([FromBody]User user)
        {
            CurrentUser = user;
            CurrentUser.firstName = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(user.userName);
            return user;
        }

        [HttpPost("logout")]
        public void Logout()
        {
            CurrentUser = null;
        }

        [HttpGet("currentIdentity")]
        public User GetCurrentIdentity()
        {
            return CurrentUser;
        }

        [HttpPut("")]
        public void UpdateProfile(int id, [FromBody]User user)
        {
            CurrentUser = user;
        }                      
    }
}
