using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MatrixEx.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MatrixEx.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SigninController : ControllerBase
    {
        private readonly MatrixExContext _context;

        public SigninController(MatrixExContext context)
        {
            _context = context;
        }

        // GET: api/Signin
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Signin/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Signin
        [HttpPost]
        public async Task<ActionResult<bool>> Post([FromBody] Signin value)
        {
            List<Users> users = await _context.Users.ToListAsync();

            var myUser = from user in users
                         where user.Email == value.Email && user.Password == value.Password
                         select user;

            if (myUser.ToList().Count == 0) {
                return false;
            }

            return true;
        }

        // PUT: api/Signin/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Signin value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
