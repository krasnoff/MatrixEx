using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MatrixEx
{
    public class Signin
    {
        [Required(ErrorMessage = "Please fill password")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Please fill email")]
        [CheckEmail(ErrorMessage = "Please fill a valid email")]
        public string Email { get; set; }
    }
}
