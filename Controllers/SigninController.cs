using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using MatrixEx.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace MatrixEx.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SigninController : ControllerBase
    {
        private readonly MatrixExContext _context;
        private IConfiguration _configuration;

        public SigninController(MatrixExContext context, IConfiguration Configuration)
        {
            _context = context;
            _configuration = Configuration;

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
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Signin value)
        {
            List<Users> users = await _context.Users.ToListAsync();

            var myUser = from user in users
                         where user.Email == value.Email && user.Password == value.Password
                         select user;

            if (myUser.ToList().Count == 0) {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.Sid, myUser.FirstOrDefault().Id)
            };

            SymmetricSecurityKey key;

            if (_configuration != null)
                key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["SecurityKey"]));
            else
                key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("dd%88*377f6d&f£$$£$FdddFF33fssDG^!3"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "yourdomain.com",
                audience: "yourdomain.com",
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return Ok(new
            {
                Id = myUser.FirstOrDefault().Id,
                Token = new JwtSecurityTokenHandler().WriteToken(token),
            });
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
