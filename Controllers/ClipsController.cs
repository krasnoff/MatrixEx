using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MatrixEx.Data;

namespace MatrixEx.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClipsController : ControllerBase
    {
        private readonly MatrixExContext _context;

        public ClipsController(MatrixExContext context)
        {
            _context = context;
        }

        // GET: api/Clips
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Clips>>> GetClips()
        {
            string CustomerID = getCustomerId();
            List<Clips> myClips = await _context.Clips.ToListAsync();
            myClips = myClips.Where(item => item.userid == CustomerID).ToList();
            return myClips;
        }

        // GET: api/Clips/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Clips>> GetClips(int id)
        {
            var clips = await _context.Clips.FindAsync(id);

            if (clips == null)
            {
                return NotFound();
            }

            return clips;
        }

        // PUT: api/Clips/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClips(string id, Clips clips)
        {
            if (id != clips.id)
            {
                return BadRequest();
            }

            _context.Entry(clips).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClipsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clips
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Clips>>> PostClips(AddClip newClip)
        {
            string userId = getCustomerId();
            string id = Guid.NewGuid().ToString();
            Clips clips = new Clips(userId, newClip, id);
            // clips.id
            
            _context.Clips.Add(clips);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetClips", new { userId = clips.userid }, clips);
            List<Clips> myClips = await _context.Clips.ToListAsync();
            myClips = myClips.Where(item => item.userid == userId).ToList();
            return myClips;
        }

        // DELETE: api/Clips/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Clips>> DeleteClips(int id)
        {
            var clips = await _context.Clips.FindAsync(id);
            if (clips == null)
            {
                return NotFound();
            }

            _context.Clips.Remove(clips);
            await _context.SaveChangesAsync();

            return clips;
        }

        private string getCustomerId()
        {
            if (User != null)
                return (User.Claims.Where(x => x.Type.ToString().IndexOf("sid") > 0).ToList()[0].Value).ToString();

            return null;
        }

        private bool ClipsExists(string id)
        {
            return _context.Clips.Any(e => e.id == id);
        }
    }
}
