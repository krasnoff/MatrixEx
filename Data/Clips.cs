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
        int id { get; set; }
        int categoryid { get; set; }
        string userid { get; set; }
        string link { get; set; }
    }
}
