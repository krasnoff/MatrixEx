using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MatrixEx
{
    public class Users
    {
        public Guid Id { get; set; }
        [Required(ErrorMessage = "Please fill first name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Please fill last name")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Please fill password")]
        //[CheckPassword(ErrorMessage = "Please fill a valid password")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Please fill confirm password")]
        //[Compare("Password", ErrorMessage = "The Password and Confirm Password fields do not match.")]
        public string passwordRepeat { get; set; }
        [Required(ErrorMessage = "Please fill email")]
        [CheckEmail(ErrorMessage = "Please fill a valid email")]
        public string Email { get; set; }
    }
}
