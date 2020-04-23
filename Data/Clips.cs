using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MatrixEx.Data
{
    public class Clips
    {
        [Key]
        public string id { get; set; }
        public int categoryid { get; set; }
        public string userid { get; set; }
        public string link { get; set; }

        public Clips()
        { }

        public Clips(string userIdPar, AddClip addClip, string idNum) {
            categoryid = addClip.categoryid;
            link = addClip.link;
            userid = userIdPar;
            id = idNum;
        }
    }
}
