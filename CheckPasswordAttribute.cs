using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MatrixEx
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false, Inherited = false)]
    public class CheckPasswordAttribute : System.ComponentModel.DataAnnotations.ValidationAttribute
    {
        private Regex regex = new Regex(@"^[a-zA-Z0-9]+$");

        public override bool IsValid(object value)
        {
            var inputValue = value as string;
            Match match = regex.Match(inputValue);
            return match.Success;
        }
    }
}
